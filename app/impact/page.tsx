
import ImpactContainer from '@/components/impactComponents/ImpactContainer';
import TextAnimation from '@/components/normalComponents/textAnimation';
import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='px-2 sm:px-4 bg-foreground text-background'>
            <div className='pt-[20vh] overflow-hidden'>
                <div className='text-center text-3xl lg:text-7xl sm:text-5xl font-futura uppercase'>
                    <TextAnimation style='' text='Watch our impact.' />
                </div>
                <div className='w-full aspect-video my-[5%] h-[40vh] lg:h-[55vh] relative'>
                    <Image unoptimized loading='eager' fill className='object-cover' src={'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWtteTFnYXhjcnQ4dmlmczl5YnBjaTB6Y29kYzFnejh4aXphbnBxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ptmWoT5ZoeStn3PP5v/giphy.gif'} alt='demonSlayerImg' />
                </div>
                <ImpactContainer />
            </div>
        </div>
    )
};

export default Page;
