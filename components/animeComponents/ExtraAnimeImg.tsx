/* eslint-disable @next/next/no-img-element */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const ExtraAnimeImg = ({ link, goTo}: { link: string, goTo:string }) => {
    const imgContainerRef = useRef<HTMLAnchorElement| null>(null)
    const imgRef = useRef<HTMLImageElement | null>(null)

    useGSAP(()=>{
        if (!imgRef.current) {
            return
        }
        gsap.set(imgRef.current, { force3D: true})

        gsap.to(imgRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: imgContainerRef.current,
                start: 'top 90%'
            }
        })
    },{scope: imgContainerRef})

    return (
            <a href={goTo} target='_blank' rel='noreferrer' ref={imgContainerRef} className='group block w-full overflow-hidden'>
            <img
                ref={imgRef}
                src={link}
                alt='Anime Image'
                loading='lazy'
                className='block w-full h-auto scale-110 opacity-0 transition-transform duration-300 group-hover:scale-[1.02]'
            />
        </a>
    );
};

export default ExtraAnimeImg;
