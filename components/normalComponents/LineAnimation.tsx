'use client'
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { createSplitTextReveal } from '@/lib/createSplitTextReveal';

const LineAnim = ({ text, style, delay=0, per='95%' }: { text: string, style?: string, delay?: number, per?:string }) => {
    const textRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (!textRef.current) return

        let cleanup: (() => void) | undefined;
        let isCancelled = false;

        document.fonts.ready.then(() => {
            if (isCancelled || !textRef.current) {
                return;
            }

            cleanup = createSplitTextReveal({
                element: textRef.current,
                splitType: 'lines',
                target: 'lines',
                start: `clamp(top ${per})`,
                immediateThreshold: per === 'bottom' ? 1 : Number.parseFloat(per) / 100 || 0.95,
                fromVars: {
                    force3D: true,
                    willChange: 'transform, opacity',
                    autoAlpha: 0,
                    yPercent: 100,
                },
                toVars: {
                    ease: 'power4.out',
                    yPercent: 0,
                    autoAlpha: 1,
                    duration: 1,
                    stagger: 0.05,
                    delay,
                },
            });
        });

        return () => {
            isCancelled = true;
            cleanup?.();
        };
    })



    return (
        <div style={{visibility: 'hidden'}} ref={textRef} className={`${style}  will-change-transform w-full`}>
            {text}
        </div>
    );
};

export default LineAnim;
