import React from 'react';
import LineAnim from '../normalComponents/LineAnimation';
import LineButton from '../normalComponents/LineButton';

const GiftSection = () => {
    return (
        <div className='min-h-screen'>
            {/* header part  */}
            <div className='text-background flex flex-col gap-y-4 sm:gap-y-8 text-center font-helvic w-full max-w-full sm:max-w-[60%] lg:max-w-[40%]  mx-auto '> 
               <LineAnim text='GIFTS FOR GOOD.' style='uppercase  text-3xl md:text-5xl  font-futura font-bold'/>
               <LineAnim delay={0.5} text='Dress up your festive tablescapes with a two-course bundle of delight and impact.' style='text-[1em]'/>
               <LineButton>
                <p className='uppercase font-social text-xs'>Shop today.</p>
               </LineButton>
            </div>
        </div>
    );
};

export default GiftSection;