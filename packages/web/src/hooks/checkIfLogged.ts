import { message } from 'antd';
import { useEffect } from 'react';
import { useStore } from 'src/mobx';
import { useRouter } from 'next/router';

export const checkIfLogged = () => {
  const router = useRouter();
  const { userStore } = useStore();

  useEffect(() => {
    if (!userStore.user) {
      message.warning('Not logged in');
      router.replace('/');
    }
  }, []);
};
