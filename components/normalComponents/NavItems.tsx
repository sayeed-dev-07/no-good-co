'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

import React, { useRef } from 'react';
import NavLink from './NavLink';

gsap.registerPlugin(SplitText)

const NavItems = ({openMenu, setOpenMenu}:{openMenu: boolean, setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const scrollRef = useRef<HTMLDivElement | null>(null)
    useGSAP(() => {
        if (!containerRef.current) {
            return
        }
        const splitTexts = SplitText.create('.link',{
            type: 'lines',
            mask:'lines'
        })
        const contacts = containerRef.current.querySelectorAll('.contact')
        const tl = gsap.timeline()
         gsap.set(containerRef.current, { force3D: true })
        if (openMenu) {
            if (scrollRef.current) {
                scrollRef.current.scrollTop = 0;
            }
            tl.to(containerRef.current, {
                y:0,
                duration:0.5,
                ease:'power3.inOut'
            })
            .from(splitTexts.lines, {
                y:160,
                stagger:{
                    amount:0.4
                }
            },'-=0.2')
            .fromTo(contacts,{
                y:30,
                autoAlpha:0
            },{
                y:0,
                autoAlpha:1,
                duration:0.2,
                stagger:0.1
            },
        '-=0.4')
            }
        if (!openMenu) {
            tl.to(containerRef.current,{
                y:'-105%',
                duration:0.3,
                ease:'power1'
            })
        }
    },{dependencies:[openMenu], scope:containerRef})
    return (

        <div ref={containerRef}
            
            className={`fixed inset-0 bg-background -translate-y-full will-change-transform min-h-dvh`}
        >
            <div ref={scrollRef} className='w-full h-full flex items-center flex-col-reverse sm:flex-row justify-between px-3 font-helvic overflow-auto gap-y-3'>
                <div className='flex-3  flex  justify-between h-fit w-full sm:h-full'>
                    <div className='flex items-end  w-full h-full py-[5%]'>
                        <div className='flex items-start justify-between w-full flex-wrap gap-x-3.5 gap-y-4 '>
                            <div className='flex flex-col capitalize contact'>
                                <p className='pb-3 uppercase text-xs text-[#d5d2d2b4]'>connent with us</p>
                                <a onClick={()=>setOpenMenu(prev => !prev)} href="">facebook</a>
                                <a onClick={()=>setOpenMenu(prev => !prev)} href="">instagram</a>
                                <a onClick={()=>setOpenMenu(prev => !prev)} href="">twitter</a>
                                <a onClick={()=>setOpenMenu(prev => !prev)} href="">linkedIn</a>
                                <a onClick={()=>setOpenMenu(prev => !prev)} href="">youTube</a>
                            </div>
                            <div className='flex flex-col  capitalize contact'>
                                <p className='pb-3 uppercase text-xs text-[#d5d2d2b4]'>nitty gritties</p>
                                <a onClick={()=>setOpenMenu(prev => !prev)} href="">good things faqs</a>
                                <a onClick={()=>setOpenMenu(prev => !prev)} href="">good food faqs</a>
                                <a onClick={()=>setOpenMenu(prev => !prev)} href="">good places</a>
                            </div>
                            <div className='flex flex-col capitalize contact'>
                                <p className='pb-3 uppercase text-xs text-[#d5d2d2b4]'>get started</p>
                                <a onClick={()=>setOpenMenu(prev => !prev)} href="">pathways</a>
                                <a onClick={()=>setOpenMenu(prev => !prev)} href="">careers</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:flex-2 w-full items-end font-futura flex font-bold  sm:text-6xl text-4xl lg:text-7xl uppercase flex-col -gap-y-2 mt-[30%] sm:mt-[5%]'>
                    <NavLink setOpenMenu={setOpenMenu} path='/shop' text='shop'/>
                    <NavLink setOpenMenu={setOpenMenu} path='/catering' text='catering'/>
                    <NavLink setOpenMenu={setOpenMenu} path='/impact' text='impact'/>
                    <NavLink setOpenMenu={setOpenMenu} path='/stories' text='stories'/>
                    <NavLink setOpenMenu={setOpenMenu} path='/about' text='about'/>
                    <NavLink setOpenMenu={setOpenMenu} path='/contact' text='contact'/>
                    <NavLink setOpenMenu={setOpenMenu} path='/donate' text='donate'/>
                </div>
            </div>
        </div>

    );
};

export default NavItems;