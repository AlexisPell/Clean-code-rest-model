import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from './404.module.scss';

import Navbar from 'src/components/navbar/index';

interface NotFoundProps {}

const Shop: React.FC<NotFoundProps> = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Потребитель | Страница не найдена</title>
      </Head>
      <section className='page-container'>
        <Navbar />
        <div className={`${styles.notFound} section-container`}>
          <h1>Страница не найдена... Возможно, это мы тут случайно все поломали :)</h1>
          <a onClick={() => router.replace('/')}>Домой</a>
        </div>
      </section>
    </>
  );
};

export default Shop;
