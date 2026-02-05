import React from 'react';
import { BiRightArrow, BiSolidRightArrow } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';

const EmailSection = () => {
    return (
        <div className='flex gap-y-0.5 w-full flex-col'>
            <div className='flex items-center justify-between'>
                <div>
                    <input className='text-5xl placeholder:text-background font-futura uppercase outline-none placeholder:transition-all 
             placeholder:duration-300 
             focus:placeholder:text-transparent 
             focus:placeholder:opacity-0 ' type="text" placeholder='enter your email address' />

                </div>
                <div>
                    <FaArrowRight className='text-4xl' />
                </div>
            </div>
            <div className='w-full h-px bg-background'>

            </div>
        </div>
    );
};

export default EmailSection;