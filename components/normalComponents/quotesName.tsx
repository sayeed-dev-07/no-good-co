import React from 'react';

interface QuoteData {
  id: number | string;
  author: string;
}

const QuotesName = ({ data, isActive }: { data: QuoteData; isActive: boolean }) => {
  return (
    <div
      className={`
        w-fit md:w-[320px] px-3 sm:px-8 transition-all duration-500 cursor-pointer
        flex flex-col gap-y-4 shrink-0
        ${isActive ? 'opacity-100 scale-110' : 'opacity-60 scale-90'}
      `}
    >
      <div
        className={`
          h-[15px] w-[15px] rounded-full border border-background
          ${isActive ? 'bg-background' : 'bg-foreground'}
        `}
      />

      <div className="font-helvic text-background">
        <p className="text-xs uppercase tracking-widest opacity-70">
          Quotes // 0{data.id}
        </p>
        <p className="text-lg sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
          {data.author}
        </p>
      </div>
    </div>
  )
}

export default QuotesName;