import React from 'react';
import styles from './admin.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';

interface AuthProps {}

const AdminPanel: React.FC<AuthProps> = observer(({}) => {
  const { deviceStore } = useStore();

  return (
    <section className={`section-container ${styles.auth}`}>
      <h1>Admin section</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </section>
  );
});

export default AdminPanel;
