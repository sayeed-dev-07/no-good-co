'use client'
import React from 'react';
import ShopProductRow from '../normalComponents/ShopProductRow';

const ShopProducts = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      {/* ROW 1 */}
      <ShopProductRow idList={[1,2,3]}/>
      

      {/* ROW 2 */}
      <ShopProductRow textTrue={true} text={`"When people think of domestic violence, they think about the abuse I suffered, but rarely what was missing; love, affection and care."`} idList={[4,5]}/>
      

      {/* ROW 3 */}
      <ShopProductRow idList={[6,7,8]}/>

      {/* ROW 4 */}
      <ShopProductRow textTrue={true} text={`50% of all profits are reinvested into rebuilding the self worth and independence of vulnerable women currently experiencing, or at risk of, homelessness.`} idList={[9, 10]}/>

      {/* ROW 5 */}
      <ShopProductRow idList={[11, 12, 13]}/>
    </div>
  );
};

export default ShopProducts;