'use client';

import AnimeDataSlider from '@/components/animeComponents/AnimeDataSlider';
import AnimeDetaileSection from '@/components/animeComponents/AnimeDetaileSection';
import ExtraAnimes from '@/components/animeComponents/ExtraAnimes';
import HeadlineTextAnime from '@/components/animeComponents/headLinePart';
import CustomCursor from '@/components/animeComponents/mouse';
import VideoHero from '@/components/animeComponents/VideoHero';
import Line from '@/components/normalComponents/Line';
import { createSplitTextReveal } from '@/lib/createSplitTextReveal';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';

const Page = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const textRef = useRef<HTMLDivElement | null>(null)
    const cateringContainer = useRef<HTMLDivElement | null>(null)
    const videoRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (!textRef.current) return;

        let cleanup: (() => void) | undefined;
        let isCancelled = false;

        document.fonts.ready.then(() => {
            if (isCancelled || !textRef.current) {
                return;
            }

            cleanup = createSplitTextReveal({
                element: textRef.current,
                splitType: 'lines, words',
                target: 'words',
                splitOptions: {
                    autoSplit: true,
                },
                fromVars: {
                    y: '110%',
                },
                toVars: {
                    y: '0%',
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'expo.out',
                    delay: 0.2,
                },
            });
        });

        return () => {
            isCancelled = true;
            cleanup?.();
        };
    }, { scope: cateringContainer })
    useGSAP(() => {
        if (!videoRef.current) {
            return
        }
        gsap.set(videoRef.current, {
            scale: 1.1,
            autoAlpha: 0,
        })
        gsap.to(videoRef.current, {
            scale: 1,
            autoAlpha: 1,
            duration: 0.5,
            delay: 0.7,
            ease: 'power2.out'
        })
    }, { scope: cateringContainer })

    return (
        <div ref={cateringContainer} className="px-2  sm:px-4 pt-[15vh] sm:pt-[25vh] bg-foreground text-background w-full">

            <div className='overflow-hidden w-full'>
                <CustomCursor disabled={isPlaying} />
                <div ref={textRef} style={{ visibility: 'hidden' }} className="text-[12vw] tracking-tight font-futura flex w-full">
                    GOOD ANIME.
                </div>

                <div ref={videoRef} className="relative  video-trigger">
                    <VideoHero isPlaying={isPlaying} onPlay={() => setIsPlaying(true)} />
                </div>
                <div className='pt-12'>
                    <Line text1='the goal is ' text2='not perfection' />
                </div>

                <HeadlineTextAnime/>
                <AnimeDetaileSection/>
                <AnimeDataSlider/>
                <ExtraAnimes/>
            </div>
        </div>

    );
};

export default Page;
