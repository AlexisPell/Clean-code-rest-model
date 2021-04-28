import React, { useEffect } from 'react';
import Head from 'next/head';

import { fetchDevices } from 'src/api/devices';
import { fetchTypes } from 'src/api/types';
import { fetchBrands } from 'src/api/brands';

import Navbar from 'src/components/navbar/navbar.container';
import AdminPanel from 'src/components/admin/admin.container';
import { useStore } from 'src/mobx';

function fetchItems() {
  const { deviceStore } = useStore();

  useEffect(() => {
    (async () => {
      const { rows: devices } = await fetchDevices();
      const types = await fetchTypes();
      const brands = await fetchBrands();
      deviceStore.setDevices(devices || []);
      deviceStore.setTypes(types || []);
      deviceStore.setBrands(brands || []);
    })();
  }, []);
}

interface AdminPageSsrProps {
  title: string;
}

const AdminPage: React.FC<AdminPageSsrProps> = ({ title }) => {
  fetchItems();

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
