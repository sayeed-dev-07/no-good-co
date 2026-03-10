'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sayeed-shorif-68080234b/',
        
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/sayeed.shorif.2025',
        
    },
    {
        name: 'GitHub',
        href: 'https://github.com/sayeed-dev-07',
    },
];

const Page = () => {
    const pageRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });

        intro
            .fromTo(
                '.contact-glow',
                { autoAlpha: 0, scale: 0.75 },
                { autoAlpha: 0.6, scale: 1, duration: 1.2, stagger: 0.15 }
            )
            .from(
                '.contact-kicker',
                { y: 32, autoAlpha: 0, duration: 0.8 },
                '-=0.8'
            )
            .from(
                '.contact-line',
                { yPercent: 110, autoAlpha: 0, duration: 1.1, stagger: 0.12 },
                '-=0.45'
            )
            .from(
                '.contact-copy',
                { y: 26, autoAlpha: 0, duration: 0.8 },
                '-=0.72'
            )
            .from(
                '.contact-mail',
                { y: 24, autoAlpha: 0, duration: 0.7 },
                '-=0.68'
            )
            .from(
                '.contact-panel',
                { y: 50, scale: 0.97, autoAlpha: 0, duration: 1 },
                '-=0.75'
            )
            // .from(
            //     '.contact-link',
            //     { x: 40, autoAlpha: 0, duration: 0.65, stagger: 0.1 },
            //     '-=0.65'
            // );
            .fromTo(
                '.contact-link',
                { x: 40, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 0.65, stagger: 0.1 },
                '-=0.65'
            );

        gsap.to('.contact-glow-one', {
            x: 30,
            y: -25,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        gsap.to('.contact-glow-two', {
            x: -25,
            y: 30,
            duration: 5.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        gsap.to('.contact-border', {
            rotation: 360,
            duration: 12,
            ease: 'none',
            repeat: -1,
            transformOrigin: '50% 50%',
        });
    }, { scope: pageRef });

    return (
        <div
            ref={pageRef}
            className='relative min-h-screen w-full overflow-hidden  bg-foreground text-background px-2 sm:px-4 pt-[17vh] sm:pt-[22vh] pb-8 sm:pb-12'
        >
            <div className='contact-glow contact-glow-one pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-background/20 blur-3xl' />
            <div className='contact-glow contact-glow-two pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-background/20 blur-3xl' />
            <div className='pointer-events-none absolute inset-0 opacity-[0.08] bg-foreground' />

            <section className='relative mx-auto grid max-w-7xl items-end gap-8 lg:gap-16 xl:grid-cols-[1.08fr_0.92fr]'>
                <div className='max-w-3xl'>
                    <p className='contact-kicker font-social text-xs sm:text-sm uppercase tracking-[0.25em] opacity-75 mb-5 sm:mb-7'>
                        Contact
                    </p>

                    <div className='space-y-1.5 text-[15vw] sm:text-[12vw] lg:text-[6vw] font-futura uppercase leading-[0.9]'>
                        <div className='overflow-hidden'>
                            <h1 className='contact-line text-[15vw] sm:text-[12vw] lg:text-[6vw]'>Let&apos;s build</h1>
                        </div>
                        <div className='overflow-hidden'>
                            <h1 className='contact-line'>something</h1>
                        </div>
                        <div className='overflow-hidden'>
                            <h1 className='contact-line'>good</h1>
                        </div>
                    </div>

                    <p className='contact-copy mt-6 sm:mt-8 max-w-xl  text-base sm:text-lg lg:text-xl font-social leading-relaxed opacity-85'>
                        Tell me what you are working on and I&apos;ll help shape it into something people remember.
                        Clean execution, bold visuals, and motion that feels alive.
                    </p>

                    <a
                        className='contact-mail mt-7 sm:mt-9 inline-flex items-center gap-2 rounded-full border border-background/35 px-5 py-2.5 sm:px-6 sm:py-3 font-social text-xs sm:text-sm uppercase tracking-[0.2em] transition-colors hover:bg-background hover:text-foreground'
                        href='mailto:hello@dummy.co'
                    >
                        hello@dummy.co
                        <FiArrowUpRight className='text-base' />
                    </a>
                </div>

                <div className='contact-panel relative rounded-[2rem] p-[1px]'>
                    <div className='contact-border uppercase absolute font-helvic inset-0 rounded-[2rem]' />
                    <div className='relative rounded-[calc(2rem-1px)] border border-background/15 bg-foreground/95 p-5 sm:p-7'>
                        <div className='space-y-3 '>
                            <input
                                className='w-full  rounded-xl border border-background/20 bg-transparent px-4 py-3 font-helvic text-sm sm:text-base outline-none transition-colors  focus:border-background/60'
                                type='text'
                                placeholder='Your name'
                            />
                            <input
                                className='w-full rounded-xl border border-background/20 bg-transparent px-4 py-3 font-helvic text-sm sm:text-base outline-none transition-colors  focus:border-background/60'
                                type='email'
                                placeholder='Email'
                            />
                            <textarea
                                className='w-full rounded-xl border border-background/20 bg-transparent px-4 py-3 font-helvic text-sm sm:text-base outline-none transition-colors  focus:border-background/60 h-32 resize-none'
                                placeholder='Project idea'
                            />
                            <button onClick={()=>alert('Thanks For Contacting.')}
                                className='w-full rounded-xl border border-background/30 bg-background text-foreground py-3 font-social text-xs sm:text-sm uppercase tracking-[0.2em] cursor-pointer transition-transform duration-300 hover:scale-[0.98]'
                                type='button'
                            >
                                Send Message
                            </button>
                        </div>

                        <div className='mt-7 border-t border-background/20 pt-6'>
                            <p className='font-social text-[11px] sm:text-xs uppercase tracking-[0.2em] opacity-75'>
                                Follow Along
                            </p>

                            <div className='mt-4 grid gap-3 sm:grid-cols-3'>
                                {socialLinks.map(({ name, href }) => (
                                    <a target='_blank' className='font-social hover:bg-background hover:text-foreground duration-150 transition-all px-3 py-1.5 border rounded-md text-center' key={name} href={href} >
                                        <p>{name}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
