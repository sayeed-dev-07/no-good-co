'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import React, {useRef, useState } from 'react';
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

        // stopping the scrollbar when menu is open

        const smoother = ScrollSmoother.get()
        if (smoother) {
            smoother.paused(openMenu);
        }

        // Your existing ScrollTrigger logic
        gsap.set(imgRef.current, { y: 50, autoAlpha: 0, display: 'none' });
        gsap.set(textRef.current, { y: 0, autoAlpha: 1 });

        const topTl = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "350px top",
                toggleActions: "play reverse play reverse",
            }
        });

        topTl.to(textRef.current, { y: -50, autoAlpha: 0, duration: 0.2, ease: "power2.inOut" })
            .to(imgRef.current, { display: 'block', y: 0, autoAlpha: 1, duration: 0.2, ease: "power2.out" }, "<");

        ScrollTrigger.create({
            trigger: document.body,
            start: "bottom 130%",
            onEnter: () => {
                gsap.to(imgRef.current, { y: 50, autoAlpha: 0, duration: 0.4 });
                gsap.to(textRef.current, { y: 0, autoAlpha: 1, duration: 0.2 });
            },
            onLeaveBack: () => {
                gsap.to(imgRef.current, { y: 0, autoAlpha: 1, duration: 0.2 });
                gsap.to(textRef.current, { y: -50, autoAlpha: 0, duration: 0.2 });
            }
        });

    }, { scope: containerRef, dependencies:[openMenu] });

    return (
        <div ref={containerRef} className={`${openMenu ? 'text-foreground' : 'text-background'} font-social px-1 sm:px-4  py-2.5 sm:py-5 fixed top-0 left-0 w-full flex items-center justify-between z-50 h-fit`}>

            {/* nav items overlay */}
            <NavItems openMenu={openMenu} setOpenMenu={setOpenMenu} />

            <div className="relative h-20 w-full flex">
                <div onClick={()=>setOpenMenu(false)} ref={imgRef} className="absolute opacity-0 cursor-pointer">
                    <Link className='' href={'/'}>
                        <svg className={`w-[15vw] sm:w-[10vw] md:w-[9vw] lg:w-[5vw] ${openMenu ? 'fill-white' : 'fill-black'}`} width="106" height="97" viewBox="37 40 106 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="60.5" cy="113.5" r="23.5" fill="cureentColor" />
                            <circle cx="119.5" cy="113.5" r="23.5" fill="cureentColor" />
                            <path d="M116.191 61.0668L101.467 45.5393L106.594 40.6778L121.318 56.2053L136.698 41.6208L141.606 46.7966L126.226 61.3811L140.95 76.9086L135.824 81.7701L121.099 66.2426L105.719 80.8271L100.811 75.6513L116.191 61.0668Z" fill="cureentColor" />
                            <path d="M55.2168 60.1995L40.13 45.0241L45.1404 40.0429L60.2272 55.2183L75.2587 40.2746L80.2876 45.3331L65.2562 60.2768L80.343 75.4521L75.3325 80.4334L60.2457 65.258L45.2143 80.2017L40.1853 75.1432L55.2168 60.1995Z" fill="cureentColor" />
                        </svg>
                    </Link>
                </div>

                <div onClick={()=>setOpenMenu(false)} ref={textRef} className="absolute inset-0 w-fit cursor-pointer">
                    <Link className='uppercase text-2xl sm:text-4xl sm:font-semibold flex flex-col sm:leading-8 leading-6 font-bold font-futura' href={'/'}>
                        <span>no</span>
                        <span>good</span>
                        <span>co.</span>
                    </Link>
                </div>
            </div>

            <div className='z-50'>
                <div className="cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
                    <HamburgerMenu state={openMenu} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;