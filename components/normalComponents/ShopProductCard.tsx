import Image from 'next/image';
import React from 'react';
import { shopProducts } from '@/public/data/ShopProducts';

const ShopProductCard = ({ id }: { id: number }) => {
  const data = shopProducts[id];

  return (
    <div className="relative w-full aspect-3/4 overflow-hidden">
      <Image
        src={data.image}
        alt={data.name}
        fill
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
        className="object-cover"
      />
    </div>
  );
};

export default ShopProductCard;
