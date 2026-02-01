
import GiftSection from '@/components/mainPageComponents/GiftSection';
import HeroImg from '@/components/mainPageComponents/HeroImg';
import ProductSection from '@/components/mainPageComponents/ProductSection';
import TextAnimation from '@/components/normalComponents/textAnimation';
import Image from 'next/image';
import React from 'react';


const Page = () => {



  return (
    <div  className='bg-foreground sm:px-4 px-1 pt-[25vh] text-background  w-full flex flex-col gap-y-5'>
      
        <TextAnimation text='change the course.' style='text-[calc((100vw-48px)*0.1620)] leading-[0.96em] sm:leading-[0.9em] uppercase font-medium font-futura tracking-[-0.06em]' />
        <HeroImg/>
        <div className='mt-6 sm:mt-[5%]'>
          <GiftSection/>
        </div>
        <div>
          <ProductSection/>
        </div>
        
    </div>
  );
};

export default Page;