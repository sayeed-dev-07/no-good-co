/* eslint-disable react-hooks/refs */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';


import React, { useEffect, useRef, useState } from 'react';


const NavLink = ({ path, text, setOpenMenu }: { path: string, text: string, setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const svgRef = useRef<HTMLDivElement | null>(null)
    const [isTouch, setIsTouch] = useState(false)
    const { contextSafe } = useGSAP(
        () => {
            if (!svgRef.current) return;

            gsap.set(svgRef.current, {
                clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
                willChange: 'clip-path',
            });
        }
    )

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
    const handleClick = () => {
        setOpenMenu(false);
    };
    const mouseIN = contextSafe(() => {
        if (isTouch) return
        gsap.to(svgRef.current, {
            clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0 100%)',
            duration: 0.3,
            ease: 'power2.out',
        })
    })
    const mouseOUT = contextSafe(() => {
        if (isTouch) return
        gsap.to(svgRef.current, {
            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
                gsap.set(svgRef.current, {
                    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
                })
            }
        })
    })
    return (
        <div onMouseEnter={isTouch ? undefined : mouseIN} onMouseLeave={isTouch ? undefined : mouseOUT} className='overflow-hidden flex flex-col items-end'>
            <Link onClick={handleClick} className='link' href={path}>{text}</Link>
            <div onMouseEnter={isTouch ? undefined : mouseIN} onMouseLeave={isTouch ? undefined : mouseOUT} ref={svgRef} className='flex w-[60%] mx-auto h-2.5 relative items-center  justify-center'>
                <Image fill className='object-cover ' alt='borderImg' src={'/whiteline.svg'} />
            </div>
        </div>
    );
};

export default NavLink;
