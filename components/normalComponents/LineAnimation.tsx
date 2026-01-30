'use client'
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger)

const LineAnim = ({ text, style }: { text: string, style?: string }) => {
    const textRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (!textRef.current) return
        // const mm = gsap.matchMedia()
        // mm.add("(min-width: 769px)", () => {
        const split = SplitText.create(textRef.current, {
            type: 'lines',
            mask: 'lines'
        })
        gsap.set(split.chars, {
            force3D: true,
            willChange: 'transform, opacity'
        });
        gsap.from(split.lines, {
            scrollTrigger: {
                trigger: textRef.current,
                start: '',
                once: true
            },
            ease: 'power4.out',
            y: 100,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.1,
        })

        return () => {
            split.revert();
        };
        // });
    }, { scope: textRef })



    return (
        <div ref={textRef} className={`${style} will-change-auto`}>
            {text}
        </div>
    );
};

export default LineAnim;