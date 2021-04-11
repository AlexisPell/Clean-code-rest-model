import React from 'react';
import Head from 'next/head';

import Navbar from 'src/components/navbar/index';
import Shop from 'src/components/shop/index';
import { IDevice } from 'src/typings';

interface ShopPageSsrProps {
  title: string;
  devices: IDevice[];
}

const ShopPage: React.FC<ShopPageSsrProps> = ({ title, devices }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='page-container'>
        <Navbar />
        <Shop devices={devices} />
      </div>
    </>
  );
};

export default ShopPage;
