import Image from 'next/image';
import React from 'react';

// 1. Defined structure for your data
export type AnimeCharProps = {
    id: string;
    name: string;
    bgColor: string;
    story: string;
    info: string;
    img: string;
    link: string;
}

const AnimeCard = ({ char }: { char: AnimeCharProps }) => {
    return (
        <div
            style={{ backgroundColor: char.bgColor, zIndex: Number(char.id) }}
            className='h-screen w-full absolute top-0 left-0 flex items-center justify-center will-change-transform overflow-hidden card'
        >
            <div className='relative  w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center p-2 md:p-12 gap-6 md:gap-16'>

                <div className='relative w-full h-[40vh] md:w-1/2 md:h-[80vh] flex items-center justify-center'>
                    <div className='relative w-full h-full rounded-md overflow-hidden shadow-2xl z-10 border-4 border-white/20'>
                        <Image 
                            src={char.img} 
                            alt={char.name} 
                            fill 
                            className='object-cover  object-top' 
                            priority={Number(char.id) === 1}
                            sizes='(max-width: 768px) 100vw, 50vw'
                        />
                    </div>
                </div>

               
                <div className='flex md:pt-8 pt-0 flex-col items-start justify-center w-full md:w-1/2 text-background z-10 space-y-4 md:space-y-6'>
                    
                    
                    <span className='uppercase tracking-tighter text-xs sm:text-sm  font-bold opacity-80 bg-background/40 px-2 font-social py-1.5 '>
                        {char.info}
                    </span>

                    
                    <h1 className='text-4xl md:text-7xl font-black leading-tight drop-shadow-lg uppercase font-futura'>
                        {char.name}
                    </h1>

                    
                    <p className='text-base md:text-xl leading-tight opacity-90 line-clamp-4 md:line-clamp-none max-w-lg font-helvic'>
                        {char.story}
                    </p>

                    
                    <a 
                        href={char.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className='group flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-full font-bold transition-transform transform hover:scale-105 active:scale-95'
                    >
                        Learn More
                        
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1"  fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>

            
            <h1 className='absolute bottom-[0%] right-[-5%] text-[20vw] font-black opacity-20 z-0 select-none pointer-events-none text-background whitespace-nowrap leading-none'>
                {char.name}
            </h1>
        </div>
    );
};

export default AnimeCard;