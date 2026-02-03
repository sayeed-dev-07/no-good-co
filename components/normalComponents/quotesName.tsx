/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';



interface QuoteData {
  id: number | string;
  author: string;
}

const QuotesName = ({ data, isActive }: { data: QuoteData; isActive: boolean }) => {
  const svgRef = useRef(null)
  const tl = useRef<GSAPTimeline | null>(null)
  useGSAP(() => {
      tl.current = gsap.timeline({paused: true})
      tl.current.to(svgRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0 100%)',
        duration: 0.3,
        ease: 'power2.out',
      })
  })

  useEffect(()=>{
    if (isActive) {
      tl.current?.timeScale(1).play()
    }else{
      tl.current?.timeScale(1.6).reverse()
    }
  }, [isActive])

  return (
    <div
      className={`
        w-fit md:w-[320px] px-3 relative sm:px-8 transition-all duration-500 cursor-pointer
        flex flex-col gap-y-4 shrink-0
        ${isActive ? 'opacity-100 scale-110' : 'opacity-60 scale-90'}
      `}
    >

      <div
        className={`
          h-[15px] w-[15px] rounded-full border border-background
          ${isActive ? 'bg-background' : 'bg-foreground'}
        `}
      />

      <div className="font-helvic text-background">
        <p className="text-xs uppercase tracking-widest opacity-70">
          Quotes // 0{data.id}
        </p>
        <p className="text-lg sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
          {data.author}
        </p>
      </div>
      <Image ref={svgRef} style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }} height={25} width={150} className='w-fit object-cover h-full' alt='borderImg' src={'/images/quotesBottom.svg'} />
    </div>
  )
}

export default QuotesName;