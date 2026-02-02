/* eslint-disable react-hooks/refs */
'use client';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { lifeQuotes } from '@/public/data/lifeQuotes';
import { horizontalLoop } from '../normalComponents/gsapUtils';
import QuotesName from '../normalComponents/quotesName';

const QuotesSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { contextSafe } = useGSAP(() => {
    const items = gsap.utils.toArray('.quote-item');
    
    // The "center: true" config is what makes the clicked item land in the middle
    loopRef.current = horizontalLoop(items, {
      center: true, 
      paused: true,
      draggable: true,
    });

    // Start with the first item centered immediately
    loopRef.current.toIndex(0, { duration: 0 });
  }, { scope: containerRef });

  const handleItemClick = contextSafe((index: number) => {
    setActiveIndex(index);
    
    // This moves the timeline so the clicked item hits the center
    loopRef.current.toIndex(index, { 
      duration: 0.8, 
      ease: "power2.inOut" 
    });
  });

  return (
    <div className="w-full min-h-[40vh] flex flex-col justify-center overflow-hidden text-background">
      {/* The Track */}
      <div ref={containerRef} className="flex items-center">
        {lifeQuotes.map((quote, index) => (
          <div 
            key={index} 
            className="quote-item shrink-0" 
            onClick={() => handleItemClick(index)}
          >
            <QuotesName 
              data={quote} 
              isActive={activeIndex === index} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesSlider;