import Page from './../src/components/Page';
import { useStore } from 'src/mobx/StoreProvider';

import ShopPage from 'src/pages/shop/index';
import { NextPage } from 'next';

interface ShopSSRProps {
  ssrString: string;
}

const Shop: NextPage<ShopSSRProps> = ({ ssrString }) => {
  return <ShopPage title='Online Devices Shop ODS' />;
};

export async function getStaticProps() {
  const ssrString = 'i m from server';
  return { props: { ssrString } };
}

export default Shop;
