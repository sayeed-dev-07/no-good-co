'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { animeData } from '@/public/data/animeData';
import gsap from 'gsap';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { RiGhostFill } from 'react-icons/ri';
import { FaRegHandPointLeft, FaRegHandPointRight } from 'react-icons/fa';

const EDGE_RESISTANCE = 0.35;
const DRAG_THRESHOLD_RATIO = 0.18;

const formatViews = (value: number) => `${Math.round(value).toLocaleString()} views`;

const AnimeDataSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);

    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const viewRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const activeIndexRef = useRef(0);

    const dragState = useRef({
        isDragging: false,
        startX: 0,
        currentX: 0,
        startTranslate: 0,
        pointerId: null as number | null,
    });

    const maxIndex = animeData.length - 1;
    const canGoPrev = activeIndex > 0;
    const canGoNext = activeIndex < maxIndex;

    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    const getWidth = useCallback(() => {
        return viewportRef.current?.clientWidth ?? sliderWidth;
    }, [sliderWidth]);

    const animateTrack = useCallback((index: number, duration = 0.65) => {
        if (!trackRef.current) return;
        const width = getWidth();
        if (!width) return;

        gsap.to(trackRef.current, {
            x: -(index * width),
            duration,
            ease: 'power3.out',
            overwrite: 'auto',
        });
    }, [getWidth]);

    const goToIndex = useCallback((index: number, duration = 0.65) => {
        const boundedIndex = Math.max(0, Math.min(index, maxIndex));

        setActiveIndex((previousIndex) => {
            animateTrack(boundedIndex, boundedIndex === previousIndex ? 0.45 : duration);
            return boundedIndex;
        });
    }, [animateTrack, maxIndex]);

    useEffect(() => {
        if (!viewportRef.current) return;

        const observer = new ResizeObserver((entries) => {
            const width = entries[0]?.contentRect.width ?? viewportRef.current?.clientWidth ?? 0;
            setSliderWidth(width);
        });

        observer.observe(viewportRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!trackRef.current || !sliderWidth) return;

        gsap.set(trackRef.current, {
            x: -(activeIndexRef.current * sliderWidth),
        });
    }, [sliderWidth]);

    useEffect(() => {
        const currentViewsElement = viewRefs.current[activeIndex];
        if (!currentViewsElement) return;

        const targetViews = animeData[activeIndex].views;
        const counter = { value: 0 };

        currentViewsElement.textContent = formatViews(0);

        const countTween = gsap.to(counter, {
            value: targetViews,
            duration: 0.9,
            ease: 'power2.out',
            onUpdate: () => {
                currentViewsElement.textContent = formatViews(counter.value);
            },
        });

        const activeSlide = trackRef.current?.children[activeIndex] as HTMLElement | undefined;
        if (activeSlide) {
            const animatedItems = activeSlide.querySelectorAll('.anime-slider-item');
            gsap.fromTo(animatedItems,
                { y: 20, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.45,
                    stagger: 0.08,
                    ease: 'power2.out',
                    overwrite: 'auto',
                }
            );
        }

        return () => {
            countTween.kill();
        };
    }, [activeIndex]);

    const handlePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
        if (!trackRef.current) return;

        const width = getWidth();
        if (!width) return;

        dragState.current.isDragging = true;
        dragState.current.startX = event.clientX;
        dragState.current.currentX = event.clientX;
        dragState.current.startTranslate = -(activeIndexRef.current * width);
        dragState.current.pointerId = event.pointerId;

        event.currentTarget.setPointerCapture(event.pointerId);
        gsap.killTweensOf(trackRef.current);
    }, [getWidth]);

    const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
        const drag = dragState.current;
        if (!drag.isDragging || drag.pointerId !== event.pointerId || !trackRef.current) return;

        drag.currentX = event.clientX;
        const currentIndex = activeIndexRef.current;

        let delta = drag.currentX - drag.startX;
        if ((currentIndex === 0 && delta > 0) || (currentIndex === maxIndex && delta < 0)) {
            delta *= EDGE_RESISTANCE;
        }

        gsap.set(trackRef.current, {
            x: drag.startTranslate + delta,
        });
    }, [maxIndex]);

    const handlePointerUp = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
        const drag = dragState.current;
        if (!drag.isDragging) return;

        const width = getWidth();
        const currentIndex = activeIndexRef.current;
        const threshold = Math.max((width || 0) * DRAG_THRESHOLD_RATIO, 60);
        const delta = drag.currentX - drag.startX;

        let nextIndex = currentIndex;
        if (delta <= -threshold && currentIndex < maxIndex) {
            nextIndex = currentIndex + 1;
        } else if (delta >= threshold && currentIndex > 0) {
            nextIndex = currentIndex - 1;
        }

        drag.isDragging = false;
        drag.pointerId = null;

        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }

        goToIndex(nextIndex, 0.55);
    }, [getWidth, goToIndex, maxIndex]);

    const handlePointerCancel = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
        const drag = dragState.current;
        if (!drag.isDragging) return;

        drag.isDragging = false;
        drag.pointerId = null;

        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }

        goToIndex(activeIndexRef.current, 0.45);
    }, [goToIndex]);

    return (
        <section className="w-full  py-[10%] sm:py-[5%]">
            <div className="mb-6 flex items-center justify-end gap-2 sm:gap-3">
                <button
                    type="button"
                    disabled={!canGoPrev}
                    onClick={() => goToIndex(activeIndex - 1)}
                    className="h-10 w-10 sm:h-11 cursor-pointer sm:w-11 rounded-full border border-background/40 bg-background/10 flex items-center justify-center transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous slide"
                >
                    <FaRegHandPointLeft className="text-2xl" />
                </button>

                <button
                    type="button"
                    disabled={!canGoNext}
                    onClick={() => goToIndex(activeIndex + 1)}
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full cursor-pointer border border-background/40 bg-background/10 flex items-center justify-center transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next slide"
                >
                    <FaRegHandPointRight className='text-2xl' />
                </button>
            </div>

            <div
                ref={viewportRef}
                className="w-full overflow-hidden select-none touch-pan-y cursor-grab active:cursor-grabbing"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                onPointerLeave={handlePointerCancel}
            >
                <div ref={trackRef} className="flex w-full ">
                    {animeData.map((item, index) => (
                        <article key={item.id} className="w-full shrink-0">
                            <div className="w-full flex items-center justify-between gap-4  py-[3%] px-3 text-[5vw] md:text-[4vw]">
                                <span
                                    ref={(element) => {
                                        viewRefs.current[index] = element;
                                    }}
                                    className="anime-slider-item  tracking-tight font-futura uppercase "
                                >
                                    {formatViews(item.views)}
                                </span>

                                <h3 className="anime-slider-item text-right uppercase font-futura tracking-tight ">
                                    {item.name}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnimeDataSlider;
