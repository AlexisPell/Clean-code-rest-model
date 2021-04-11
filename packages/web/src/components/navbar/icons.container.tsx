import { LoginOutlined, LogoutOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React from 'react';
import styles from './navbar.module.scss';

interface IconsProps {}

const Icons: React.FC<IconsProps> = () => {
  return (
    <div className={`${styles.icons}`}>
      <Tooltip title='Go to my stuff'>
        <ShoppingOutlined className='animatedColor' />
      </Tooltip>
      <Tooltip title='Log in'>
        <LoginOutlined className='animatedColor' />
      </Tooltip>
      <Tooltip title='Log out'>
        <LogoutOutlined className='animatedColor' />
      </Tooltip>
      <Tooltip title='Мой профиль'>
        <UserOutlined className='animatedColor' />
      </Tooltip>
    </div>
  );
};

export default Icons;
