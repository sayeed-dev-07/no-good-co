import React from 'react';
import TestimonialImage from './TestimonialImage';

const TestimonialFaq = () => {
    return (
        <div className='flex flex-col gap-y-12'>
            <div className='flex w-full items-center justify-end font-helvic'>
                <div className='sm:w-[50%] w-full flex flex-col gap-y-6'>
                    <p className='sm:text-3xl text-2xl'>The narrative of Two Good Co is far reaching; our touchpoints are broad in their impact and experience. To fully understand the fabric of Two Good Co, we ask everyone in our community to share their stories.</p>
                    <p className='max-w-125 w-full text-base'>We can’t tell our story without telling theirs. Browse through them and take the time to explore our world; each adds another layer to the Two Good experience, and every perspective adds another dimension to who we are and what we mean to the world.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <TestimonialImage author='kai' color='#e6c88e' link='https://cdn.sanity.io/images/w8f1ak3c/production/f36a12ffeae8e0161b92a9b3633fdf2d78d688e1-5504x8256.jpg' quotes={`“You don’t need to have everything figured out to move forward.”`} date='20 march, 2004'/>
                <TestimonialImage author='tyson' color='#6c906e' link='https://cdn.sanity.io/images/w8f1ak3c/production/b47be6a69fa6bcaa20e59c7e35384a6681db69d1-1080x1620.jpg' quotes={`“Some chapters are meant to be felt, not explained.”`} date='20 march, 2004'/>
                <TestimonialImage author='ash' color='#cabed9' link='https://cdn.sanity.io/images/w8f1ak3c/production/e8ef19e7878302138cb7eedfe4aa6586c79a948e-5504x8256.jpg' quotes={`“Let life unfold instead of rushing it.”`} date='20 april, 2005'/>
                

            </div>
        </div>
    );
};

export default TestimonialFaq;
