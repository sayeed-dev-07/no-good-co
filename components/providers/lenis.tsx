'use client';

import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollSmoother, ScrollTrigger);


export default function ScrollSmootherWrapper({ children }:{children : React.ReactNode}) {
  const pathname = usePathname();

  useGSAP(() => {
    // Initialize Smoother
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      effects: true,
    });
  }, { dependencies: [pathname], revertOnUpdate: true }); 

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}