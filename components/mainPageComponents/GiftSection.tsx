import React from 'react';
import LineAnim from '../normalComponents/LineAnimation';

const GiftSection = () => {
    return (
        <div className='min-h-screen'>
            {/* header part  */}
            <div className='text-background flex flex-col gap-y-3 text-center font-helvic w-full lg:max-w-[40%] mx-auto '> 
               <LineAnim text='GIFTS FOR GOOD.' style='uppercase sm:text-5xl text-4xl md:text-5xl lg:text-6xl font-futura font-bold'/>
            </div>
        </div>
    );
};

export default GiftSection;