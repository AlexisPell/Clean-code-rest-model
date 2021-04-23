import React, { useEffect } from 'react';
import styles from './basket.module.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';
import { useRouter } from 'next/router';
import { getBasket } from 'src/api/basket';
import { checkIfLogged } from 'src/hooks/checkIfLogged';

interface BasketProps {}

const Basket: React.FC<BasketProps> = observer(({}) => {
  checkIfLogged();
  const router = useRouter();
  const { basketStore } = useStore();

  useEffect(() => {
    async function fetchBasket() {
      const basket = await getBasket();
      basketStore.setDevicesToBasket(basket);
    }
    fetchBasket();
    console.log('BASKET: ', basketStore.basket);
  }, []);

  return (
    <section className={`section-container ${styles.basket}`}>
      <h1>User's basket</h1>
    </section>
  );
});

export default Basket;
