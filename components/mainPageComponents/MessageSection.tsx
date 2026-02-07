'use client'
import React from 'react';
import QuotesSlider from './QuotesSlider';
import Line from '../normalComponents/Line';

const MessageSection = () => {
    return (
        <div  className='py-[5%] w-full overflow-hidden'>
            <Line text1='Words of Goodness' text2='Messages of Love & Support'/>

            <div className='my-6'>
                <QuotesSlider/>
            </div>
        </div>
    );
};

export default MessageSection;