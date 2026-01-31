'use client'

import React, { useRef } from 'react';
import GiftImage from '../normalComponents/GiftImage';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LineButton from '../normalComponents/LineButton';
import TextAnimation from '../normalComponents/textAnimation';
import LineAnim from '../normalComponents/LineAnimation';

gsap.registerPlugin(ScrollTrigger);

const ShopSlider = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {


        gsap.to('.gift-card-img', {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 60%'
            }
        })

    }, { scope: containerRef })

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
                <GiftImage index={0} />
                <GiftImage index={1} />
                <GiftImage index={2} />
            </div>
            <div className='flex items-center justify-between md:flex-row flex-col md:mt-6 mt-[5%] gap-x-12 gap-y-12 '>
                <div className='xl:flex-2 flex-1'>
                    <LineAnim style='text-4xl sm:text-5xl md:text-6xl font-futura w-full uppercase   xl:max-w-[60%] max-w-full' text='We believe in people, until they believe in themselves again.'/>
                </div>
                <div className='flex-1 flex flex-col items-center gap-y-4 justify-start  md:gap-y-12'>
                    <LineAnim text='Everything we do is designed to rebuild self worth and independence, in order to break free from the cycle of disadvantage.'/>
                    <LineAnim text='With every purchase you make with us, you&apos;re helping to change the course of someone&apos;s life; you&apos;re walking alongside vulnerable women as they find their way home again.'/>
                        <div className='w-full '>
                            <LineButton auto={false}>
                            <p className='uppercase  font-social text-xs'>Shop to Support</p>
                        </LineButton>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSlider;