import { useStore } from 'src/mobx/index';

export const getTypesAndBrands = () => {
  const {
    deviceStore: { brands, types },
  } = useStore();

  return { brands, types };
};
