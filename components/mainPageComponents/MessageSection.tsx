'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import QuotesSlider from './QuotesSlider';


gsap.registerPlugin(ScrollTrigger)

const MessageSection = () => {
    const messageContainer = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        gsap.to('.line2',{
            x:0,
            duration:0.5,
            ease:'power1.out',
            scrollTrigger:{
                trigger:'.line2',
                start: 'top 80%'
            }
        })
    }, { scope: messageContainer })

    return (
        <div ref={messageContainer} className='min-h-screen w-full overflow-hidden'>
            <div className='uppercase text-xs flex items-center justify-between'>
                <p>Words of Goodness</p>
                <p>Messages of Love & Support</p>
            </div>
            <div className='w-full line2 -translate-x-full h-px bg-background'></div>

            <div className='my-6 min-h-screen'>
                <QuotesSlider/>
            </div>
        </div>
    );
};

export default MessageSection;