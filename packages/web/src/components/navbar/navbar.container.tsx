import { ShopOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import IconsPanel from './icons.container';
import styles from './navbar.module.scss';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <section className={`${styles.container} section-container`}>
      <div className={`${styles.logo} animatedBg`}>
        <ShopOutlined />
        <div>Online Consumer</div>
      </div>
      <div className={`${styles.links}`}>
        <Link href='/'>
          <div className={`animatedBg`}>Shop</div>
        </Link>
        <Link href='/about'>
          <div className={`animatedBg`}>About us</div>
        </Link>
        <Link href='/admin'>
          <div className={`animatedBg`}>Admin panel</div>
        </Link>
      </div>
      <div>
        <IconsPanel />
      </div>
    </section>
  );
};

export default Navbar;
