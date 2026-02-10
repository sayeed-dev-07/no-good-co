'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import AnimeCard from './AnimeCard';
import { storyData } from '@/public/data/StoriesData';

gsap.registerPlugin(ScrollTrigger);

const ScrollContainer = () => {
    const containerRef = useRef(null);
    const [isTouch, setIsTouch] = useState(false)
    
    useEffect(() => {
            if (typeof window === 'undefined') return
    
            const media = window.matchMedia('(hover: none), (pointer: coarse)')
            const update = () => {
                const hasTouch = media.matches || navigator.maxTouchPoints > 0
                setIsTouch(hasTouch)
            }
    
            update()
    
            if (media.addEventListener) {
                media.addEventListener('change', update)
                return () => media.removeEventListener('change', update)
            }
    
            media.addListener(update)
            return () => media.removeListener(update)
        }, [])

    useGSAP(() => {

        const cards = gsap.utils.toArray('.card', containerRef.current);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${cards.length * 100}%`,
                pin: true,
                scrub: isTouch ? 0 : 1,
            }
        });

        // 3. Animate cards stacking
        cards.forEach((card, i) => {
            if (i > 0) {
                tl.from(card as gsap.TweenTarget, {
                    yPercent: 100,
                    ease: "none",
                    duration: 1,
                    force3D: true
                });
                
            }
        });

    }, { scope: containerRef });

    return (

        <div ref={containerRef} className='h-screen w-full relative overflow-hidden bg-[#6d916e]'>
            {
                storyData.map((item) => {
                    return <AnimeCard key={item.id} char={item} />
                })
            }
        </div>
    );
};

export default ScrollContainer;