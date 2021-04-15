import React from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tooltip } from 'antd';
import { LoginOutlined, LogoutOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { onHoverWhiteColor } from 'src/common/animationProps';
import { useStore } from 'src/mobx/index';

interface IconsProps {}

const Icons: React.FC<IconsProps> = () => {
  const { userStore } = useStore();
  let { isAuthorized } = userStore;

  let icons;

  if (!isAuthorized)
    icons = (
      <>
        <Tooltip title='Go to my stuff'>
          <Link href='/basket'>
            <motion.div {...onHoverWhiteColor}>
              <ShoppingOutlined />
            </motion.div>
          </Link>
        </Tooltip>
        <Tooltip title='Log in'>
          <Link href='/login'>
            <motion.div {...onHoverWhiteColor}>
              <LoginOutlined />
            </motion.div>
          </Link>
        </Tooltip>
      </>
    );

  if (isAuthorized)
    icons = (
      <>
        <Tooltip title='Go to my stuff'>
          <Link href='/basket'>
            <motion.div {...onHoverWhiteColor}>
              <ShoppingOutlined />
            </motion.div>
          </Link>
        </Tooltip>
        <Tooltip title='My profile'>
          <Link href='/'>
            <motion.div {...onHoverWhiteColor}>
              <UserOutlined />
            </motion.div>
          </Link>
        </Tooltip>
        <Tooltip title='Log out'>
          <Link href='/'>
            <motion.div {...onHoverWhiteColor}>
              <LogoutOutlined />
            </motion.div>
          </Link>
        </Tooltip>
      </>
    );

  return <div className={`${styles.icons}`}>{icons}</div>;
};

export default Icons;
