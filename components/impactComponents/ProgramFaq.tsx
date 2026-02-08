import Image from 'next/image';
import React from 'react';

const ProgramFaq = () => {
    return (
        <div className='py-[4%] w-full'>
            <div className='flex items-start lg:flex-row flex-col justify-center gap-y-12 gap-x-4 w-full'>
                <div className='flex-1 flex flex-col gap-y-6'>
                    <div className='relative aspect-video'>
                        <Image fill loading='lazy' sizes='(min-width: 1024px) 50vw, 100vw' alt='hiddenImg' src={'https://cdn.sanity.io/images/w8f1ak3c/production/2ffd1f863fef6d4102c50c99eb5c02f046ac41fa-3881x3881.png'} className='object-cover' />
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <p className='uppercase font-futura text-3xl'>Donations to shelters + refuges</p>
                        <p className='font-helvic text-lg'>Two Good Co donates around 700 high-quality meals a week and hundreds of gifts each year to women experiencing crisis. These gifts of &apos;Good Food&apos; and &apos;Good Things&apos; are vehicles to demonstrate love, value and respect. Inspired by our Purple Bow story, they are imbued with as much care and quality as possible, intended to spark a moment of self-worth and hope.</p>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-y-6 '>
                    <div className='relative aspect-video'>
                        <Image fill loading='lazy' sizes='(min-width: 1024px) 50vw, 100vw' alt='hiddenImg' src={'https://cdn.sanity.io/images/w8f1ak3c/production/d19c263b2e558efbc4b3e16e7c952ea5698f8e96-2250x1500.jpg'} className='object-cover' />
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <p className='uppercase font-futura text-3xl'>Work Work Eveleigh</p>
                        <div className='flex flex-col gap-y-2.5'>
                            <p>Two Good&apos;s Work Work initiative is a purpose-driven program for women who have experienced homelessness, domestic violence and complex trauma.</p>
                            <p>Work Work fills a ‘love and skills’ gap in the market by promoting self-belief, positive connections and the realisation of potential through meaningful employment, where participants are employed as Kitchen or Concierge Assistants on a 6-month fixed term employment contract.</p>
                            <p>Whilst preparing meals for catering and shelter donations, participants are supported to develop their skills and employable qualities, with support by a social worker, a dedicated coach and training days providing structure to this process.</p>
                            <p>Through the reclaiming of self-worth and the acquisition of skills, graduates are then supported to find permanent and ongoing work beyond Two Good, with resume and interview preparation, introductions to employers and post-placement support.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramFaq;
