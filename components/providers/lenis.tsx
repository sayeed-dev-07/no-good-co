'use client';

import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

type DeviceMode = 'pending' | 'scroll' | 'touch';

export default function ScrollSmootherWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('pending');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia('(hover: none), (pointer: coarse)');
    const updateDeviceMode = () => {
      const isTouchDevice = media.matches || navigator.maxTouchPoints > 0;
      setDeviceMode(isTouchDevice ? 'touch' : 'scroll');
    };

    updateDeviceMode();

    if (media.addEventListener) {
      media.addEventListener('change', updateDeviceMode);
      return () => media.removeEventListener('change', updateDeviceMode);
    }

    media.addListener(updateDeviceMode);
    return () => media.removeListener(updateDeviceMode);
  }, []);

  useGSAP(() => {
    if (deviceMode !== 'scroll') {
      return;
    }

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

    requestAnimationFrame(() => {
      smoother.scrollTo(0, false);
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    });

    return () => smoother.kill();
  }, { dependencies: [pathname, deviceMode], revertOnUpdate: true });

  useEffect(() => {
    if (deviceMode !== 'touch') {
      return;
    }

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    });
  }, [pathname, deviceMode]);

  if (deviceMode !== 'scroll') {
    return <>{children}</>;
  }

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
