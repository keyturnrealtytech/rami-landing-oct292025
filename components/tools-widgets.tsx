"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

// Sized placeholder so deferring the calculators causes no layout shift.
function Skeleton() {
  return <div className="min-h-[520px] rounded-3xl border-2 border-[#e6efee] bg-white/50 animate-pulse" aria-hidden />
}

const PaymentCalculator = dynamic(
  () => import("@/components/payment-calculator").then((m) => m.PaymentCalculator),
  { ssr: false, loading: () => <Skeleton /> },
)
const VaChecker = dynamic(() => import("@/components/va-checker").then((m) => m.VaChecker), {
  ssr: false,
  loading: () => <Skeleton />,
})

/**
 * Renders the interactive calculators only once they near the viewport. Keeps
 * their JS out of the initial load/hydration burst (lowers Total Blocking Time)
 * — the section heading above stays server-rendered, and a sized skeleton holds
 * the space so there's no layout shift. Full functionality once reached.
 */
export function ToolsWidgets() {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin: "500px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
      {show ? (
        <>
          <PaymentCalculator />
          <VaChecker />
        </>
      ) : (
        <>
          <Skeleton />
          <Skeleton />
        </>
      )}
    </div>
  )
}
