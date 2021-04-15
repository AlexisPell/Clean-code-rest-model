import { NextPage } from 'next';

import AuthPage from 'src/pages/auth/authPage';

interface LoginProps {}

const Login: NextPage<LoginProps> = () => {
  return <AuthPage title='Online Consumer | Loggin in' />;
};

export default Login;
