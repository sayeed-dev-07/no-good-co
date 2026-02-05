import React from 'react';
import LineAnim from '../normalComponents/LineAnimation';
import ImpactImg from '../normalComponents/ImpactImg';
import LineButton from '../normalComponents/LineButton';

const ImpactSection = () => {
    return (
        <div className='text-background font-futura flex flex-col-reverse lg:flex-row justify-between min-h-screen items-stretch lg:items-start gap-5 md:gap-10 '>
            {/* Left Content */}
            <div className='flex-1 flex flex-col justify-center'>
                <div className='max-w-[85%] lg:max-w-[65%] w-full flex flex-col gap-y-8'>
                    <LineAnim style='text-2xl' text='OUR IMPACT.' />
                    <div className='font-helvic text-normal flex flex-col gap-y-6'>
                        <LineAnim style='' text={`The thing is, we don't save anyone.`} />
                        <LineAnim style='' text={`What we do is provide a safe space for women to change the course of their own lives.`} />
                        <LineAnim style='' text={`After many years of living in crisis, abuse and complex trauma, restoring self-worth is foundational for independence. We believe that through experiences that promote love and respect, we can spark and nurture a sense of self-worth for those on the path of healing.`} />
                    </div>
                    <div>
                        <LineButton auto={false}>
                            <p className='font-social text-xs font-normal'>HERE&apos;S HOW WE DO IT</p>
                        </LineButton>
                    </div>
                </div>
            </div>

            {/* Right Images - flex-[1.5] gives it more room than the text */}
            <div className='flex-2 flex  flex-row gap-y-6 lg:h-[85vh] md:gap-x-6 gap-x-2'>
                <div className='flex-1 relative'>
                    <ImpactImg index={0}/>
                </div>
                <div className='flex-1 relative'>
                    <ImpactImg delayTime={1} index={1}/>
                </div>
            </div>
        </div>
    );
};

export default ImpactSection;