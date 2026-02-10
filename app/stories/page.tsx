
import TextAnimation from '@/components/normalComponents/textAnimation';
import ScrollContainer from '@/components/storiesComponents/ScrollContainer';
import TextLineAnim from '@/components/storiesComponents/TextLineAnim';

import React from 'react';


const Page = () => {
    return (
        <div className='min-h-screen bg-foreground text-background font-helvic'>

            {/* wrapper  */}

            <div className='w-full h-full overflow-hidden pt-[20vh]'>

                <div className='flex  px-2 sm:px-4 items-center justify-between flex-wrap gap-x-6 gap-y-3'>

                    <TextAnimation style='font-futura lg:text-8xl sm:text-6xl text-4xl uppercase' text='Stories' />

                    <TextLineAnim style='max-w-125 w-full text-sm sm:text-[16px]' text='The narrative of No Good Co is far reaching. Here, you will find many different voices; we can’t tell our story without telling theirs. Every perspective adds another dimension to who we are and what we mean to the world.' />
                </div>
                <div className='py-[15%] max-w-175 w-full mx-auto lg:text-6xl sm:text-4xl font-futura text-3xl uppercase text-center'>
                    <TextLineAnim text='explore the stories' />
                </div>
            </div>
            {/* stories */}
            <div>
                <div className="w-full h-[10vh]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 220"
                        preserveAspectRatio="none"
                        className="w-full h-[calc(100%+1px)] block"
                    >
                        <ellipse
                            cx="720"
                            cy="445.5"
                            rx="850"
                            ry="445.5"
                            fill="#6c906e"
                        />
                    </svg>
                </div>
                
                    <ScrollContainer/>


            </div>

        </div>
    );
};

export default Page;