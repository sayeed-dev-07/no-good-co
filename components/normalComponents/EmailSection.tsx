
import { FaArrowRight } from 'react-icons/fa';

const EmailSection = () => {
    
    return (
        <div className='flex gap-y-0.5 w-full flex-col'>
            <div className='flex items-center gap-x-2.5 justify-between'>
                <div className='flex-1 relative'>
                    <input className='md:text-[3vw]  w-full text-[5.4vw] sm:text-[4vw] placeholder:text-background font-futura uppercase outline-none placeholder:transition-all 
             placeholder:duration-300 
             focus:placeholder:text-transparent 
             focus:placeholder:opacity-0 ' type="text" placeholder='enter your email address' />
                    
                </div>
                <div className='w-fit'>
                    <FaArrowRight className='md:text-[3vw] text-[6vw] cursor-pointer sm:text-[4vw]' />
                </div>

            </div>
            <div className='w-full h-px bg-background'>
            </div>
        </div>
    );
};

export default EmailSection;