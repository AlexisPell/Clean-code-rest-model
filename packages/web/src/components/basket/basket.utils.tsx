import { useEffect } from 'react';
import { getBasket } from 'src/api/basket';
import { useStore } from 'src/mobx';

export function getDevicesList() {
  const { basketStore } = useStore();

  useEffect(() => {
    async function fetchBasket() {
      const basket = await getBasket();
      basketStore.setDevicesToBasket(basket);
    }
    fetchBasket();
  }, []);

  return { basketDevices: basketStore.basket };
}
