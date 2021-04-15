import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from 'src/components/navbar/navbar.container';
import AdminPanel from 'src/components/admin/admin.container';

interface AdminPageSsrProps {
  title: string;
}

const AdminPage: React.FC<AdminPageSsrProps> = ({ title }) => {
  const router = useRouter();

  return (
    <div className='page-container'>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <AdminPanel />
    </div>
  );
};

export default AdminPage;
