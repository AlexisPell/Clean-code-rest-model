import React from 'react';
import styles from './shop.module.scss';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';
import { Card, List } from 'antd';

const { Meta } = Card;

import { IDevice } from 'src/typings';

interface ShopProps {}

const Shop: React.FC<ShopProps> = observer(() => {
  const { deviceStore } = useStore();

  console.log('device store', deviceStore);
  return (
    <section className={styles.shop}>
      <div className={styles.shopGrid}>
        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }}
          dataSource={deviceStore.devices}
          renderItem={(d) => (
            <>
              <List.Item>
                <Card
                  className={styles.device}
                  hoverable
                  style={{ width: '240px', margin: 'auto' }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  title: {d.name} description: {d.info}
                </Card>
              </List.Item>
              <List.Item>
                <Card
                  className={styles.device}
                  hoverable
                  style={{ width: '240px', margin: 'auto' }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  title: {d.name} description: {d.info}
                </Card>
              </List.Item>
              <List.Item>
                <Card
                  className={styles.device}
                  hoverable
                  style={{ width: '240px', margin: 'auto' }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  title: {d.name} description: {d.info}
                </Card>
              </List.Item>
            </>
          )}
        />
      </div>
    </section>
  );
});

export default Shop;
