'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import HamburgerMenu from '../normalComponents/Hamburger';
import NavItems from '../normalComponents/NavItems';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Navbar = () => {
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);

    useGSAP(() => {
        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.paused(openMenu);
        }
        if (openMenu) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [openMenu]);

    useGSAP(() => {
        gsap.set(imgRef.current, { y: 30, autoAlpha: 0, display: 'none' });
        gsap.set(textRef.current, { y: 0, autoAlpha: 1, display: 'block' });

        const transitionSettings = { duration: 0.3, ease: "power2.inOut", overwrite: true };

        ScrollTrigger.create({
            trigger: document.body,
            start: "350px top",
            onEnter: () => {
                gsap.to(textRef.current, { ...transitionSettings, y: -30, autoAlpha: 0, display: 'none' });
                gsap.to(imgRef.current, { ...transitionSettings, y: 0, autoAlpha: 1, display: 'block' });
            },
            onLeaveBack: () => {
                gsap.to(textRef.current, { ...transitionSettings, y: 0, autoAlpha: 1, display: 'block' });
                gsap.to(imgRef.current, { ...transitionSettings, y: 30, autoAlpha: 0, display: 'none' });
            },
        });

        ScrollTrigger.create({
            trigger: document.body,
            start: "bottom 110%",
            onEnter: () => {
                gsap.to(imgRef.current, { ...transitionSettings, y: 30, autoAlpha: 0, display: 'none' });
                gsap.to(textRef.current, { ...transitionSettings, y: 0, autoAlpha: 1, display: 'block' });
            },
            onLeaveBack: () => {
                gsap.to(imgRef.current, { ...transitionSettings, y: 0, autoAlpha: 1, display: 'block' });
                gsap.to(textRef.current, { ...transitionSettings, y: -30, autoAlpha: 0, display: 'none' });
            }
        });

    }, { scope: containerRef });

    return (
        /* 1. ADD pointer-events-none TO THE ROOT */
        <div 
            ref={containerRef} 
            className={`${openMenu ? 'text-foreground' : 'text-background'} font-social px-1 sm:px-4 py-2.5 sm:py-5 fixed top-0 left-0 w-full flex items-center justify-between z-50 h-fit pointer-events-none`}
        >
            {/* 2. NavItems probably needs auto if it contains the full-screen menu */}
            <div className={openMenu ? 'pointer-events-auto' : 'pointer-events-none'}>
                <NavItems openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>

            {/* 3. The Logo Wrapper needs pointer-events-none so the middle space is clear */}
            <div className="relative h-20 w-full flex items-center pointer-events-none">
                
                {/* 4. The actual Logo and Text get pointer-events-auto to remain clickable */}
                <div 
                    style={{ display: 'none' }} 
                    onClick={() => setOpenMenu(false)} 
                    ref={imgRef} 
                    className="absolute cursor-pointer opacity-0 pointer-events-auto"
                >
                    <Link href={'/'}>
                        <svg className={`w-[15vw] sm:w-[10vw] md:w-[9vw] lg:w-[5vw] ${openMenu ? 'fill-white' : 'fill-black'}`} width="106" height="97" viewBox="37 40 106 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="60.5" cy="113.5" r="23.5" fill="currentColor" />
                            <circle cx="119.5" cy="113.5" r="23.5" fill="currentColor" />
                            <path d="M116.191 61.0668L101.467 45.5393L106.594 40.6778L121.318 56.2053L136.698 41.6208L141.606 46.7966L126.226 61.3811L140.95 76.9086L135.824 81.7701L121.099 66.2426L105.719 80.8271L100.811 75.6513L116.191 61.0668Z" fill="currentColor" />
                            <path d="M55.2168 60.1995L40.13 45.0241L45.1404 40.0429L60.2272 55.2183L75.2587 40.2746L80.2876 45.3331L65.2562 60.2768L80.343 75.4521L75.3325 80.4334L60.2457 65.258L45.2143 80.2017L40.1853 75.1432L55.2168 60.1995Z" fill="currentColor" />
                        </svg>
                    </Link>
                </div>

                <div 
                    onClick={() => setOpenMenu(false)} 
                    ref={textRef} 
                    className="absolute cursor-pointer pointer-events-auto"
                >
                    <Link className='uppercase text-2xl sm:text-4xl sm:font-semibold flex flex-col sm:leading-8 leading-6 font-bold font-futura' href={'/'}>
                        <span>no</span>
                        <span>good</span>
                        <span>co.</span>
                    </Link>
                </div>
            </div>

            {/* 5. Hamburger Wrapper needs pointer-events-auto */}
            <div className='z-50 pointer-events-auto'>
                <div className="cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
                    <HamburgerMenu state={openMenu} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;