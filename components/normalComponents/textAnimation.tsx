'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';

type prop = {
    style: string,
    text: string
}


gsap.registerPlugin(SplitText);


const TextAnimation = ({style, text}:prop) => {
    const textRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {
        if (!textRef.current) return;

        // 1. Split the text
        const split = new SplitText(textRef.current, {
            type: 'lines, words',
            mask:'lines'
        });

        
        gsap.set(textRef.current, { visibility: 'visible' });

        // 3. The Animation
        gsap.from(split.words, {
            y: '110%',             
            duration: 1.2,
            stagger: 0.2,             // Faster stagger usually feels more "premium"
            ease: 'expo.out',          // Expo is the king of smooth transitions
            delay: 0.2,
        });

        return ()=>{
            split.revert()
        }

    }, { scope: textRef }); 

    return (
        /* Add "invisible" class or inline style to hide it initially */
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