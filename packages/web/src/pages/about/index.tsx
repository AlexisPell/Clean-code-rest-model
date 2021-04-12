import React, { useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import styles from './about.module.scss';

import Navbar from 'src/components/navbar/navbar.container';
import {} from 'src/typings';
import { appearFromLeft, appearFromRight } from 'src/common/animationProps';

interface ShopPageSsrProps {
  title: string;
}

const sectionInfo = [
  {
    title: 'Approaches',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, alias?',
  },
  {
    title: 'inspirations',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, vero.',
  },
  {
    title: 'backend',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, vero.',
  },
  {
    title: 'frontend',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, vero.',
  },
];

const textVariants = {
  initial: {},
  hovered: { scaleY: 1.2, transition: { duration: 0.2, ease: 'easeIn' } },
  exit: {
    transition: { ease: 'easeInOut' },
  },
};

const AboutPage: React.FC<ShopPageSsrProps> = ({ title }) => {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className='page-container'>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />

      <section className={`title-container ${styles.aboutWrapper}`}>
        {sectionInfo.map(({ title, text }, i) => {
          return (
            <div key={i} className={styles.sectionInfo}>
              <motion.h2 {...appearFromLeft} transition={{ delay: 1 + i, duration: 1 }}>
                {title}
              </motion.h2>
              <motion.h4
                className={styles.sectionText}
                {...appearFromRight}
                transition={{ delay: 1 + i, duration: 1 }}
              >
                {text}
              </motion.h4>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AboutPage;
