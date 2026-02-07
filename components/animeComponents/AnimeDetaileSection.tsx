import React from 'react';
import AnimeDetailsCard from './AnimeDetailsCard';
import Line from '../normalComponents/Line';

const AnimeDetaileSection = () => {
    return (
        <div className=''>
            <div className='py-[5%]'>
                <Line text1='Hajime' text2='no ippo'/>
            </div>
            <div className='pb-[15vh]'>
                <AnimeDetailsCard index={0}/>
            </div>
            <div className='py-[5%]'>
                <Line text1='vinland' text2='saga'/>
            </div>
            <div>
                <AnimeDetailsCard index={1}/>
            </div>
            <div className='py-[5%]'>
                <Line text1='vagabond' text2='saga'/>
            </div>
            <div>
                <AnimeDetailsCard index={2}/>
            </div>
        </div>
    );
};

export default AnimeDetaileSection;