import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PageHeader, Button } from 'antd';

import { UnlockOutlined } from '@ant-design/icons';
import Head from 'next/head';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const router = useRouter();

  return (
    <div className='navbar'>
      <div className='navbar__top'>
        <strong style={{ fontSize: '26px' }}>
          Smart Checkpoint <UnlockOutlined />
        </strong>
        <div>
          <Link href='/about'>
            <a onClick={() => router.push('/about')}>About</a>
          </Link>
        </div>
      </div>
      <PageHeader
        className='navbar__bottom'
        title={title}
        extra={[
          <div className='navbar__buttons'>
            <button key='3' onClick={() => router.push('/persons')}>
              Persons Control
            </button>
            <button onClick={() => router.push('/access-points')}>Access Points</button>
            <button onClick={() => router.push('/plans')}>Floor plans</button>
          </div>,
        ]}
      />
    </div>
  );
};

export default Navbar;
