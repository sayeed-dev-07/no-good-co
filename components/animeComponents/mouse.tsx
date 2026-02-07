'use client'

import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type CustomCursorProps = {
  disabled?: boolean
}

const CustomCursor = ({ disabled = false }: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [mounted, setMounted] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  // Store last mouse position
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia('(hover: none), (pointer: coarse)')
    const update = () => {
      const hasTouch = media.matches || navigator.maxTouchPoints > 0
      setIsTouch(hasTouch)
    }

    update()

    if (media.addEventListener) {
      media.addEventListener('change', update)
      return () => media.removeEventListener('change', update)
    }

    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  useGSAP(() => {
    if (!mounted || isTouch || disabled) return
    const cursor = cursorRef.current
    const text = textRef.current
    if (!cursor || !text) return

    gsap.set(cursor, {
      scale: 0,
      xPercent: -50,
      yPercent: -50
    })

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.18,
      ease: "power2.out"
    })

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.18,
      ease: "power2.out"
    })

    // Mouse move (viewport coordinates so scroll doesn't desync)
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      xTo(mouse.current.x)
      yTo(mouse.current.y)
    }

    window.addEventListener("mousemove", move)

    const enter = () => {
      gsap.to(cursor, { scale: 4, duration: 0.25 })
      gsap.to(text, { opacity: 1, duration: 0.2 })
    }

    const leave = () => {
      gsap.to(cursor, { scale: 0, duration: 0.25 })
      gsap.to(text, { opacity: 0, duration: 0.2 })
    }

    const targets = document.querySelectorAll(".video-trigger")
    targets.forEach(el => {
      el.addEventListener("mouseenter", enter)
      el.addEventListener("mouseleave", leave)
    })

    return () => {
      window.removeEventListener("mousemove", move)

      targets.forEach(el => {
        el.removeEventListener("mouseenter", enter)
        el.removeEventListener("mouseleave", leave)
      })
    }
  }, { dependencies: [mounted, isTouch, disabled] })

  if (!mounted || isTouch || disabled) return null

  return createPortal(
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-9999 w-5 h-5 bg-black rounded-full pointer-events-none flex items-center justify-center"
    >
      <span
        ref={textRef}
        className="text-[4px] text-white font-bold uppercase opacity-0"
      >
        Play
      </span>
    </div>,
    document.body
  )
}

export default CustomCursor;
