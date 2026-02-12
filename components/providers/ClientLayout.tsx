/* eslint-disable react-hooks/static-components */
/* eslint-disable react-hooks/refs */
/* eslint-disable react-hooks/set-state-in-effect */
'use client';
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import IntroAnimation from '../IntroAnimation.tsx/IntroAnimation';
import { Flip } from 'gsap/all';
import gsap from 'gsap';
import { IntroContext } from './IntroContext';

gsap.registerPlugin(Flip);

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const mainAppRef = useRef<HTMLDivElement>(null);
    
    
    const [intro, setIntro] = useState(true); 
    const [introFinished, setIntroFinished] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    
    useLayoutEffect(() => {
        const played = sessionStorage.getItem("introPlayed");

        if (played) {
            setIntro(false);
            setIntroFinished(true);
            if(mainAppRef.current) {
                gsap.set(mainAppRef.current, { opacity: 1 });
            }
        } else {
            if(mainAppRef.current) {
                gsap.set(mainAppRef.current, { opacity: 0 });
            }
        }
        setIsLoaded(true);
    }, []);

    const handleIntroComplete = () => {
        
        const state = Flip.getState('[data-flip-id="hero-img"]');
        setIntro(false);
        setIntroFinished(true); 

        // 3. Make main app visible so the flip target exists visually
        gsap.set(mainAppRef.current, { opacity: 1 });

        // 4. Run Flip after a brief tick to allow React to render the new DOM
        requestAnimationFrame(() => {
            if (!state) return;

            Flip.from(state, {
                targets: '[data-flip-id="hero-img"]', 
                duration: 1.5,
                ease: 'expo.out',
                nested: true,
                onComplete: () => {
                    sessionStorage.setItem("introPlayed", "true");
                }
            });
        });
    };

    // Prevent hydration mismatch or flashing by waiting for the storage check
    if (!isLoaded) return null; 

    return (
        <IntroContext.Provider value={introFinished}>
            {intro && <IntroAnimation onComplete={handleIntroComplete} />}
            
            {/* We control opacity via style here as a fallback 
                to ensure it is hidden if GSAP hasn't kicked in yet 
            */}
            <div 
                ref={mainAppRef} 
                style={{ opacity: intro ? 0 : 1 }} 
            >
                {children}
            </div>
        </IntroContext.Provider>
    );
};

export default ClientLayout;