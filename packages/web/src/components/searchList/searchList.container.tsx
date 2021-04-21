import React, { useState } from 'react';
import styles from './searchList.module.scss';
import { useStore } from 'src/mobx/index';
import { setFilter } from './searchList.utils';

interface SearchListProps {}

const SearchList: React.FC<SearchListProps> = () => {
  const {
    deviceStore: { brands, types, findBrand, findType },
  } = useStore();

  // local logic
  const [currentType, setCurrentType] = useState<null | number>(null);
  const [currentBrand, setCurrentBrand] = useState<null | number>(null);

  // handler
  const filter = setFilter(
    currentBrand,
    setCurrentBrand,
    findBrand,
    currentType,
    setCurrentType,
    findType
  );

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
            onClick={() => filter('type', type.id)}
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
            onClick={() => filter('brand', brand.id)}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchList;
