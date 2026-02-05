import React from 'react';
import EmailSection from '../normalComponents/EmailSection';
import FooterBottom from '../normalComponents/FooterBottom';
import FooterSvg from '../normalComponents/FooterBottom';
import LineAnim from '../normalComponents/LineAnimation';

const FooterSection = () => {
    return (
        <div className='py-[5%]  sm:px-4 px-1 bg-foreground text-background'>
            <div className='py-[5%] sm:py-0'>
                <EmailSection />
            </div>
            <div className='pt-[8%] w-full flex-wrap gap-x-12 gap-y-6 flex items-center justify-between'>
                <div className='text-[16px] font-helvic flex flex-col items-start justify-between'>
                    <p className='uppercase text-xs pb-4'>CONNECT WITH US</p>
                    <a className='hoverLink' href="">Facebook</a>
                    <a className='hoverLink' href="">Instagram</a>
                    <a className='hoverLink' href="">Twitter</a>
                    <a className='hoverLink' href="">LinkedIn</a>
                    <a className='hoverLink' href="">YouTube</a>
                </div>
                <div className=''>
                    <FooterSvg />
                </div>

            
            <div className='text-[16px]  font-helvic flex flex-col items-start sm:items-end justify-between'>
                <p className='uppercase text-xs pb-4'>THE NITTY GRITTIES</p>
                <a className='hoverLink' href="">Good Things FAQs</a>
                <a className='hoverLink' href="">Good Food FAQs</a>
                <a className='hoverLink' href="">Good Places</a>
                <a className='hoverLink' href="">Pathways</a>
                <a className='hoverLink' href="">Careers</a>
                <a className='hoverLink' href="">Wholesale</a>
            </div>
        </div>
        <div className='text-xs font-social uppercase w-full flex items-center justify-center flex-wrap gap-y-2 gap-x-8 py-[10%] sm:py-[5%]'>
            <a href="">© No Good Co. 2026</a>
            <a href="">Terms of Use</a>
            <a href="">Privacy Policy</a>
        </div>
        <div className='font-helvic text-[16px] py-[2%] sm:w-[80%] w-full text-center mx-auto'>
            <LineAnim per='bottom' text='We are proud and privileged to have our home on this land, and to be able to continue the long tradition of community coming together around food, begun thousands of years ago by First Nations peoples. As we stand together on this unceded land, we acknowledge our First Nations people, are the original custodians of this land, and we recognise their deep connection to land, water, sky and community which continues today. We pay our deep respects to community elders, past, present and emerging, for they hold the memories, the traditions, the culture and hopes of Aboriginal and Torres Strait Islander peoples. Always was, always will be Aboriginal land.'/>
        </div>
        </div>
    );
};

export default FooterSection;