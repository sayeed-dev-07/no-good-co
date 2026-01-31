'use client'

import React, { useRef } from 'react';
import GiftImage from '../normalComponents/GiftImage';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
    
const ShopSlider = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(()=>{

        
        gsap.to('.gift-card-img', {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger:{
                trigger:containerRef.current,
                start: 'top 60%'
            }
        })

    }, {scope: containerRef})

    return (
        <div ref={containerRef} className='font-helvic w-full'>
            <div>
                <div className='uppercase text-xs flex items-center justify-between'>
                    <p>buy good</p>
                    <p>do good</p>
                </div>
                <div className='w-full h-px bg-background'></div>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-4 py-[2%]'>
                <GiftImage index={0}/>
                <GiftImage index={1}/>
                <GiftImage index={2}/>
            </div>
        </div>
    );
};

export default ShopSlider;