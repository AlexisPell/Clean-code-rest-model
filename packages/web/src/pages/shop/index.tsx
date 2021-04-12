import React from 'react';
import Head from 'next/head';
import styles from './shop.module.scss';

import { IBrand, IDevice, IType } from 'src/typings';

import Navbar from 'src/components/navbar/navbar.container';
import SearchList from 'src/components/searchList/searchList.container';
import Shop from 'src/components/shop/shop.container';

interface ShopPageSsrProps {
  title: string;
}

const ShopPage: React.FC<ShopPageSsrProps> = ({ title }) => {
  return (
    <div className='page-container'>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <section className={`section-container ${styles['shop-container']}`}>
        <SearchList />
        <Shop />
      </section>
    </div>
  );
};

export default ShopPage;
