'use client'

import ShopProducts from '@/components/mainPageComponents/ShopProducts';
import TextAnimation from '@/components/normalComponents/textAnimation';
import { createSplitTextReveal } from '@/lib/createSplitTextReveal';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Page = () => {
    const textRef = useRef<HTMLParagraphElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        let cleanup: (() => void) | undefined;
        let isCancelled = false;

        document.fonts.ready.then(() => {
            if (isCancelled || !textRef.current) {
                return;
            }

            cleanup = createSplitTextReveal({
                element: textRef.current,
                trigger: containerRef.current ?? textRef.current,
                splitType: 'lines, words',
                target: 'words',
                splitOptions: {
                    autoSplit: true,
                },
                fromVars: {
                    y: '110%',
                },
                toVars: {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'expo.out',
                    delay: 0.6,
                },
            });
        });

        return () => {
            isCancelled = true;
            cleanup?.();
        };
    })

    return (
        <div className='bg-foreground text-background pt-[15vh] sm:pt-[20vh] sm:px-4 px-1'>
            <div className='min-h-[60vh] sm:min-h-[50vh] flex-col flex items-start justify-center w-full sm:gap-y-12 gap-y-3'>
                <div className='relative'>
                    <div className='md:text-nowrap flex items-end justify-start text-[12vw] md:text-[10vw] xl:text-[calc((100vw-848px)*0.1620)] leading-[0.96em] sm:leading-[0.9em] uppercase font-medium font-futura tracking-[-0.02em] md:gap-x-8 gap-x-3'>
                        <TextAnimation style='' text='good things' /> <FaChevronDown />
                    </div>
                </div>
                <div ref={containerRef} className='flex items-end justify-start w-full'>
                    <p ref={textRef} style={{ visibility: 'hidden' }} className='max-w-full lg:max-w-[60%] md:max-w-[70%] w-full text-lg font-helvic'>
                        We create high quality, sustainable, luxurious products - toiletries, apparel, blankets, candles. Basically, things that feel like home. The best part? With every single purchase, you have the potential to change the course of someone&apos;s life.
                    </p>
                </div>
            </div>

            <div>
                <ShopProducts/>
            </div>
        </div>
    );
};

export default Page;
