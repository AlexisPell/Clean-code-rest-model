import React from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { message, Tooltip } from 'antd';
import { LoginOutlined, LogoutOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { onHoverWhiteColor } from 'src/styles/animationProps';
import { useStore } from 'src/mobx/index';
import { observer } from 'mobx-react-lite';

interface IconsProps {}

const Icons: React.FC<IconsProps> = observer(() => {
  const {
    userStore: { isAuthorized, logout, user },
  } = useStore();

  let icons;

  if (!isAuthorized)
    icons = (
      <Link href='/login'>
        <Tooltip title='Log in'>
          <motion.div {...onHoverWhiteColor}>
            <LoginOutlined />
          </motion.div>
        </Tooltip>
      </Link>
    );

  if (isAuthorized)
    icons = (
      <>
        <div>{user.email}</div>
        <Link href='/basket'>
          <Tooltip title='Go to my stuff'>
            <motion.div {...onHoverWhiteColor}>
              <ShoppingOutlined />
            </motion.div>
          </Tooltip>
        </Link>
        <Link href='/'>
          <Tooltip title='Log out'>
            <motion.div {...onHoverWhiteColor}>
              <LogoutOutlined
                onClick={() => {
                  logout();
                  message.success('User session was closed');
                }}
              />
            </motion.div>
          </Tooltip>
        </Link>
      </>
    );

  return <div className={`${styles.icons}`}>{icons}</div>;
});

export default Icons;
