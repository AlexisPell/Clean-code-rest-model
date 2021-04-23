import { NextPage } from 'next';

import BasketPage from 'src/pages/basket/index';

interface BasketProps {}

const Basket: NextPage<BasketProps> = () => {
  return <BasketPage title='Online Consumer | Basket' />;
};

export default Basket;
