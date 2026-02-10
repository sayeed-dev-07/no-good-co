'use client'
import React, { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ImpactHidden from './ImpactHidden';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export type NameProp = {
    name: 'programs' | 'theory' | 'approach' | 'testimonials',
    index: number
}

const ImpactItems = ({ name, index }: NameProp) => {
    const [isOpen, setIsOpen] = useState(false)
    const arrowRef = useRef<HTMLDivElement | null>(null)
    const { contextSafe } = useGSAP(() => {
        if (isOpen) {
            gsap.to(arrowRef.current, {
                rotate: 180,
                duration: 0.4,
                ease: 'power3.in'
            })
        } else {
            gsap.to(arrowRef.current, {
                rotate: 0,
                duration: 0.4,
                ease: 'power3.in'
            })
        }
    }, { dependencies: [isOpen] })

    const handleClick = contextSafe(() => {
        setIsOpen(!isOpen)
    })
    const wrapName = (name: string) => {
        if (name === 'programs') {
            return 'OUR PROGRAMS'
        }else if (name === 'theory') {
            return 'OUR THEORY OF CHANGE'
        }else if (name === 'approach') {
            return 'OUR APPROACH'
        }else{
            return name;
        }
    }

    return (
        <div className='w-full'>
            <div className='w-full h-0.5 sm:h-1 bg-background'/>
            <div onClick={handleClick} className='w-full cursor-pointer lg:text-5xl md:text-4xl sm:text-3xl text-xl md:py-12 sm:py-8 py-6 uppercase gap-x-2 font-futura flex items-center justify-between'>
                <p className='flex-1'>0{index}</p>
                <p className='md:flex-3 flex-4 text-start text-wrap'>{wrapName(name)}</p>
                <div ref={arrowRef}>
                    <FaChevronDown className='text-2xl' />
                </div>
            </div>

            <div className='w-full'>
                <ImpactHidden open={isOpen} name={name} />
            </div>

        </div>
    );
};

export default ImpactItems;