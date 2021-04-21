import React from 'react';
import styles from './about.module.scss';
import { motion } from 'framer-motion';
import { sectionInfo } from './about.info';
import { appearFromLeft, appearFromRight } from 'src/styles/animationProps';

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className={`${styles.aboutWrapper}`}>
      {sectionInfo.map(({ title, text }, i) => {
        return (
          <div key={i} className={styles.sectionInfo}>
            <motion.h2
              className={styles.sectionHeader}
              {...appearFromLeft}
              transition={{ delay: 1 + i, duration: 1 }}
            >
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
  );
};

export default AboutSection;
