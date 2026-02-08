
import Image from 'next/image';
import React from 'react';

const TheoryFaq = () => {
    return (
        <div className='flex items-start justify-center lg:flex-row flex-col gap-x-4'>
            <div className='flex-1 flex flex-col gap-y-8'>
                <p className='uppercase font-futura text-2xl sm:text-3xl max-w-150 w-full text-start'>To understand what we do,
                    why we do it and how it works,
                    we must first understand the
                    Theory of Change.</p>
                <div className='flex flex-col gap-y-4 text-base font-helvic md:max-w-[80%] max-w-full sm:max-w-[90%] w-full'>
                    <p>After many years of living in crisis, abuse and complex trauma, restoring self-worth is foundational for independence.</p>
                    <p>We believe that through experiences that promote love and respect, we can spark and nurture a sense of self-worth for those on the path of healing.</p>
                </div>
            </div>
            <div className='relative aspect-video flex-1 w-full'>
                <Image fill loading='eager' sizes='(min-width: 1024px) 50vw, 100vw' alt='hiddenImg' src={'https://cdn.sanity.io/images/w8f1ak3c/production/270eb7f9406972b67627d5e5ee62325610fed14d-1920x1080.png'} className='object-cover' />
            </div>
        </div>
    );
};

export default TheoryFaq;
