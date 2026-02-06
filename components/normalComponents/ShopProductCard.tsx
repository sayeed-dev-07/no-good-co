'use client'
import Image from 'next/image';
import React, { useRef } from 'react';
import { shopProducts } from '@/public/data/ShopProducts';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const ShopProductCard = ({ id }: { id: number }) => {
  const data = shopProducts[id - 1];
  const containerRef = useRef(null)
  const imgRef = useRef(null)
  useGSAP(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'clamp(top 90%)',
      }
    }).from(containerRef.current, {
      y:'40%',
      autoAlpha:0,
      duration:0.8,
      delay:0.1,
      ease:'power2.in'
    })
  }, { scope: containerRef })
  
  return (
    <div 
      ref={containerRef} 
      // Changed: Removed 'justify-between', kept 'flex-col' and 'h-full'
      className="w-full h-full flex flex-col items-center text-sm font-helvic uppercase text-center pb-4"
    >
      {/* Image Wrapper: 
         - flex-1: Takes up all available vertical space
         - flex/items-center: Centers the image within that available space
      */}
      <div className="flex-1 w-full flex items-center justify-center p-1">
        <Image 
          ref={imgRef}
          src={data.image}
          alt={data.name}
          width={400}
          height={400}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          // Removed fixed height percentages to allow flex to handle it
          className="object-contain w-[90%] sm:w-[80%]"
        />
      </div>

      {/* Text Wrapper:
         - mt-auto: Pushes this div to the very bottom
      */}
      <div className='mt-auto flex flex-col gap-1 px-2'>
        <p>{data.name}</p>
        <span className='text-xs'>{data.price}</span>
      </div>
    </div>
  );
};

export default ShopProductCard;