'use client'
import Link from 'next/link';
import React from 'react';

const NavItems = () => {
    return (
        <div className='w-full h-full flex items-center flex-col-reverse sm:flex-row justify-between px-3 font-helvic overflow-auto gap-y-3'>
            <div className='flex-3  flex  justify-between h-fit w-full sm:h-full'>
                <div className='flex items-end  w-full h-full py-[5%]'>
                    <div className='flex items-start justify-between w-full flex-wrap gap-x-3.5 gap-y-4 '>
                        <div className='flex flex-col capitalize '>
                        <p className='pb-3 uppercase text-xs text-[#d5d2d2b4]'>connent with us</p>
                        <a href="">facebook</a>
                        <a href="">instagram</a>
                        <a href="">twitter</a>
                        <a href="">linkedIn</a>
                        <a href="">youTube</a>
                    </div>
                    <div className='flex flex-col  capitalize '>
                        <p className='pb-3 uppercase text-xs text-[#d5d2d2b4]'>nitty gritties</p>
                        <a href="">good things faqs</a>
                        <a href="">good food faqs</a>
                        <a href="">good places</a>
                    </div>
                    <div className='flex flex-col capitalize '>
                        <p className='pb-3 uppercase text-xs text-[#d5d2d2b4]'>get started</p>
                        <a href="">pathways</a>
                        <a href="">careers</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className='sm:flex-2 w-full items-end font-futura flex font-bold  sm:text-6xl text-4xl lg:text-7xl uppercase flex-col  mt-[25%] sm:mt-[5%]'>
                <Link href={'/'}>shop</Link>
                <Link href={'/'}>catering</Link>
                <Link href={'/'}>impact</Link>
                <Link href={'/'}>stories</Link>
                <Link href={'/'}>about</Link>
                <Link href={'/'}>contact</Link>
                <Link href={'/'}>donate</Link>
            </div>
        </div>
    );
};

export default NavItems;