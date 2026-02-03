/* eslint-disable react-hooks/refs */
'use client'

import React, { useRef, useState } from 'react'
import QuotesName from '../normalComponents/quotesName'
import { lifeQuotes } from '@/public/data/lifeQuotes'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/all'

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, Flip)
}

const QuotesSlider = () => {

  const trackRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const quoteTextRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const splitRef = useRef<SplitText | null>(null)

  const [activeBaseIdx, setActiveBaseIdx] = useState(0)

  const items = [...lifeQuotes, ...lifeQuotes, ...lifeQuotes]
  const count = lifeQuotes.length

  const { contextSafe } = useGSAP({ scope: containerRef })

  // ------------------------------------------------------------
  // MASTER TRANSITION
  // ------------------------------------------------------------

  const transitionQuote = contextSafe((newIndex: number) => {
    if (!quoteTextRef.current || !sectionRef.current) return

    const textEl = quoteTextRef.current
    const section = sectionRef.current

    // Kill leftovers
    gsap.killTweensOf(textEl)
    splitRef.current?.revert()
    splitRef.current = null

    // Split current
    const oldSplit = new SplitText(textEl, {
      type: "lines",
      mask: "lines"
    })

    splitRef.current = oldSplit

    const tl = gsap.timeline()

    // EXIT OLD
    tl.to(oldSplit.lines, {
      yPercent: 100,
      autoAlpha: 0,
      duration: 0.45,
      stagger: 0.05,
      ease: "power2.in"
    })

    // HIDE WRAPPER
    tl.set(textEl, { autoAlpha: 0 })

    // HEIGHT LOCK + SWAP
    tl.add(() => {

      // lock old height
      const oldHeight = section.offsetHeight
      gsap.set(section, { height: oldHeight })

      // capture button
      const state = Flip.getState(".btn-send")

      // cleanup old
      oldSplit.revert()
      splitRef.current = null

      // swap content
      setActiveBaseIdx(newIndex % count)

      requestAnimationFrame(() => {
        if (!quoteTextRef.current || !sectionRef.current) return

        // -------- TWO PHASE HEIGHT MEASURE --------

        // allow auto height
        gsap.set(section, { height: "auto" })
        const newHeight = section.offsetHeight

        // relock to old
        gsap.set(section, { height: oldHeight })

        // animate height
        gsap.to(section, {
          height: newHeight,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(section, { clearProps: "height" })
          }
        })

        // FLIP button
        Flip.from(state, {
          duration: 0.8,
          ease: "power3.inOut"
        })

        // SPLIT NEW
        const newSplit = new SplitText(textEl, {
          type: "lines",
          mask: "lines"
        })

        splitRef.current = newSplit

        gsap.set(newSplit.lines, {
          yPercent: 100,
          autoAlpha: 0
        })

        gsap.set(textEl, { autoAlpha: 1 })

        // ENTER NEW
        gsap.to(newSplit.lines, {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power4.out"
        })
      })
    })

  })

  // ------------------------------------------------------------
  // CENTER ITEM
  // ------------------------------------------------------------

  const centerItem = contextSafe((index: number, instant = false) => {
    const track = trackRef.current
    if (!track) return

    const item = track.children[index] as HTMLElement
    const viewportCenter = window.innerWidth / 2
    const targetX = viewportCenter - (item.offsetLeft + item.offsetWidth / 2)

    if (!instant) transitionQuote(index % count)
    else setActiveBaseIdx(index % count)

    gsap.to(track, {
      x: targetX,
      duration: instant ? 0 : 1.2,
      ease: "power4.out",
      overwrite: "auto",
      onComplete: () => {
        if (!instant && (index < count || index >= count * 2)) {
          centerItem((index % count) + count, true)
        }
      }
    })
  })

  // ------------------------------------------------------------

  useGSAP(() => {
    centerItem(count, true)
  }, [])

  // ------------------------------------------------------------

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-24 relative "
    >

      {/* SLIDER */}
      <div
        ref={trackRef}
        className="flex w-max flex-nowrap  sm:gap-x-16 gap-x-8 items-center"
        style={{ willChange: "transform" }}
      >
        {items.map((quote, i) => (
          <div
            key={i}
            className="shrink-0 cursor-pointer"
            onClick={() => centerItem(i)}
          >
            <QuotesName
              data={quote}
              isActive={activeBaseIdx === (i % count)}
            />
          </div>
        ))}
      </div>

      {/* QUOTE SECTION */}
      <div
        ref={sectionRef}
        className="quotesSection mt-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div
            ref={quoteTextRef}
            className="text-[8vw] md:text-[5vw] md:leading-[5.2vw] xl:text-[3.5vw] font-futura leading-[8.2vw] xl:leading-[3.4vw] font-extrabold uppercase  "
          >
            {lifeQuotes[activeBaseIdx]?.quote}
          </div>

          <p className="mt-6 text-sm uppercase tracking-widest font-bold text-gray-500">
            — {lifeQuotes[activeBaseIdx]?.author}
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="btn-send sm:px-12 sm:py-5 py-3.5 px-6 rounded-4xl text-sm font-semibold font-helvic uppercase text-foreground bg-background border w-fit m-auto mt-10 cursor-pointer hover:bg-gray-800 transition-colors">
        Send your own quotes
      </div>

    </div>
  )
}

export default QuotesSlider
