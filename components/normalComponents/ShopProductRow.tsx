'use client'
import React, { useRef } from 'react'; // 
import ShopProductCard from './ShopProductCard';
import LineAnim from './LineAnimation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

type prop = {
  textTrue?: boolean,
  idList: number[],
  text?: string
}

const ShopProductRow = ({ textTrue = false, text, idList }: prop) => {

  const containerRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    gsap.from('.imgCard', {
      scrollTrigger: {
        trigger: containerRef.current, 
        start: 'top 85%', 
      },
      y: 100,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power4.out',
      stagger: 0.3,
      delay:0.2
    })
  }, { scope: containerRef }); 

  if (textTrue) {
    return (
      <div
        ref={containerRef} 
        className="grid cardContainer grid-cols-2 lg:grid-cols-3 justify-between gap-6"
      >
        <div className="order-2 lg:order-1 h-full">
          <ShopProductCard id={idList[0]} />
        </div>

        <div className="col-span-2 lg:col-span-1 order-1 lg:order-2 flex items-center font-futura text-xl sm:text-3xl uppercase justify-center text-center h-full">
          <div className='w-[90%]'>
            <LineAnim text={text || ''} per='95%' />
          </div>
        </div>

        <div className="order-3 h-full">
          <ShopProductCard id={idList[1]} />
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef} 
      className="grid cardContainer grid-cols-2 lg:grid-cols-3 justify-between gap-6"
    >
      <div className="order-1 h-full">
        <ShopProductCard id={idList[0]} />
      </div>

      <div className="order-2 flex items-center font-futura text-3xl uppercase justify-center text-center h-full">
        <ShopProductCard id={idList[1]} />
      </div>

      <div className="order-3 h-full">
        <ShopProductCard id={idList[2]} />
      </div>
    </div>
  );
};

export default ShopProductRow;