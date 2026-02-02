import React from 'react';
import { lifeQuotes } from '@/public/data/lifeQuotes';

const QuotesName = ({index} : {index: number}) => {
    const quoteData = lifeQuotes[index]
    return (
        <div className='w-fit mx-[3%] cursor-pointer font-helvic text-2xl flex flex-col gap-y-4'>
            <div className='h-[15px] border w-[15px] rounded-full bg-foreground'></div>
            <div>
                <p>Quotes//0{quoteData.id}</p>
                <p>{quoteData.author}</p>
            </div>
            <div></div>
        </div>
    );
};

export default QuotesName;