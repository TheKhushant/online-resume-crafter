// src/components/SmoothScrollProvider.tsx
import { useEffect, useRef } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

interface Props {
  children: React.ReactNode
}

const SmoothScrollProvider: React.FC<Props> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07, // smoothness
    })

    return () => {
      scroll.destroy()
    }
  }, [])

  return (
    <div id="scroll-container" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  )
}

export default SmoothScrollProvider
