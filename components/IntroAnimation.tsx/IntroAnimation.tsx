'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
    const imgDivRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const tl = gsap.timeline({ onComplete: onComplete })
        const images = imgDivRef.current?.querySelectorAll('.imageClass')
        images?.forEach((img, index) => {
            gsap.set(img, {
                x: index % 2 === 0 ? 180 : -180,
                y: gsap.utils.random([200, -200]),
                opacity: 0
            })
        })
        const rotation = (index: number) => {
            if (index + 1 === images?.length) {
                return 0
            } else if (index % 2 === 0) {
                return 10
            } else {
                return -10
            }
        }
        tl.to({}, { duration: 0.3 })
        images?.forEach((img, index) => {
            tl.to(img, {
                x: 0,
                opacity: 1,
                y: 0,
                stagger: 0.3,
                rotate: rotation(index),
                ease: 'none',

            })
        })
        tl.to({}, { duration: 0.3 })

    }, {})


    return (
        <div className='fixed top-0 left-0 h-screen w-full bg-foreground text-background z-9999 flex items-center justify-center'>
            <div className='relative h-[80%] w-[70%]'>
                <div className='absolute max-w-[500px] aspect-square  w-full top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 '>
                    <div data-flip-id="hero-img" ref={imgDivRef} className='w-full h-full relative'>
                        <Image fill sizes='50vw' className='object-cover  imageClass' src={'https://i.pinimg.com/1200x/10/af/6f/10af6f7ab37f8d976ac6b4294713e05a.jpg'} alt='Img' />
                        <Image fill sizes='50vw' className='object-cover  imageClass' src={'https://i.pinimg.com/736x/8a/2b/93/8a2b93a8eb01c1f834c22a35faffbc84.jpg'} alt='Img' />
                        <Image fill sizes='50vw' className='object-cover  imageClass' src={'https://i.pinimg.com/736x/69/b9/d8/69b9d8a512a399efd778029e9a739943.jpg'} alt='Img' />
                        <Image fill sizes='50vw' className='object-cover  imageClass' src={'https://i.pinimg.com/1200x/81/2c/db/812cdb9bf753b96484bb12ab4b8c2114.jpg'} alt='Img' />
                        <Image fill sizes='50vw' className='object-cover  imageClass' src={'https://i.pinimg.com/736x/62/16/f1/6216f15fc1aa539aca28f2dd78a1c3ef.jpg'} alt='Img' />
                        <Image fill sizes='50vw' className='object-cover  imageClass' src={'https://i.pinimg.com/736x/72/0d/be/720dbe2f575e52cd6f54497b3bb201e7.jpg'} alt='Img' />
                        <div className='relative w-full aspect-video overflow-hidden'>
                            <Image fill sizes='50vw' className='object-top object-cover min-h-[130%] top-[-5%] w-full  imageClass' src={'/images/heroImg.jpg'} alt='Img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroAnimation;