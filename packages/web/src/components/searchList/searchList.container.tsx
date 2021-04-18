import React, { useState } from 'react';
import styles from './searchList.module.scss';
import { useStore } from 'src/mobx/index';

interface SearchListProps {}

const SearchList: React.FC<SearchListProps> = () => {
  const {
    deviceStore: { brands, types, setBrand, setType },
  } = useStore();

  const [currentType, setCurrentType] = useState<null | number>(null);
  const [currentBrand, setCurrentBrand] = useState<null | number>(null);

  const setFilter = (type: 'brand' | 'type', id: number) => {
    if (type === 'brand') {
      if (currentBrand === id) {
        setCurrentBrand(null);
        setBrand(null);
      }
      if (currentBrand !== id) {
        setCurrentBrand(id);
        setBrand(id);
      }
    }
    if (type === 'type') {
      if (currentType === id) {
        setCurrentType(null);
        setType(null);
      }
      if (currentType !== id) {
        setCurrentType(id);
        setType(id);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <h3>Categories</h3>
        {types.map((type) => (
          <div
            key={type.id}
            className={`${styles.listItem}${' '}${
              currentType === type.id ? styles.itemClicked : ''
            }`}
            onClick={() => setFilter('type', type.id)}
          >
            {type.name}
          </div>
        ))}
      </div>
      <div className={styles.list}>
        <h3>Brands</h3>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={`${styles.listItem}${' '}${
              currentBrand === brand.id ? styles.itemClicked : ''
            }`}
            onClick={() => setFilter('brand', brand.id)}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchList;
