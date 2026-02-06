import { shopProducts } from '@/public/data/ShopProducts';
import React from 'react';
import ShopProductCard from '../normalComponents/ShopProductCard';
import TextCard from '../normalComponents/TextCard';

const ShopProducts = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">

      <div className="flex gap-6">
        <ShopProductCard id={1} />
        <TextCard />
      </div>

      <ShopProductCard id={2} />

      <div className="flex gap-6">
        <ShopProductCard id={1} />
        <TextCard />
      </div>

      <ShopProductCard id={2} />

    </div>
  );
};


export default ShopProducts;