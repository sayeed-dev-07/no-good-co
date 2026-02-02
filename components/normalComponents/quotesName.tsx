import React from 'react';

interface QuoteData {
  id: number | string;
  author: string;
}

const QuotesName = ({ data, isActive }: { data: QuoteData; isActive: boolean }) => {
  return (
    <div className={`
      w-fit px-[10vw] transition-all duration-500 cursor-pointer flex flex-col gap-y-4
      ${isActive ? 'opacity-100 scale-110' : 'opacity-60 scale-90'}
    `}>
      <div className={`
        h-[15px] w-[15px] rounded-full border border-background
        ${isActive ? 'bg-background' : 'bg-foreground'}
      `}></div>
      
      <div className="font-helvic text-background">
        <p className="text-xs uppercase tracking-widest opacity-70">
          Quotes // 0{data.id}
        </p>
        <p className="text-3xl font-bold whitespace-nowrap">
          {data.author}
        </p>
      </div>
    </div>
  );
};

export default QuotesName;