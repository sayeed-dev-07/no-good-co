'use client'
import { useGSAP } from '@gsap/react';
import React, { useContext, useRef } from 'react';
import { createSplitTextReveal } from '@/lib/createSplitTextReveal';
import { IntroContext } from '../providers/IntroContext';


type prop = {
    style: string,
    text: string
}

const TextAnimation = ({ style, text }: prop) => {
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const introFinished = useContext(IntroContext)

    useGSAP(() => {
        if (!textRef.current || !introFinished) return;

        let cleanup: (() => void) | undefined;
        let isCancelled = false;

        document.fonts.ready.then(() => {
            if (isCancelled || !textRef.current) {
                return;
            }

            cleanup = createSplitTextReveal({
                element: textRef.current,
                splitType: 'lines, words',
                target: 'words',
                fromVars: {
                    y: '110%',
                },
                toVars: {
                    y: '0%',
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'expo.out',
                },
            });
        });

        return () => {
            isCancelled = true;
            cleanup?.();
        };
    }, { scope: textRef , dependencies: [introFinished] });

    return (
        
        <p
            ref={textRef}
            className={`${style} will-change-transform`}
            style={{ visibility: 'hidden' }}
        >
            {text}
        </p>
    );
};

export default TextAnimation;
