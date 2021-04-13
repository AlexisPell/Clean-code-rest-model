import React, { useState } from 'react';
import styles from './searchList.module.scss';
import { motion } from 'framer-motion';
import { useStore } from 'src/mobx/index';

import { Menu } from 'antd';

const { SubMenu } = Menu;

interface SearchListProps {}

const SearchList: React.FC<SearchListProps> = () => {
  const {
    deviceStore: { brands, types },
  } = useStore();

  const [tabsState, setTabsState] = useState({
    types: true,
    brands: true,
  });

  const handleClick = (e) => {
    console.log('click ', e);
  };

  type IListType = 'types' | 'brands';
  const defaultListElement = (list: IListType) => {
    return (
      <Menu.Item key='default'>
        <div>Clear filter</div>
      </Menu.Item>
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <h3>No active filters chosen</h3>
      </div>
      <Menu
        onClick={handleClick}
        style={{ width: 250, background: '#f9b5ff' }}
        defaultOpenKeys={['types', 'brands']}
        mode='vertical'
      >
        <SubMenu key='clearer' title='Clear filters'></SubMenu>
        <SubMenu key='types' title='Device types'>
          {types.map((type) => (
            <Menu.Item key={type.id}>
              <div>{type.name}</div>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key='brands' title='Device brands'>
          {brands.map((brand) => (
            <Menu.Item key={brand.id}>{brand.name}</Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </div>
  );
};

export default SearchList;
