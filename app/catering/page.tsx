'use client';

import CustomCursor from '@/components/cateringComponents/mouse';
import VideoHero from '@/components/cateringComponents/VideoHero';
import React, { useState } from 'react';

const Page = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="px-2 sm:px-4 pt-[25vh] bg-foreground text-background">

            <CustomCursor disabled={isPlaying} />
            <div className="text-[12vw] tracking-tighter font-futura">
                GOOD FOOD.
            </div>

            <div className="relative -mx-2 sm:-mx-4 video-trigger">
                <VideoHero isPlaying={isPlaying} onPlay={() => setIsPlaying(true)} />
            </div>

        </div>

    );
};

export default Page;
