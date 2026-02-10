'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';

gsap.registerPlugin(SplitText)

const TextLineAnim = ({text, style} : {text : string, style?: string}) => {

    const textContainerRef = useRef<HTMLDivElement | null>(null)
    const textRef = useRef<HTMLParagraphElement | null>(null)

    useGSAP(()=>{

        if (!textRef.current) {
           return 
        }
        
        document.fonts.ready.then(()=>{
            const splitText = new SplitText(textRef.current, {
                type: 'lines',
                mask: 'lines'
            })
            gsap.from(splitText.lines, {
                autoAlpha: 0,
                y:30,
                duration:0.4,
                stagger:0.1,
                ease:'power1',
                delay:0.5
            })
        })


    }, {scope: textContainerRef})

    return (
        <div ref={textContainerRef} className={`${style}`}>
            <p className='' ref={textRef}>{text}</p>
        </div>
    );
};

export default TextLineAnim;