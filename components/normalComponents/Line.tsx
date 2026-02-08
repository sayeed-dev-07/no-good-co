'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Line = ({text1, text2, textOn=true}:{text1?: string, text2?: string, textOn?: boolean}) => {

    const lineContainer = useRef<HTMLDivElement | null>(null)
    const lineRef = useRef<HTMLDivElement | null>(null)

    useGSAP(()=>{
        if (!lineRef.current) {
            return
        }
        gsap.to(lineRef.current,{
            x:0,
            force3D:true,
            duration:0.5,
            ease:'power1.out',
            scrollTrigger:{
                trigger:lineRef.current,
                start: 'top 80%'
            }
        })
    },{scope:lineContainer})

    return (
        
            <div ref={lineContainer}>
                { textOn && <div className='uppercase text-xs flex items-center justify-between'>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>}
                <div ref={lineRef} className='w-full will-change-transform -translate-x-full h-px bg-background'></div>
            </div>
    );
};

export default Line;