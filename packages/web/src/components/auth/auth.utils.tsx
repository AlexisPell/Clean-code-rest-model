import { Input, Form, message } from 'antd';
import Link from 'next/link';
import { ChangeEvent, MutableRefObject, useRef, useState } from 'react';
import styles from './auth.module.scss';

export interface IFormState {
  email: string;
  password: string;
  password2: string;
}
interface IForm {
  isLoggining: boolean;
  sendDataToParent?: (form: IFormState) => void;
}
export const RenderForm: React.FC<IForm> = ({ isLoggining, sendDataToParent }) => {
  const [form, setForm] = useState<IFormState>({
    email: '',
    password: '',
    password2: '',
  });
  const { email, password, password2 } = form;
  const callbackRef: MutableRefObject<IFormState> = useRef(null);

  const handleEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    callbackRef.current = { ...form, [e.target.name]: e.target.value };
    sendDataToParent(callbackRef.current);
  };

  let authorizationForm;

  // Login
  if (isLoggining)
    authorizationForm = (
      <Form>
        <Form.Item
          label={<span style={{ width: '80px', fontSize: '18px' }}>Email</span>}
          rules={[{ required: true, message: 'No email provided :p' }]}
        >
          <Input
            size='large'
            type='email'
            name='email'
            value={email}
            placeholder='Email'
            onChange={handleEvent}
          />
        </Form.Item>
        <Form.Item
          label={<span style={{ width: '80px', fontSize: '18px' }}>Password</span>}
          rules={[{ required: true, message: 'No password provided :p' }]}
        >
          <Input
            size='large'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={handleEvent}
          />
        </Form.Item>
      </Form>
    );
  // Registration
  if (!isLoggining)
    authorizationForm = (
      <Form>
        <Form.Item
          label={<span style={{ width: '80px', fontSize: '18px' }}>Email</span>}
          rules={[{ required: true, message: 'No email provided :p' }]}
        >
          <Input
            size='large'
            name='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={handleEvent}
          />
        </Form.Item>
        <Form.Item
          label={<span style={{ width: '80px', fontSize: '18px' }}>Password</span>}
          rules={[{ required: true, message: 'No password provided :p' }]}
        >
          <Input
            size='large'
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={handleEvent}
          />
        </Form.Item>
        <Form.Item
          label={<span style={{ width: '80px', fontSize: '18px' }}>Confirm</span>}
          rules={[{ required: true, message: 'No password provided :p' }]}
        >
          <Input
            size='large'
            type='password'
            name='password2'
            placeholder='Password'
            value={password2}
            onChange={handleEvent}
          />
        </Form.Item>
      </Form>
    );

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        {isLoggining ? 'Authorization' : 'Registration'}
      </h2>
      {authorizationForm}
    </div>
  );
};

export const RenderLink = ({ isLoggining }: { isLoggining: boolean }) => {
  return (
    <div className={styles.link}>
      <Link href={isLoggining ? '/registration' : '/login'}>
        <a>
          {isLoggining
            ? 'Not registered yet? Create account now'
            : 'Already have an account? Log in now'}
        </a>
      </Link>
    </div>
  );
};

export const validateData = (
  form: Partial<IFormState>,
  isLoggining: boolean
): { form: Partial<IFormState>; errors: string[] } => {
  let errors = [];

  if (!form) errors.push('Form may not be blank');

  if (!form?.email.includes('@')) errors.push('Invalid email, check typings');

  if (form?.password.length < 6) errors.push('Password should be 6 chars at least');

  if (!isLoggining && form?.password !== form?.password2)
    errors.push('Passwords do not match each other :p');

  return { form, errors };
};
