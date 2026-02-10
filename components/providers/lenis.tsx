'use client';

import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollSmoother, ScrollTrigger);


export default function ScrollSmootherWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  

  useGSAP(() => {
    // Initialize Smoother
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.15,
      effects: true,
      smoothTouch: false,
      normalizeScroll: {
        debounce: true,
        momentum: 1.15,
      }
    });
    return () => smoother.kill();
  }, { dependencies: [pathname], revertOnUpdate: true });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}