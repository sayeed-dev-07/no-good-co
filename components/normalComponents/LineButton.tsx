/* eslint-disable react-hooks/refs */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const LineButton = ({ children, auto=true }: { children: React.ReactNode, auto?: boolean }) => {
    const lineRef = useRef<HTMLDivElement | null>(null);

    const { contextSafe } = useGSAP();

    const handleMouseEnter = contextSafe(() => {
        const tl = gsap.timeline();

        
        tl.to(lineRef.current, {
            x: '101%', 
            duration: 0.3,
            ease: 'power2.in',
        })
        
        .set(lineRef.current, { 
            x: '-101%' 
        })
        .to(lineRef.current, {
            x: '0%', 
            duration: 0.4,
            ease: 'power2.out',
        });
    });

    return (
        <div 
            className={`cursor-pointer w-fit ${auto ? 'mx-auto' : ''}`} 
            onMouseEnter={handleMouseEnter}
        >
            <div className='overflow-hidden w-fit '>
                <div className=''>
                    {children}
                </div>
                
                <div 
                    ref={lineRef} 
                    className='bg-black mt-0.5 h-[1px] w-full'
                />
            </div>
        </div>
    );
};

export default LineButton;