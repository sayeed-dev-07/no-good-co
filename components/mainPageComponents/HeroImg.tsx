/* eslint-disable react-hooks/refs */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';


const HeroImg = () => {
    const imgRef = useRef(null)
    const containerRef = useRef(null)
    
    useGSAP(() => {
        if (!imgRef.current) {
            return
        }
        gsap.set(imgRef.current, { force3D: true })

        gsap.to(imgRef.current, {
            scale: 1,
            opacity: 1,
            delay: 1.2,
            duration: 0.4,
            ease: 'power2.inOut'
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className='aspect-video overflow-hidden w-full relative'>
            <Image
                ref={imgRef}
                src={'/images/heroImg.jpg'}
                alt='heroImg'
                loading='eager'
                priority
                fill
                data-speed="auto"
                className='object-top object-cover min-h-[130%] top-[-5%] w-full scale-110 opacity-0'
            />
        </div>
    );
};

export default HeroImg;