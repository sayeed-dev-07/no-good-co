'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import HamburgerMenu from '../normalComponents/Hamburger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(true)

    useGSAP(() => {
        gsap.set(imgRef.current, { y: 50, autoAlpha: 0, display: 'none' });
        gsap.set(textRef.current, { y: 0, autoAlpha: 1 });

        const topTl = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "200px top",
                toggleActions: "play reverse play reverse",
            }
        });

        topTl.to(textRef.current, { y: -50, autoAlpha: 0, duration: 0.2, ease: "power2.inOut" })
            .to(imgRef.current, { display: 'block', y: 0, autoAlpha: 1, duration: 0.2, ease: "power2.out" }, "<");


        ScrollTrigger.create({
            trigger: document.body,
            start: "bottom 110%",
            onEnter: () => {

                gsap.to(imgRef.current, { y: 50, autoAlpha: 0, duration: 0.4 });
                gsap.to(textRef.current, { y: 0, autoAlpha: 1, duration: 0.2 });
            },
            onLeaveBack: () => {
                gsap.to(imgRef.current, { y: 0, autoAlpha: 1, duration: 0.2 });
                gsap.to(textRef.current, { y: -50, autoAlpha: 0, duration: 0.2 });
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`${openMenu ? 'text-foreground' : 'text-background'} font-social px-1 sm:px-4 md:px-8 lg:px-12 py-2.5 sm:py-5 fixed top-0 left-0 w-full flex sm:items-center items-start justify-between z-50 h-fit`}>

            {/* nav items */}
            <div className={`fixed inset-0 bg-background transition-transform duration-500 ${openMenu ? 'translate-y-0' : '-translate-y-full'}`}>
                
            </div>


            <div className="relative h-20 w-full flex ">
                {/* Logo Wrapper */}
                <div ref={imgRef} className="absolute opacity-0">
                    <Link className='' href={'/'}>
                        <Image
                            alt='mainLogo'
                            loading='eager'
                            width={200} height={200}
                            className='object-cover   w-[15vw] sm:w-[10vw] md:w-[9vw] lg:w-[5vw]'
                            src={'/logo.svg'}
                        />
                    </Link>
                </div>

                {/* Text Wrapper */}
                <div ref={textRef} className="absolute inset-0">
                    <Link className='uppercase text-2xl sm:text-4xl sm:font-semibold flex flex-col sm:leading-8 leading-6 font-bold font-futura' href={'/'}>
                        <span>no</span>
                        <span>good</span>
                        <span>co.</span>
                    </Link>
                </div>
            </div>
            <div>
                {/* hamburger menu */}
                <div>
                    <HamburgerMenu state={openMenu} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;