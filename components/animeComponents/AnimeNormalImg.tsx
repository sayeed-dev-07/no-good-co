'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const AnimeNormalImg = ({ link, delayTime=0, big=false }: { link: string, delayTime?:number, big?: boolean }) => {
    const imgContainerRef = useRef<HTMLDivElement| null>(null)
    const imgRef = useRef(null)

    useGSAP(()=>{
        if (!imgRef.current) {
            return
        }
        gsap.set(imgRef.current, { force3D: true })

        gsap.to(imgRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay:delayTime,
            ease: 'power2.inOut',
            scrollTrigger:{
                trigger: imgContainerRef.current,
                start: 'top 90%'
            }
        })
    },{scope: imgContainerRef})

    return (
        
            <div ref={imgContainerRef} className={`relative w-full flex items-start  ${big ? 'h-[40vh] lg:h-[70vh]' : 'md:min-h-[70vh] sm:min-h-[50vh] h-full min-h-[40vh]'}  overflow-hidden`}>
            <Image ref={imgRef} 
                src={link} 
                alt='Anime Image' 
                fill 
                data-speed="0.8"
                sizes="(max-width: 768px) 100vw, 50vw"
                className='object-cover h-[120%] w-full top-[-10%] object-top absolute scale-110 opacity-0'
            />
        </div>
        
    );
};

export default AnimeNormalImg;