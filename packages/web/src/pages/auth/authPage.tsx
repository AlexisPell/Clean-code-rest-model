import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from 'src/components/navbar/navbar.container';
import Authorization from 'src/components/auth/auth.container';

interface AuthPageSsrProps {
  title: string;
}

const AuthPage: React.FC<AuthPageSsrProps> = ({ title }) => {
  const router = useRouter();

  const isRegistering = router.route === '/registration';

  return (
    <div className='page-container'>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Authorization isRegistering={isRegistering} />
    </div>
  );
};

export default AuthPage;
