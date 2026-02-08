import React from 'react';
import { animeData } from '@/public/data/animeData';
import ImpactImg from '../normalComponents/ImpactImg';
import LineAnim from '../normalComponents/LineAnimation';
import AnimeNormalImg from './AnimeNormalImg';
import LineButton from '../normalComponents/LineButton';
import { LuMoveUpRight } from 'react-icons/lu';
const AnimeDetailsCard = ({ index }: { index: number }) => {
    const data = animeData[index]

    if (index % 2 !== 0) {
        return (
            <div>
                <div className='text-background font-futura flex flex-col lg:flex-row justify-between min-h-screen items-stretch lg:items-start gap-5 md:gap-10 '>
                    {/* Left Content */}


                    <div className='w-full lg:w-[70%] flex  flex-row gap-y-6 lg:h-[85vh] md:gap-x-6 gap-x-2'>
                        <div className='flex-1 relative'>
                            <AnimeNormalImg link={data.img1} />
                        </div>
                        <div className='flex-1 relative'>
                            <AnimeNormalImg delayTime={1} link={data.img2} />
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col justify-center'>
                        <div className='max-w-[95%] lg:max-w-[85%] w-full flex flex-col gap-y-3 sm:gap-y-8'>
                            <LineAnim style='text-3xl uppercase' text={data.name} />
                            <div className='font-helvic text-normal flex gap-y-2 flex-col  sm:gap-y-6'>
                                <LineAnim style='' text={data.description} />

                            </div>
                            <div>
                                <LineButton auto={false}>
                                    <div className='flex items-center justify-between gap-x-2 text-xs'>
                                        <a target='_blank' href={data.link} className='font-social uppercase '>{data.name}</a> <LuMoveUpRight />
                                    </div>
                                </LineButton>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full mt-[5%] md:mt-[2%] flex items-center justify-start'>
                    <div className='w-full h-full  lg:w-[70%]'>
                        <AnimeNormalImg big={true} link={data.bigImg} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='text-background font-futura flex flex-col-reverse lg:flex-row justify-between min-h-screen items-stretch lg:items-start gap-5 md:gap-10 '>
                {/* Left Content */}
                <div className='flex-1 flex flex-col justify-center'>
                    <div className='max-w-[95%] lg:max-w-[85%] w-full flex flex-col gap-y-3 sm:gap-y-8'>
                        <LineAnim style='text-3xl uppercase' text={data.name} />
                        <div className='font-helvic text-normal flex gap-y-2 flex-col  sm:gap-y-6'>
                            <LineAnim style='' text={data.description} />

                        </div>
                        <div>
                            <LineButton auto={false}>
                                <div className='flex items-center justify-between gap-x-2 text-xs'>
                                    <a target='_blank' href={data.link} className='font-social uppercase '>{data.name}</a> <LuMoveUpRight />
                                </div>
                            </LineButton>
                        </div>
                    </div>
                </div>


                <div className='w-full lg:w-[70%] flex  flex-row gap-y-6 lg:h-[85vh] md:gap-x-6 gap-x-2'>
                    <div className='flex-1 relative'>
                        <AnimeNormalImg link={data.img1} />
                    </div>
                    <div className='flex-1 relative'>
                        <AnimeNormalImg delayTime={1} link={data.img2} />
                    </div>
                </div>
            </div>
            <div className='w-full mt-[5%] md:mt-[2%] flex items-center justify-end'>
                <div className='w-full lg:w-[70%]'>
                    <AnimeNormalImg big={true} link={data.bigImg} />
                </div>
            </div>
        </div>
    );
};

export default AnimeDetailsCard;