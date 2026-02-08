'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



type Prop = {
    link: string,
    date: string,
    writer?: string,
    author: string,
    quotes: string,
    color: string
}

const TestimonialImage = ({ link, date, writer = 'written by sayeed', author, quotes, color }: Prop) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const imageLayerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const topTextRef = useRef<HTMLDivElement>(null);
    const bottomTextRef = useRef<HTMLDivElement>(null);
    const hoverTlRef = useRef<GSAPTimeline | null>(null);
    const [canHover, setCanHover] = useState(false);

    useEffect(() => {
        const media = window.matchMedia('(hover: hover) and (pointer: fine)');
        const syncCanHover = () => setCanHover(media.matches);

        syncCanHover();
        media.addEventListener('change', syncCanHover);
        return () => media.removeEventListener('change', syncCanHover);
    }, []);

    useGSAP(() => {
        if (!canHover) {
            hoverTlRef.current?.kill();
            hoverTlRef.current = null;

            gsap.set(imageLayerRef.current, {
                scale: 1,
                filter: 'saturate(1) brightness(1)'
            });

            gsap.set(overlayRef.current, {
                autoAlpha: 0
            });

            gsap.set(topTextRef.current, {
                yPercent: -45,
                autoAlpha: 0
            });

            gsap.set(bottomTextRef.current, {
                yPercent: 45,
                autoAlpha: 0
            });
            return;
        }

        gsap.set(imageLayerRef.current, {
            scale: 1,
            filter: 'saturate(1) brightness(1)'
        });

        gsap.set(overlayRef.current, {
            autoAlpha: 0
        });

        gsap.set(topTextRef.current, {
            yPercent: -45,
            autoAlpha: 0
        });

        gsap.set(bottomTextRef.current, {
            yPercent: 45,
            autoAlpha: 0
        });

        hoverTlRef.current = gsap.timeline({
            paused: true,
            defaults: {
                duration: 0.7,
                ease: 'power3.out'
            }
        })
            .to(imageLayerRef.current, {
                scale: 1.04,
                filter: 'saturate(0.55) brightness(0.72)'
            }, 0)
            .to(overlayRef.current, {
                autoAlpha: 1,
                backgroundColor: color
            }, 0)
            .to(topTextRef.current, {
                yPercent: 0,
                autoAlpha: 1
            }, 0.08)
            .to(bottomTextRef.current, {
                yPercent: 0,
                autoAlpha: 1
            }, 0.14);
    }, { scope: cardRef, dependencies: [color, canHover], revertOnUpdate: true });

    const handleEnter = () => hoverTlRef.current?.play();
    const handleLeave = () => hoverTlRef.current?.timeScale(1.3).reverse();

    return (

        <div
            ref={cardRef}
            onPointerEnter={canHover ? handleEnter : undefined}
            onPointerLeave={canHover ? handleLeave : undefined}
            className={`relative aspect-video text-foreground w-full h-[80vh] overflow-hidden ${canHover ? 'cursor-pointer' : ''}`}
        >
            <div ref={overlayRef} style={{ backgroundColor: color }} className='absolute z-20 w-full h-full p-2 flex justify-between flex-col opacity-0'>
                <div ref={topTextRef} className='flex text-sm font-social items-center justify-between uppercase'>
                    <p className='uppercase'>{writer}</p>
                    <p>{date}</p>
                </div>
                <div ref={bottomTextRef} className='font-futura pb-12 px-4 flex flex-col gap-y-5 uppercase'>
                    <p className='text-3xl'>{quotes}</p>
                    <p className='text-xl'>—&nbsp;{author}</p>
                </div>
            </div>

            <div ref={imageLayerRef} className='absolute inset-0 z-10 will-change-transform'>
                <Image fill loading='eager' sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw' alt='hiddenImg' src={link} className='object-cover' />
            </div>
        </div>

    );
};

export default TestimonialImage;
