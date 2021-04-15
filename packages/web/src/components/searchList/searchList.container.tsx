import React, { useState } from 'react';
import styles from './searchList.module.scss';
import { motion } from 'framer-motion';
import { useStore } from 'src/mobx/index';

import { List } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface SearchListProps {}

const SearchList: React.FC<SearchListProps> = () => {
  const {
    deviceStore: { brands, types },
  } = useStore();
  console.log('🚀 ~ file: searchList.container.tsx ~ line 16 ~ brands, types', brands, types);

  const [tabsState, setTabsState] = useState({
    types: true,
    brands: true,
  });

  const handleClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div className={styles.container}>
      <h3>No active filters chosen</h3>
      <List
        itemLayout='horizontal'
        dataSource={types}
        renderItem={(type) => (
          <List.Item
            actions={[<a key='list-loadmore-edit'>edit</a>, <a key='list-loadmore-more'>more</a>]}
          >
            <div>{type.name}</div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchList;
