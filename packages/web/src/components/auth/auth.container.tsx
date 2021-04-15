import React, { useRef } from 'react';
import styles from './auth.module.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';
import { Button } from 'antd';

import { RenderForm, RenderLink, IFormState, validateData } from './auth.utils';

interface AuthProps {
  isRegistering: boolean;
}

const Auth: React.FC<AuthProps> = observer(({ isRegistering }) => {
  const { deviceStore } = useStore();
  const formData = useRef<Partial<IFormState>>(null);

  const isLoggining = !isRegistering;

  const getDataFromChild = (_formData: IFormState) => (formData.current = _formData);

  const sendForm = () => {
    const validatedData = validateData(formData.current, isLoggining);
  };

  return (
    <section className={`section-container ${styles.auth}`}>
      <RenderForm isLoggining={isLoggining} sendDataToParent={getDataFromChild} />
      <RenderLink isLoggining={isLoggining} />
      <Button size='large' type='text' className={styles.button} onClick={() => sendForm()}>
        {isLoggining ? 'Log in your account' : 'Register your account'}
      </Button>
    </section>
  );
});

export default Auth;
