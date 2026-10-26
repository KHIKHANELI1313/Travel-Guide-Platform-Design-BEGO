import { useCallback, useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react"

/* ---------- full-screen slides instead of page scrolling ----------
   Every top-level child of the container is a slide (data-fp = prev | active | next, styled in CSS).
   Wheel / keys / swipe move between slides; a slide taller than the screen, or any inner scroll
   area (map panel lists, carousels…), scrolls natively first and only hands over at its edge. */
export const FP_LOCK_MS = 1000
/** transition effects, cycled per slide: slide i enters with FP_FX[(i - 1) % n] */
const FP_FX = ["rise", "slide", "zoom", "circle", "diagonal", "drop", "flip"]

/** px of leftover scroll to ignore — sub-pixel rounding and reveal offsets leave a few px of overflow */
const FP_SCROLL_SLACK = 24

/** true when something between `target` and the container can still scroll in direction `dir` */
function canScrollInside(target: EventTarget | null, dir: number, container: HTMLElement) {
  for (let el = target as HTMLElement | null; el && el !== container; el = el.parentElement) {
    const oy = getComputedStyle(el).overflowY
    if ((oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight + FP_SCROLL_SLACK) {
      if (dir > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) return true
      if (dir < 0 && el.scrollTop > 0) return true
    }
  }
  return false
}

/** Brings the slide that holds `el` on screen; false when `el` is not inside a slide deck. */
export function showSlideOf(el: Element | null) {
  const slide = el?.closest<HTMLElement>("[data-fp]")
  if (!slide) return false
  slide.dispatchEvent(new CustomEvent("fp:show", { bubbles: true }))
  return true
}

export function useFullPage(
  ref: RefObject<HTMLElement | null>,
  resetKey: string,
  onChange: (index: number, count: number) => void,
  /** content block inside each slide that is shrunk to fit a short screen */
  fitSelector = ":scope > .wrap, :scope > .hero-grid, :scope > .page-hero-inner",
) {
  const [index, setIndex] = useState(0)
  const [labels, setLabels] = useState<string[]>([])
  const state = useRef({ index: 0, count: 0, locked: false, acc: 0 })
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  const goTo = useCallback((i: number) => {
    const s = state.current
    const next = Math.max(0, Math.min(s.count - 1, i))
    if (next === s.index) return
    s.index = next
    s.locked = true
    window.setTimeout(() => { s.locked = false }, FP_LOCK_MS)
    setIndex(next)
  }, [])

  // a new page starts at its first slide
  useLayoutEffect(() => {
    state.current.index = 0
    setIndex(0)
  }, [resetKey])

  // after every render: mark slide states, keep count + labels in sync with the content
  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const slides = Array.from(root.children) as HTMLElement[]
    state.current.count = slides.length
    if (state.current.index > slides.length - 1) state.current.index = Math.max(0, slides.length - 1)
    slides.forEach((el, i) => {
      const s = i < state.current.index ? "prev" : i === state.current.index ? "active" : "next"
      if (el.dataset.fp !== s) el.dataset.fp = s
      // fx: how this slide comes in; out: how it leaves when the following slide comes in
      el.dataset.fx = FP_FX[(i + FP_FX.length - 1) % FP_FX.length]
      el.dataset.out = FP_FX[i % FP_FX.length]
      el.toggleAttribute("inert", i !== state.current.index)
    })
    const next = slides.map((el) =>
      (el.dataset.fpLabel ?? el.querySelector(".eyebrow, h1, h2")?.textContent ?? "").trim() || "ინფორმაცია",
    )
    setLabels((prev) => (prev.join("|") === next.join("|") ? prev : next))
  })

  useEffect(() => {
    onChangeRef.current(index, state.current.count)
  }, [index, labels])

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const html = document.documentElement
    const prevOverflow = html.style.overflow
    html.style.overflow = "hidden"
    window.scrollTo(0, 0)

    const step = (dir: number) => goTo(state.current.index + dir)
    const onWheel = (e: WheelEvent) => {
      if (e.defaultPrevented || e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      const dir = Math.sign(e.deltaY)
      if (!dir || canScrollInside(e.target, dir, root)) return
      e.preventDefault()
      const s = state.current
      if (s.locked) return
      s.acc += e.deltaY
      if (Math.abs(s.acc) < 40) return
      s.acc = 0
      step(dir)
    }
    const onKey = (e: KeyboardEvent) => {
      const t = e.target instanceof Element ? e.target : null
      if (e.altKey || e.ctrlKey || e.metaKey || t?.closest("input, textarea, select, [contenteditable]")) return
      // an open dialog keeps its keys (arrows, space) to itself instead of changing the slide behind it
      if (document.querySelector("[aria-modal=true]")) return
      if (e.key === " " && t?.closest("button, a, summary, [role=button]")) return // space presses the focused control
      const dir = ["ArrowDown", "PageDown"].includes(e.key) || (e.key === " " && !e.shiftKey) ? 1
        : ["ArrowUp", "PageUp"].includes(e.key) || (e.key === " " && e.shiftKey) ? -1 : 0
      if (e.key === "Home" || e.key === "End") {
        e.preventDefault()
        goTo(e.key === "Home" ? 0 : state.current.count - 1)
        return
      }
      if (!dir) return
      e.preventDefault()
      const slide = root.children[state.current.index] as HTMLElement | undefined
      // a tall slide pages through its own content before moving on
      if (slide && canScrollInside(slide, dir, root)) {
        slide.scrollBy({ top: dir * slide.clientHeight * 0.8, behavior: "smooth" })
        return
      }
      if (!state.current.locked) step(dir)
    }
    let touch: { x: number; y: number; canDown: boolean; canUp: boolean } | null = null
    const onTouchStart = (e: TouchEvent) => {
      const p = e.touches[0]
      // maps pan with touch, so swipes there never change slides
      if ((e.target as HTMLElement).closest(".leaflet-container")) { touch = null; return }
      touch = { x: p.clientX, y: p.clientY, canDown: canScrollInside(e.target, 1, root), canUp: canScrollInside(e.target, -1, root) }
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (!touch) return
      const p = e.changedTouches[0]
      const dy = touch.y - p.clientY
      const dx = touch.x - p.clientX
      const t = touch
      touch = null
      if (Math.abs(dy) < 50 || Math.abs(dx) > Math.abs(dy) || state.current.locked) return
      if (dy > 0 && !t.canDown) step(1)
      if (dy < 0 && !t.canUp) step(-1)
    }

    // shrink a slide's content (down to 70%) when it is taller than the screen, so nothing needs scrolling
    const FIT = fitSelector
    let fitFrame = 0
    const fit = () => {
      cancelAnimationFrame(fitFrame)
      fitFrame = requestAnimationFrame(() => {
        for (const slide of Array.from(root.children) as HTMLElement[]) {
          const content = slide.querySelector<HTMLElement>(FIT)
          if (!content) continue
          content.style.zoom = ""
          // layout heights (offsetHeight ignores reveal transforms, which only shift elements visually)
          const cs = getComputedStyle(slide)
          let avail = slide.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)
          for (const sib of Array.from(slide.children) as HTMLElement[]) {
            const pos = getComputedStyle(sib).position
            if (sib !== content && pos !== "absolute" && pos !== "fixed") avail -= sib.offsetHeight
          }
          const h = content.offsetHeight
          if (h > avail + 1) content.style.zoom = Math.max(0.7, avail / h).toFixed(3)
        }
      })
    }
    const ro = new ResizeObserver(fit)
    ro.observe(root)
    for (const slide of Array.from(root.children)) {
      const content = slide.querySelector(FIT)
      if (content) ro.observe(content)
    }

    // showSlideOf(): a slide asks to be brought on screen
    const onShow = (e: Event) => {
      const i = Array.prototype.indexOf.call(root.children, e.target)
      if (i >= 0) goTo(i)
    }
    root.addEventListener("fp:show", onShow)
    root.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("keydown", onKey)
    root.addEventListener("touchstart", onTouchStart, { passive: true })
    root.addEventListener("touchend", onTouchEnd, { passive: true })
    return () => {
      html.style.overflow = prevOverflow
      ro.disconnect()
      cancelAnimationFrame(fitFrame)
      root.removeEventListener("fp:show", onShow)
      root.removeEventListener("wheel", onWheel)
      window.removeEventListener("keydown", onKey)
      root.removeEventListener("touchstart", onTouchStart)
      root.removeEventListener("touchend", onTouchEnd)
    }
  }, [ref, goTo, resetKey, fitSelector])

  return { index, count: labels.length, labels, goTo }
}
