'use client'
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import ProgramFaq from './ProgramFaq';
import ApproachFaq from './ApproachFaq';
import TheoryFaq from './TheoryFaq';
import TestimonialFaq from './TestimonialFaq';

const ImpactHidden = ({ name, open }: { name: string, open: boolean }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const hiddenRef = useRef<HTMLDivElement | null>(null);
    const [shouldRender, setShouldRender] = useState(open);

    useEffect(() => {
        if (open && !shouldRender) {
            const frameId = requestAnimationFrame(() => setShouldRender(true));
            return () => cancelAnimationFrame(frameId);
        }
    }, [open, shouldRender]);

    useEffect(() => {
        if (!shouldRender) {
            return;
        }

        const container = containerRef.current;
        const hidden = hiddenRef.current;
        if (!container || !hidden) {
            return;
        }

        const openDuration = 1;
        const closeDuration = 0.48;
        gsap.killTweensOf([container, hidden]);

        if (open) {
            requestAnimationFrame(() => {
                const fullHeight = hidden.scrollHeight;
                gsap.set(container, {
                    height: container.offsetHeight,
                    overflow: 'hidden',
                    willChange: 'height'
                });

                gsap.set(hidden, {
                    y: 14,
                    autoAlpha: 0
                });

                gsap.to(container, {
                    height: fullHeight,
                    duration: openDuration,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.set(container, { height: 'auto', clearProps: 'willChange' });
                    }
                });

                gsap.to(hidden, {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
            return;
        }

        gsap.set(container, {
            height: container.offsetHeight,
            overflow: 'hidden',
            willChange: 'height'
        });

        gsap.to(hidden, {
            y: 10,
            autoAlpha: 0,
            duration: 0.2,
            ease: 'power1.in'
        });

        gsap.to(container, {
            height: 0,
            duration: closeDuration,
            ease: 'power2.inOut',
            onComplete: () => {
                setShouldRender(false);
                gsap.set(container, { clearProps: 'willChange' });
            }
        });
    }, [open, shouldRender]);

    return (
        <div ref={containerRef} aria-hidden={!open} className="h-0 overflow-hidden bg-foreground text-background w-full">
            {shouldRender && (
                <div ref={hiddenRef} className='w-full py-6'>
                    {name === 'programs' && <ProgramFaq />}
                    {name === 'approach' && <ApproachFaq />}
                    {name === 'theory' && <TheoryFaq />}
                    {name === 'testimonials' && <TestimonialFaq />}
                </div>
            )}
        </div>
    );
};
 
export default ImpactHidden;
