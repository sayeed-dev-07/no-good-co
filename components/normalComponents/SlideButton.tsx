/* eslint-disable react-hooks/refs */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const SlideButton = ({ text }: { text: string }) => {
    const buttonBgRef = useRef<HTMLDivElement| null>(null)
    const buttonContainer = useRef<HTMLDivElement| null>(null)
    const tl = useRef<GSAPTimeline | null>(null)
    const {contextSafe} = useGSAP(()=>{
        const text = buttonContainer.current?.querySelector('.textRef')
        tl.current = gsap.timeline({paused: true})
        tl.current.to(buttonBgRef.current, {
            x:0,
            duration:0.5,
            onStart:()=>{
                text?.classList.add('text-foreground')
            },
            ease:'power2.inOut',
            overwrite: 'auto'
        })
    },{scope: buttonContainer})

    const hoverIN = contextSafe(()=>{
        tl.current?.timeScale(1).play()
    })
    const hoverOut = contextSafe(()=>{
        const text = buttonContainer.current?.querySelector('.textRef')
        text?.classList.remove('text-foreground')
        tl.current?.timeScale(1.3).reverse()
    })

    return (
        <div ref={buttonContainer} onMouseEnter={hoverIN} onMouseLeave={hoverOut} className='sm:px-12 px-6 text-background rounded-sm cursor-pointer overflow-hidden py-3 sm:py-5 relative border-2'>
            <div ref={buttonBgRef} className='absolute w-full -translate-x-full inset-0 z-0 bg-background'></div>
            <div className='relative textRef  z-10 uppercase font-semibold font-helvic text-xs'>{text}</div>
        </div>
    );
};

export default SlideButton;