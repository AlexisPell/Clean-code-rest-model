import { message } from 'antd';
import { useEffect } from 'react';
import { useStore } from 'src/mobx';
import { useRouter } from 'next/router';

export const checkIfAdmin = () => {
  const router = useRouter();
  const { userStore } = useStore();

  useEffect(() => {
    if (!userStore.user || userStore.user?.role !== 'ADMIN') {
      message.warning('No access to visit this page');
      router.replace('/');
    }
  }, []);
};
