import React from 'react';
import Head from 'next/head';

import Navbar from 'src/components/navbar/navbar.container';
import About from 'src/components/about/about.container';

interface ShopPageSsrProps {
  title: string;
}

const AboutPage: React.FC<ShopPageSsrProps> = ({ title }) => {
  return (
    <div className='page-container'>
      <Head>
        <title>{title}</title>
      </Head>
      <section className='section-container'>
        <Navbar />
        <About />
      </section>
    </div>
  );
};

export default AboutPage;
