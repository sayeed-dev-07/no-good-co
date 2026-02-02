'use client'
import { lifeQuotes } from '@/public/data/lifeQuotes';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Flip } from 'gsap/all';

import React, { useRef } from 'react';
import QuotesName from '../normalComponents/quotesName';

gsap.registerPlugin(Flip)

const QuotesSlider = () => {
    return (
        <div className='min-h-screen w-full'>
            <div className='w-full flex overflow-hidden gap-x-6'>
                {
                    lifeQuotes.map((data, index)=>(
                        <QuotesName key={index} index={index}/>
                    ))
                }
            </div>
            <div className='textSection'>

            </div>
            <div></div>
        </div>
    );
};

export default QuotesSlider;