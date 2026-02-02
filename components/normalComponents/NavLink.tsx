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
        gsap.to(svgRef.current, {
            clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0 100%)',
            duration:0.3,
            ease:'power2.out',
        })
    })
    const mouseOUT = contextSafe(() => {
        gsap.to(svgRef.current, {
            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
            duration:0.3,
            ease:'power2.out',
            onComplete: ()=>{
                gsap.set(svgRef.current, {
                    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
                })
            }
        })
    })
    return (
        <div  onMouseEnter={mouseIN} onMouseLeave={mouseOUT} className='overflow-hidden flex flex-col items-end'>
            <Link onClick={()=>setOpenMenu(false)} className='link' href={path}>{text}</Link>
            <div onMouseEnter={mouseIN} onMouseLeave={mouseOUT} style={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}} ref={svgRef} className='flex w-[60%] mx-auto h-2.5 relative items-center  justify-center'>
                <Image fill className='object-cover ' alt='borderImg' src={'/whiteline.svg'} />
            </div>
        </div>
    );
};

export default NavLink;