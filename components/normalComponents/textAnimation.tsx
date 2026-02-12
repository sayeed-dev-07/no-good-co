'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, {  useContext, useRef } from 'react';
import { IntroContext } from '../providers/IntroContext';


type prop = {
    style: string,
    text: string
}


gsap.registerPlugin(SplitText);


const TextAnimation = ({ style, text }: prop) => {
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const introFinished = useContext(IntroContext)
    useGSAP(() => {
        if (!textRef.current || !introFinished) return;

        // 1. Split the text
        document.fonts.ready.then(() => {
            
            const split = new SplitText(textRef.current, {
                type: 'lines, words',
                mask: 'lines'
            });
            gsap.set(textRef.current, { visibility: 'visible' });
            const tl = gsap.timeline()
            
            tl.from(split.words, {
                y: '110%',
                duration: 1.2,
                stagger: 0.2,             
                ease: 'expo.out',         
            }) 

            return () => {
                split.revert()
            }
        })




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