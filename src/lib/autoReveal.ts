import { useEffect, type RefObject } from "react"

/** Elements that animate in on their own: headings, text and photos (see .ar / .ar-in in index.css). */
export const AUTO_REVEAL_SELECTOR = "h1, h2, h3, h4, p, img, blockquote, figcaption"

/** Areas that already run their own entrance animations, or must never start hidden. */
const SKIP = "[data-no-reveal], header, nav, dialog, [role=dialog], .reveal, .gh .hero, .gh .bento, .gh .kx, .gh .spot, .gh .ptl, .gh .amap-section, .gh .fp-dots"

/** true when `el` may be hidden and animated in (not inside a skipped area, no animation of its own). */
export function canAutoReveal(el: HTMLElement) {
  if (el.classList.contains("ar") || el.closest(SKIP)) return false
  return getComputedStyle(el).animationName === "none"
}

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

/**
 * Scroll-triggered entrance for every heading, paragraph and photo under `ref`, including ones
 * rendered later. Elements visible together enter one after another. The Georgia atlas (.gh)
 * is left out — its full-screen slides play the same animation as each slide arrives.
 */
export function useAutoReveal(ref: RefObject<HTMLElement | null>, key: string, enabled = true) {
  useEffect(() => {
    const root = ref.current
    if (!root || !enabled || reducedMotion()) return

    const io = new IntersectionObserver(
      (entries) => {
        let n = 0
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          el.style.setProperty("--ar-d", `${Math.min(n++ * 70, 560)}ms`)
          el.classList.add("ar-in")
          io.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    )
    const tag = (el: HTMLElement) => {
      if (el.closest(".gh") || !canAutoReveal(el)) return
      el.classList.add("ar")
      io.observe(el)
    }
    const tagAll = (scope: HTMLElement) => {
      if (scope.matches(AUTO_REVEAL_SELECTOR)) tag(scope)
      scope.querySelectorAll<HTMLElement>(AUTO_REVEAL_SELECTOR).forEach(tag)
    }

    tagAll(root)
    const mo = new MutationObserver((records) => {
      for (const r of records) r.addedNodes.forEach((node) => { if (node instanceof HTMLElement) tagAll(node) })
    })
    mo.observe(root, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [ref, key, enabled])
}
