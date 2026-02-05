'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

const FooterSvg = () => {
    const svgContainerRef = useRef<HTMLDivElement | null>(null);
    const svgRef = useRef<SVGSVGElement | null>(null);
    const paths = useRef<(SVGPathElement | null)[]>([]);

    useGSAP(() => {
        // 1. Initial setup: stroke-only, hidden, prepped for draw
        gsap.set(paths.current, {
            opacity: 0,
            scale: 0.8,
            drawSVG: "0%",
            transformOrigin: "50% 50%",
            strokeWidth: 2.5,
            fillOpacity: 0,
            force3D: true
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: svgRef.current,
                start: 'top 85%',
            }
        });

        // 2. The Animation Sequence
        tl.to(svgRef.current, { autoAlpha: 1, duration: 0.2 })
            .to(paths.current, {
                opacity: 1,
                scale: 1,
                drawSVG: "100%",
                duration: 1.4,
                ease: "power3.out",
                stagger: 0.18
            }, "-=0.05")
            .to(paths.current, {
                fillOpacity: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.12
            }, "-=0.6")
            .to(paths.current, {
                scale: 1.06,
                duration: 0.4,
                ease: "back.out(2)",
                stagger: 0.08
            }, "-=0.35")
            .to(paths.current, {
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.08
            }, "-=0.15");

        // 3. Ambient motion after the reveal
        gsap.to(paths.current, {
            y: -18,
            rotation: 1.5,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.12,
        });

    }, { scope: svgContainerRef });

    return (
        <div ref={svgContainerRef} className="w-fit">
            <svg
                ref={svgRef}
                /* Use style instead of Tailwind class for guaranteed override */
                style={{ visibility: 'hidden' }}
                className='w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px] overflow-visible'
                viewBox="0 0 216 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="footer-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <path
                    ref={(el) => { paths.current[0] = el; }}
                    d="M51.7757 0C38.0521 0 24.8906 5.43423 15.1866 15.1072C5.48261 24.7802 0.0309982 37.8997 0.0309982 51.5794C0.0309982 65.2591 5.48261 78.3785 15.1866 88.0515C24.8906 97.7245 38.0521 103.159 51.7757 103.159C65.4992 103.159 78.6607 97.7245 88.3647 88.0515C98.0687 78.3785 103.52 65.2591 103.52 51.5794C103.52 37.8997 98.0687 24.7802 88.3647 15.1072C78.6607 5.43423 65.4992 0 51.7757 0Z"
                    stroke="currentColor" /* Changed to currentColor for better visibility testing */
                    strokeWidth="1.5"
                    fill="currentColor"
                    filter="url(#footer-glow)"
                />

                <path ref={(el) => { paths.current[1] = el; }}
                    d="M163.911 0C150.187 0 137.026 5.43423 127.322 15.1072C117.618 24.7802 112.166 37.8997 112.166 51.5794C112.166 65.2591 117.618 78.3785 127.322 88.0515C137.026 97.7245 150.187 103.159 163.911 103.159C177.634 103.159 190.796 97.7245 200.5 88.0515C210.204 78.3785 215.655 65.2591 215.655 51.5794C215.655 37.8997 210.204 24.7802 200.5 15.1072C190.796 5.43423 177.634 0 163.911 0Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="currentColor"
                    filter="url(#footer-glow)"
                />

                <path
                    ref={(el) => { paths.current[2] = el; }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 129.002L17.3035 111.753L51.795 146.135L86.2649 111.775L103.568 129.023L69.0982 163.383L103.562 197.737L86.2586 214.985L51.7947 180.631L17.3099 215.006L0.00634766 197.758L34.4914 163.383L0 129.002Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="currentColor"
                    filter="url(#footer-glow)"
                />

                <path
                    ref={(el) => { paths.current[3] = el; }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M112.128 128.988L129.431 111.739L163.923 146.121L198.393 111.761L215.696 129.009L181.226 163.369L215.69 197.722L198.386 214.971L163.923 180.617L129.438 214.992L112.134 197.744L146.619 163.369L112.128 128.988Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="currentColor"
                    filter="url(#footer-glow)"
                />
            </svg>
        </div>
    );
};

export default FooterSvg;
