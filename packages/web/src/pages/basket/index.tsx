import React from 'react';
import Head from 'next/head';

import Navbar from 'src/components/navbar/navbar.container';
import Basket from 'src/components/basket/basket.container';

interface BasketPageProps {
  title: string;
}

const BasketPage: React.FC<BasketPageProps> = ({ title }) => {
  return (
    <div className='page-container'>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Basket />
    </div>
  );
};

export default BasketPage;
