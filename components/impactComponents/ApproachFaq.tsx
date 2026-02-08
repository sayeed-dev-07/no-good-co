import Image from 'next/image';
import React from 'react';

const ApproachFaq = () => {
    return (
        <div className='py-[4%] w-full'>
            <div className='flex items-center lg:flex-row flex-col justify-center gap-x-4 w-full'>
                <div className='flex-1 flex flex-col gap-y-6'>
                    <div className='relative aspect-video'>
                        <Image fill loading='eager' sizes='(min-width: 1024px) 50vw, 100vw' alt='hiddenImg' src={'https://cdn.sanity.io/images/w8f1ak3c/production/0226b2c17d04df87e240799b89e9c4f4d747574e-8256x5504.jpg'} className='object-cover' />
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <p className='uppercase font-futura text-3xl'>Donations to shelters + refuges</p>
                        <p className='font-helvic text-lg'>Two Good Co donates around 700 high-quality meals a week and hundreds of gifts each year to women experiencing crisis. These gifts of &apos;Good Food&apos; and &apos;Good Things&apos; are vehicles to demonstrate love, value and respect. Inspired by our Purple Bow story, they are imbued with as much care and quality as possible, intended to spark a moment of self-worth and hope.</p>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-y-6 '>
                    <div className='relative aspect-video'>
                        <Image fill loading='eager' sizes='(min-width: 1024px) 50vw, 100vw' alt='hiddenImg' src={'https://cdn.sanity.io/images/w8f1ak3c/production/7f3b27576fe00be5932470b03f3bd540b03896e8-4409x2937.jpg'} className='object-cover' />
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <p className='uppercase font-futura text-3xl'>Donations to shelters + refuges</p>
                        <p className='font-helvic text-lg'>Two Good Co donates around 700 high-quality meals a week and hundreds of gifts each year to women experiencing crisis. These gifts of &apos;Good Food&apos; and &apos;Good Things&apos; are vehicles to demonstrate love, value and respect. Inspired by our Purple Bow story, they are imbued with as much care and quality as possible, intended to spark a moment of self-worth and hope.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApproachFaq;
