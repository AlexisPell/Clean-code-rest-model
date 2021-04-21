import React, { useRef } from 'react';
import styles from './auth.module.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';
import { Button, message } from 'antd';
import { useRouter } from 'next/router';

import { RenderForm, RenderLink, IFormState, validateData } from './auth.utils';
import { login, register } from 'src/api/user';

interface AuthProps {
  isRegistering: boolean;
}

const Auth: React.FC<AuthProps> = observer(({ isRegistering }) => {
  const router = useRouter();
  const { userStore } = useStore();

  const formData = useRef<Partial<IFormState>>(null);

  const getDataFromForm = (_formData: IFormState) => (formData.current = _formData);

  const sendForm = async () => {
    const validatedData = validateData(formData.current, !isRegistering);

    let user;
    if (isRegistering) {
      user = await register(validatedData.email, validatedData.password);
      if (user === null)
        return message.error('User with such email already registered. Please, log in :)');
    }
    if (!isRegistering) {
      user = await login(validatedData.email, validatedData.password);
      if (user === null) return message.warning('Wrong credentials. Please, try again :)');
    }
    userStore.setUser(user);
    userStore.setIsAuth(true);
    router.push('/');
  };

  return (
    <section className={`section-container ${styles.auth}`}>
      <RenderForm isLoggining={!isRegistering} sendDataToParent={getDataFromForm} />
      <RenderLink isLoggining={!isRegistering} />
      <Button
        size='large'
        type='text'
        style={{ marginTop: '2rem' }}
        className={styles.button}
        onClick={() => sendForm()}
      >
        {!isRegistering ? 'Log in your account' : 'Register your account'}
      </Button>
    </section>
  );
});

export default Auth;
