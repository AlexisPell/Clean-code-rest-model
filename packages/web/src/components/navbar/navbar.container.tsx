import { ShopOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import IconsPanel from './icons.container';
import styles from './navbar.module.scss';
import { motion } from 'framer-motion';
import {
  appearFromLeftWithDelay,
  appearFromRightWithDelay,
  dropFromTop,
  onHoverBGC,
} from 'src/common/animationProps';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <motion.section {...dropFromTop} className={`${styles.container}`}>
      <motion.div {...appearFromLeftWithDelay}>
        <motion.div {...onHoverBGC} className={`${styles.logo}`}>
          <ShopOutlined />
          <div>Online Consumer</div>
        </motion.div>
      </motion.div>
      <div className={`${styles.links}`}>
        <Link href='/'>
          <motion.div {...onHoverBGC}>Shop</motion.div>
        </Link>
        <Link href='/about'>
          <motion.div {...onHoverBGC}>About us</motion.div>
        </Link>
        <Link href='/admin'>
          <motion.div {...onHoverBGC}>Admin panel</motion.div>
        </Link>
      </div>
      <motion.div {...appearFromRightWithDelay}>
        <IconsPanel />
      </motion.div>
    </motion.section>
  );
};

export default Navbar;
