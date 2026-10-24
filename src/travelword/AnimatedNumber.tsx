import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"

/**
 * Counts up to `value` once it scrolls into view, and eases between values when a filter changes it.
 * With reduced motion the number is simply set.
 */
export default function AnimatedNumber({ value, prefix = "", className }: { value: number; prefix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const shown = useRef(0)
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" })
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !inView) return
    const write = (n: number) => {
      shown.current = n
      el.textContent = `${prefix}${Math.round(n).toLocaleString("en-US")}`
    }
    if (reduce) return write(value)
    const controls = animate(shown.current, value, { duration: 0.9, ease: [0.22, 1, 0.36, 1], onUpdate: write })
    return () => controls.stop()
  }, [value, inView, reduce, prefix])

  return <span ref={ref} className={`tabular-nums ${className ?? ""}`}>{prefix}0</span>
}
