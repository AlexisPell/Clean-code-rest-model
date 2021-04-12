import React, { useState } from 'react';
import styles from './searchList.module.scss';
import { motion } from 'framer-motion';
import { RightCircleOutlined } from '@ant-design/icons';
import { fadeIn } from 'src/common/animationProps';

interface SearchListProps {}

const SearchList: React.FC<SearchListProps> = () => {
  const [tabsState, setTabsState] = useState({
    types: true,
    brands: true,
  });

  return (
    <motion.div {...fadeIn} className={styles.searchListContainer}>
      <motion.div className={styles.sectionTitle}>
        <RightCircleOutlined />
        <strong>Types</strong>
      </motion.div>
      <motion.div className={styles.sectionTitle}>
        <RightCircleOutlined />
        <strong>Brands</strong>
      </motion.div>
    </motion.div>
  );
};

export default SearchList;
