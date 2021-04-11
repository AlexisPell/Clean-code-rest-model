import React, { useEffect } from 'react';
import { get, set, values } from 'mobx';
import { useStore } from 'src/mobx/StoreProvider';
import { IDevice } from 'src/typings';

interface ShopProps {
  devices: IDevice[];
}

const Shop: React.FC<ShopProps> = ({ devices }) => {
  console.log('DEVICES RECEIVED IN SHOP COMP from ssr: ', devices);
  const {} = useStore();

  return (
    <section className='section-container'>
      <h1>My shop here</h1>
    </section>
  );
};

export default Shop;
