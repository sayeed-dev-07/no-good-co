'use client'
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger)

const LineAnim = ({ text, style, delay=0 }: { text: string, style?: string, delay?: number }) => {
    const textRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (!textRef.current) return
        
        document.fonts.ready.then(()=>{
            const split = SplitText.create(textRef.current, {
            type: 'lines',
            mask: 'lines',
        })
        gsap.set(split.lines, {
            force3D: true,
            willChange: 'transform, opacity',
            autoAlpha:0,
            yPercent:100,
        });
        gsap.set(textRef.current, { visibility: "visible" });
        gsap.to(split.lines,
        {
            scrollTrigger: {
                trigger: textRef.current,
                start: 'clamp(top 90%)',
            },
            ease: 'power4.out',
            yPercent: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.1,
            delay: delay
        }
         )

        return () => {
            split.revert();
        };
        })
        
    })



    return (
        <div style={{visibility: 'hidden'}} ref={textRef} className={`${style}  will-change-transform w-full`}>
            {text}
        </div>
    );
};

export default LineAnim;