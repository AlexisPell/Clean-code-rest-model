import React from 'react';
import Head from 'next/head';

import Navbar from 'src/components/navbar/index';

interface ShopProps {
  title: string;
}

const Shop: React.FC<ShopProps> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar title={title} />
    </>
  );
};

export default Shop;
