import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='min-h-screen px-2 bg-foreground text-background flex items-center font-futura justify-center '>
            <div className='aspect-square relative h-[30vh]'>
                <Image fill src={'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHM3dWcyZTFnaHMxZTRic3M5NGFyeWRsYWtra2xsMWozaWp1MHh1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9J7tdYltWyXIY/giphy.gif'} loading='lazy' alt='gif' sizes='100vw'/>
            </div>
        </div>
    );
};

export default page;
