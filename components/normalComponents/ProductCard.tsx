import React from 'react';
import { impactData } from '@/public/data/impactProductData';
import Image from 'next/image';
import LineAnim from './LineAnimation';


const ProductCard = ({index}:{index : number}) => {
    const productData = impactData[index]
    return (
        <div className='h-[50vh] md:h-[60vh] py-4 lg:h-[80vh] xl:h-screen w-full'>
            <div className='h-[80%] w-full relative'>
                <Image fill sizes="(max-width: 768px) 100vw, 50vw" loading='lazy' src={productData.imgLink} className='object-contain' alt={`productImg-${index}`}/>
            </div>
            <div className='flex font-helvic uppercase text-sm flex-col items-center justify-center gap-y-2 text-center'>
                <LineAnim text={`${productData.text}`}/>
                <LineAnim style='text-xs' text={`${productData.price}`}/>
                
            </div>
        </div>
    );
};

export default ProductCard;