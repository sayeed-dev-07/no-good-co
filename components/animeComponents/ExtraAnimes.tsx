import React from 'react';
import LineAnim from '../normalComponents/LineAnimation';
import { extraData } from '@/public/data/animeData';
import ExtraAnimeImg from './ExtraAnimeImg';

const ExtraAnimes = () => {
    return (
        <div className='py-[5vh]'>
            <LineAnim text='Honorable mentions' style='md:text-6xl tracking-tight sm:text-5xl text-3xl lg:text-7xl xl:text-8xl font-futura uppercase text-center'/>
            <div className='mt-8 sm:mt-[4%] [column-width:220px] sm:[column-width:260px] lg:[column-width:300px] [column-gap:0.9rem] sm:[column-gap:1.2rem]'>
                {
                    extraData.map((anime)=>{
                        return (
                            <div key={anime.id} className='mb-4 sm:mb-5 break-inside-avoid'>
                                <ExtraAnimeImg goTo={anime.link} link={anime.imgLink}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ExtraAnimes;
