import AdminPage from 'src/pages/admin/index';
import { NextPage } from 'next';

import { useStore } from 'src/mobx';
import { IBrand, IDevice, IType } from 'src/typings';

// import { fetchDevices } from 'src/api/devices';
// import { fetchTypes } from 'src/api/types';
// import { fetchBrands } from 'src/api/brands';

interface SsrProps {
  devices: IDevice[];
  brands: IBrand[];
  types: IType[];
}

const Admin: NextPage<SsrProps> = ({ devices, brands, types }) => {
  const { deviceStore } = useStore();

  // deviceStore.setDevices(devices);
  // deviceStore.setTypes(types);
  // deviceStore.setBrands(brands);

  return <AdminPage title='Online Consumer | Shop page' />;
};

export function getStaticProps() {
  const ssrString = 'i m from server';
  return { props: { ssrString } };
}

export default Admin;
