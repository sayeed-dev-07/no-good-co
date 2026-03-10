'use client'

import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { createSplitTextReveal } from '@/lib/createSplitTextReveal';

const TextLineAnim = ({text, style} : {text : string, style?: string}) => {

    const textContainerRef = useRef<HTMLDivElement | null>(null)
    const textRef = useRef<HTMLParagraphElement | null>(null)

    useGSAP(()=>{

        if (!textRef.current) {
           return 
        }

        let cleanup: (() => void) | undefined;
        let isCancelled = false;

        document.fonts.ready.then(() => {
            if (isCancelled || !textRef.current) {
                return;
            }

            cleanup = createSplitTextReveal({
                element: textRef.current,
                trigger: textContainerRef.current ?? textRef.current,
                splitType: 'lines',
                target: 'lines',
                fromVars: {
                    autoAlpha: 0,
                    y: 30,
                },
                toVars: {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: 'power1.out',
                    delay: 0.15,
                },
            });
        });

        return () => {
            isCancelled = true;
            cleanup?.();
        };


    }, {scope: textContainerRef})

    return (
        <div ref={textContainerRef} className={`${style}`}>
            <p className='' ref={textRef} style={{ visibility: 'hidden' }}>{text}</p>
        </div>
    );
};

export default TextLineAnim;
