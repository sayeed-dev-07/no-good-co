'use client'
import React, { useRef } from 'react';
import ProductCard from '../normalComponents/ProductCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const ProductSection = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        gsap.from('.imgContainer1', {
            y: 200,
            opacity: 0,
            duration:0.7,
            ease:'power3.out',
            scrollTrigger:{
                trigger:'.card-container1',
                start:'top 90%',
                
            },
            stagger:0.4,
            delay:0.2
        })
        gsap.from('.imgContainer2', {
            y: 200,
            opacity: 0,
            duration:0.7,
            ease:'power3.out',
            scrollTrigger:{
                trigger:'.card-container2',
                start:'top 70%',
                
            },
            stagger:0.4
        })
    }, { scope: containerRef })


    return (
        <div ref={containerRef} className='grid  gap-4 mb-12'>
            <div className='card-container1  flex items-center justify-between'>
                <div className='h-full w-full imgContainer1'>
                    <ProductCard index={0} />
                </div>
                <div className='h-full w-full imgContainer1'>
                    <ProductCard index={1} />
                </div>
            </div>
            <div className='card-container2 flex items-center justify-between'>
                <div className='h-full w-full imgContainer2'>
                    <ProductCard index={2} />
                </div>
                <div className='h-full w-full imgContainer2'>
                    <ProductCard index={3} />
                </div>
            </div>
        </div>
    );
};

export default ProductSection;