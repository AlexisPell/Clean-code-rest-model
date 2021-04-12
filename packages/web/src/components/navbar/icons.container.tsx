import { LoginOutlined, LogoutOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { motion } from 'framer-motion';
import React from 'react';
import { onHoverWhiteColor } from 'src/common/animationProps';
import styles from './navbar.module.scss';

interface IconsProps {}

const Icons: React.FC<IconsProps> = () => {
  return (
    <div className={`${styles.icons}`}>
      <Tooltip title='Go to my stuff'>
        <motion.div {...onHoverWhiteColor}>
          <ShoppingOutlined />
        </motion.div>
      </Tooltip>
      <Tooltip title='Log in'>
        <motion.div {...onHoverWhiteColor}>
          <LoginOutlined className='animatedColor' />
        </motion.div>
      </Tooltip>
      <Tooltip title='Log out'>
        <motion.div {...onHoverWhiteColor}>
          <LogoutOutlined className='animatedColor' />
        </motion.div>
      </Tooltip>
      <Tooltip title='Мой профиль'>
        <motion.div {...onHoverWhiteColor}>
          <UserOutlined className='animatedColor' />
        </motion.div>
      </Tooltip>
    </div>
  );
};

export default Icons;
