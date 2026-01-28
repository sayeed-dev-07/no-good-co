import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className='min-h-screen overflow-hidden py-[5%] text-3xl w-full bg-foreground text-background flex flex-col items-center justify-between'>
      <p className='font-futura uppercase text-[317px] font-medium'>Lorem ipsum dolor sit <br /> quasi. Aliquam, quia.</p>
      <p className='font-social uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quasi. Aliquam, quia.</p>
      <p className='font-helvic text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quasi. Aliquam, quia.</p>
      <Image src={'/logo.svg'} alt='img' height={140} width={140}/>
    </div>
  );
};

export default page;