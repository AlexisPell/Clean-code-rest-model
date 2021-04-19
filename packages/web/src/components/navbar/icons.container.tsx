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
        <Link href='/basket'>
          <Tooltip title='Go to my stuff'>
            <motion.div {...onHoverWhiteColor}>
              <ShoppingOutlined />
            </motion.div>
          </Tooltip>
        </Link>
        <Link href='/login'>
          <Tooltip title='Log in'>
            <motion.div {...onHoverWhiteColor}>
              <LoginOutlined />
            </motion.div>
          </Tooltip>
        </Link>
      </>
    );

  if (isAuthorized)
    icons = (
      <>
        <Link href='/basket'>
          <Tooltip title='Go to my stuff'>
            <motion.div {...onHoverWhiteColor}>
              <ShoppingOutlined />
            </motion.div>
          </Tooltip>
        </Link>
        <Link href='/'>
          <Tooltip title='My profile'>
            <motion.div {...onHoverWhiteColor}>
              <UserOutlined />
            </motion.div>
          </Tooltip>
        </Link>
        <Link href='/'>
          <Tooltip title='Log out'>
            <motion.div {...onHoverWhiteColor}>
              <LogoutOutlined />
            </motion.div>
          </Tooltip>
        </Link>
      </>
    );

  return <div className={`${styles.icons}`}>{icons}</div>;
};

export default Icons;
