import ShopPage from 'src/pages/shop/index';
import { GetServerSideProps, NextPage } from 'next';
import { getDevices } from 'src/api/devices';
import { IDevice } from 'src/typings';

interface SsrProps {
  devices: IDevice[];
}

const Shop: NextPage<SsrProps> = ({ devices }) => {
  return <ShopPage title='Online Devices Shop ODS' devices={devices} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const devices = await getDevices();
  return {
    props: { devices },
  };
};

export default Shop;
