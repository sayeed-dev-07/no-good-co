import React from 'react';
import LineAnim from '../normalComponents/LineAnimation';
import LineButton from '../normalComponents/LineButton';
import { MdArrowOutward } from 'react-icons/md';
import ShopSlider from './ShopSlider';

const GiftSection = () => {
    return (
        <div className='py-[5%]'>
            {/* header part  */}
            <div className='text-background flex flex-col gap-y-4  sm:gap-y-8 text-center font-helvic w-full max-w-full sm:max-w-[60%] lg:max-w-[40%]  mx-auto '> 
               <LineAnim text='GIFTS FOR GOOD.' style='uppercase  text-3xl md:text-[55px]  font-futura font-bold'/>
               <LineAnim delay={0.2} text='Dress up your festive tablescapes with a two-course bundle of delight and impact.' style='text-[1em]'/>
               <LineButton>
                <div className='flex items-center justify-center gap-x-0.5'>
                    <p className='uppercase font-social text-xs'>Shop today.</p>
                <MdArrowOutward size={16} className=' mb-0.5' />
                </div>
               </LineButton>
            </div>
            <div className='my-[10%] sm:my-[5%]'>
                <ShopSlider/>
            </div>
        </div>
    );
};

export default GiftSection;