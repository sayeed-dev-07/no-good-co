
import TextAnimation from '@/components/normalComponents/textAnimation';
import Image from 'next/image';
import React from 'react';


const Page = () => {



  return (
    <div  className='bg-foreground px-4 px-1 pt-[25vh] text-background min-h-[200vh] w-full'>
      
        <TextAnimation text='change the course.' style='text-[calc((100vw-48px)*0.1620)] leading-[0.96em] sm:leading-[0.9em] uppercase font-medium font-futura tracking-[-0.06em]' />
      
    </div>
  );
};

export default Page;