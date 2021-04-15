import { NextPage } from 'next';

import AuthPage from 'src/pages/auth/authPage';

interface RegistrationProps {}

const Registration: NextPage<RegistrationProps> = () => {
  return <AuthPage title='Online Consumer | Registration' />;
};

export default Registration;
