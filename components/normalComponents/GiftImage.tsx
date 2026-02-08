/* eslint-disable react-hooks/refs */
'use clinet'
import { giftData } from '@/public/data/giftData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';
import { FaAngleRight } from 'react-icons/fa';


const GiftImage = ({ index }: { index: number }) => {
    const data = giftData[index]
    const openRef = useRef(false)
    const animCardRef = useRef<HTMLDivElement | null>(null);
    const {contextSafe} = useGSAP()
    const handleHover = contextSafe(()=>{
        gsap.to(animCardRef.current, {
            y:0,
            ease: 'power2.out',
            duration: 0.3,
            force3D: true,
            overwrite:'auto'
        })
    })
    const handleHoverOut = contextSafe(()=>{
        gsap.to(animCardRef.current, {
            y:'-105%',
            ease: 'power2.in',
            duration: 0.3,
            force3D: true,
            overwrite:'auto'
        })
    })
    const handleClick = contextSafe(()=>{
        if (openRef.current) {
            gsap.to(animCardRef.current, {
            y:'-105%',
            ease: 'power2.in',
            duration: 0.3,
            force3D: true,
            overwrite:'auto',
            onComplete: ()=>{openRef.current = false}
        })
        }else{
            gsap.to(animCardRef.current, {
            y:0,
            ease: 'power2.out',
            duration: 0.3,
            force3D: true,
            overwrite:'auto',
            onComplete: ()=>{openRef.current = true}
        })
        }
    })
    return (
        <div className='h-[75vh] sm:h-[90vh] overflow-hidden w-full relative'>
            <Image sizes='(max-width: 640px) 90vw, 300px' loading='eager' data-speed="auto" fill src={data.imgSrc} className='gift-card-img object-cover min-h-[120%] scale-105 opacity-0 top-[-10%]' alt={`${data.shopName}-bgImg`} />
            <div className='w-full h-full absolute flex items-center justify-center z-10 inset-0'>
                <div onClick={handleClick}  onMouseLeave={handleHoverOut} className='w-full max-w-80.5 relative'>
                    <div onMouseEnter={handleHover} className='absolute cursor-pointer z-20 inset-0 py-[8%] bg-[#dcc0b4] w-full rounded-4xl uppercase text-[13px] flex items-center justify-between px-[10%]'>
                        <div className="dot h-2 w-2 bg-black rounded-full"></div>
                        <p>shop</p>
                        <p className='font-semibold'>{data.shopName}</p>
                        <FaAngleRight className='text-sm' />
                    </div>
                    <div className='absolute  inset-0 rounded-4xl z-15  h-62.5 text-center overflow-hidden text-black w-full'>
                        <div ref={animCardRef} className='h-full cursor-pointer w-full bg-[#f3e8e4] -translate-y-full will-change-transform'>
                        <div className='flex h-full py-2 items-end  justify-between w-full gap-x-1 text-[12px] uppercase'>
                            <div className='w-[50%]'>
                                <div className='relative  h-30'>
                                    <Image loading='lazy' fill sizes="(max-width: 768px) 100vw, 50vw" alt={`${data.shopName}-proImg1`} className='object-contain' src={data.pro1Img} />
                                </div>
                                <p>{data.pro1Text}</p>
                            </div>
                            <div className='w-[50%]'>
                                <div className='relative  h-30'>
                                    <Image fill loading='lazy' sizes="(max-width: 768px) 100vw, 50vw" alt={`${data.shopName}-proImg2`} className='object-contain' src={data.pro2Img} />
                                </div>
                                <p>{data.pro2Text}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftImage;