import React from 'react';
import LineAnim from '../normalComponents/LineAnimation';
import SlideButton from '../normalComponents/SlideButton';



const HeadlineTextAnime = () => {
    return (
        <div className='py-[15%] flex flex-col items-center justify-center  md:gap-y-12 gap-y-4 sm:gap-y-8'>
            
                <LineAnim style='uppercase font-futura tracking-tight text-3xl sm:text-4xl md:text-6xl text-center' text='Anime That Speaks to the Heart' />
            
            <SlideButton text={`browse more animes`} />
            <LineAnim text='BECAUSE A GREAT STORY, ANIMATED WITH HEART + SOUL,
                CAN CHANGE THE COURSE OF SOMEONE’S LIFE.' style='text-sm font-helvic font-semibold max-w-112.5 text-center md:leading-[1.7vw] leading-tight sm:leading-[2.2vw] lg:leading-[1.3vw] xl:leading-[1vw]' />
        </div>
    );
};

export default HeadlineTextAnime;