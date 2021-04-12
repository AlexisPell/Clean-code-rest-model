import ShopPage from 'src/pages/shop/';
import { GetServerSideProps, NextPage } from 'next';
import { useStore } from 'src/mobx/index';

import { fetchDevices } from 'src/api/devices';
import { fetchTypes } from 'src/api/types';
import { fetchBrands } from 'src/api/brands';

import { IBrand, IDevice, IType } from 'src/typings';

interface SsrProps {
  devices: IDevice[];
  brands: IBrand[];
  types: IType[];
}

const Shop: NextPage<SsrProps> = ({ devices, types, brands }) => {
  const { deviceStore } = useStore();

  deviceStore.setDevices(devices);
  deviceStore.setTypes(types);
  deviceStore.setBrands(brands);

  return <ShopPage title='Online Consumer | Shop page' />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const devices = await fetchDevices();
  const types = await fetchTypes();
  const brands = await fetchBrands();

  return {
    props: { devices, types, brands },
  };
};

export default Shop;
