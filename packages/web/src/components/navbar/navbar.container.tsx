import { ShopOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import IconsPanel from './icons.container';
import styles from './navbar.module.scss';
import { motion } from 'framer-motion';
import {
  appearFromLeftWithDelay,
  appearFromRightWithDelay,
  dropFromTop,
  onHoverBGC,
} from 'src/styles/animationProps';
import { useStore } from 'src/mobx/index';
import { observer } from 'mobx-react-lite';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = observer(() => {
  const { userStore } = useStore();

  useEffect(() => {
    userStore.checkUserToken();
  }, []);

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
          <motion.div {...onHoverBGC}>About product</motion.div>
        </Link>
        {userStore.user?.role === 'ADMIN' && (
          <Link href='/admin'>
            <motion.div {...onHoverBGC}>Admin panel</motion.div>
          </Link>
        )}
      </div>
      <motion.div {...appearFromRightWithDelay}>
        <IconsPanel />
      </motion.div>
    </motion.section>
  );
});

export default Navbar;
