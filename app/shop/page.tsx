/* eslint-disable react-hooks/refs */
'use client'
import ShopProducts from '@/components/mainPageComponents/ShopProducts';
import TextAnimation from '@/components/normalComponents/textAnimation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';


gsap.registerPlugin(SplitText)

const Page = () => {

    const textRef = useRef(null)
    const containerRef = useRef(null)


    useGSAP(() => {
        document.fonts.ready.then(() => {
            const split = new SplitText(textRef.current, {
                type: 'lines, words',
                mask: 'lines',
                autoSplit: true
            });

            gsap.from(split.words, {
                y: '110%',

                stagger: 0.02,             // Faster stagger usually feels more "premium"
                ease: 'expo.out',          // Expo is the king of smooth transitions
                delay: 0.6,
            });

            return () => {
                split.revert()
            }
        })
    })


    return (
        <div className='bg-foreground text-background pt-[15vh] sm:pt-[20vh] sm:px-4 px-1'>
            <div className='min-h-[60vh] sm:min-h-[50vh] flex-col flex items-start justify-center w-full sm:gap-y-12 gap-y-3'>
                <div className='relative'>
                    <div  className='md:text-nowrap  flex items-end justify-start text-[12vw] md:text-[10vw] xl:text-[calc((100vw-848px)*0.1620)] leading-[0.96em] sm:leading-[0.9em] uppercase font-medium  font-futura tracking-[-0.02em]  md:gap-x-8 gap-x-3'>
                        <TextAnimation style='' text='good things' /> <FaChevronDown />
                    </div>
                    
                </div>
                <div ref={containerRef} className='flex items-end justify-start w-full'>
                    <p ref={textRef} className='max-w-full lg:max-w-[60%] md:max-w-[70%] w-full text-lg font-helvic'>We create high quality, sustainable, luxurious products - toiletries, apparel, blankets, candles. Basically, things that feel like home. The best part? With every single purchase, you have the potential to change the course of someone’s life.</p>
                </div>
            </div>

            {/* shoppingg itemss */}
            <div>
                <ShopProducts/>
            </div>
        </div>
    );
};

export default Page;