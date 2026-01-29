/* eslint-disable react-hooks/refs */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';


const NavLink = ({ path, text, setOpenMenu }: { path: string, text: string, setOpenMenu:React.Dispatch<React.SetStateAction<boolean>> }) => {
    const svgRef = useRef<HTMLDivElement | null>(null)
    const { contextSafe } = useGSAP()

    const mouseIN = contextSafe(() => {
        const mm = gsap.matchMedia()
        mm.add("(min-width: 768px)", () => {
            gsap.to(svgRef.current, {
                x: 0,
                duration: 0.3,
                ease: 'power3',

            })
        });

    })
    const mouseOUT = contextSafe(() => {
        const mm = gsap.matchMedia()
        mm.add("(min-width: 768px)", () => {
            gsap.to(svgRef.current, {
                x: '+=100%',
                duration: 0.3,
                ease: 'power3',

                onComplete: () => {
                    gsap.set(svgRef.current, {
                        x: '-100%'
                    })
                }
            })
        });

    })
    return (
        <div  onMouseEnter={mouseIN} onMouseLeave={mouseOUT} className='overflow-hidden flex flex-col items-end'>
            <Link onClick={()=>setOpenMenu(false)} className='link' href={path}>{text}</Link>
            <div ref={svgRef} className='flex items-center w-full justify-center -translate-x-full'>
                <Image width={200} height={200} className='w-1/2' alt='borderImg' src={'/whiteline.svg'} />
            </div>
        </div>
    );
};

export default NavLink;