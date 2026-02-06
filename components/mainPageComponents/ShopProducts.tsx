import React from 'react';
import ShopProductCard from '../normalComponents/ShopProductCard';

import LineAnim from '../normalComponents/LineAnimation';

const ShopProducts = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      {/* ROW 1 */}
      <div
        // 1. Removed 'items-center', added 'items-stretch' (default) implicitly
        className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-6"
      >
        <div className="order-1 h-full"> {/* Added h-full */}
          <ShopProductCard id={5} />
        </div>

        <div className="order-2 flex items-center font-futura text-3xl uppercase justify-center text-center h-full">
          <ShopProductCard id={3}/>
        </div>

        <div className="order-3 h-full">
          <ShopProductCard id={4} />
        </div>
      </div>

      {/* ROW 2 */}
      <div
        className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-6"
      >
        <div className="order-2 lg:order-1 h-full">
          <ShopProductCard id={1} />
        </div>

        <div className="col-span-2 lg:col-span-1 order-1 lg:order-2 flex items-center font-futura text-xl sm:text-3xl uppercase justify-center text-center h-full">
          <div className='w-[90%]'>
            <LineAnim text={`"When people think of domestic violence, they think about the abuse I suffered, but rarely what was missing; love, affection and care."`} per='95%'/>
          </div>
        </div>

        <div className="order-3 h-full">
          <ShopProductCard id={2} />
        </div>
      </div>

      {/* ROW 3 */}
      <div
        className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-6"
      >
        <div className="order-1 h-full">
          <ShopProductCard id={6} />
        </div>

        <div className="order-2 flex items-center font-futura text-3xl uppercase justify-center text-center h-full">
          <ShopProductCard id={7}/>
        </div>

        <div className="order-3 h-full">
          <ShopProductCard id={8} />
        </div>
      </div>

      {/* ROW 4 */}
      <div
        className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-6"
      >
        <div className="order-2 lg:order-1 h-full">
          <ShopProductCard id={9} />
        </div>

        <div className="col-span-2 lg:col-span-1 order-1 lg:order-2 flex items-center font-futura text-xl sm:text-3xl uppercase justify-center text-center h-full">
          <div className='w-[90%]'>
            <LineAnim text='50% of all profits are reinvested into rebuilding the self worth and independence of vulnerable women currently experiencing, or at risk of, homelessness.' per='95%' />
          </div>
        </div>

        <div className="order-3 h-full">
          <ShopProductCard id={10} />
        </div>
      </div>

      {/* ROW 5 */}
      <div
        className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-6"
      >
        <div className="order-1 h-full">
          <ShopProductCard id={11} />
        </div>

        <div className="order-2 flex items-center font-futura text-3xl uppercase justify-center text-center h-full">
          <ShopProductCard id={12}/>
        </div>

        <div className="order-3 h-full">
          <ShopProductCard id={13} />
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;