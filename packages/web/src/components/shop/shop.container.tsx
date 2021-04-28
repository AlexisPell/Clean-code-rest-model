import { message, Pagination, Tooltip } from 'antd';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { addDeviceToBasket } from 'src/api/basket';
import DeviceInfo from 'src/components/device/device.container';
import styles from './shop.module.scss';
import { handlePagination, header, hideToLeft, showFromLeft, devicesList } from './shop.utils';

interface ShopProps {}

const Shop: React.FC<ShopProps> = observer(() => {
  const { totalCountItems, pageLimit, page, setPage, brand, type } = handlePagination();

  const listAnimations = useAnimation();

  const [chosenDevice, setChosenDevice] = useState<null | number>(null);

  const openDeviceInfo = (deviceId: number) => {
    listAnimations.start(hideToLeft);
    setChosenDevice(deviceId);
  };

  const closeDeviceInfo = (deviceId: number) => {
    listAnimations.start(showFromLeft);
    setChosenDevice(deviceId);
  };

  const setDeviceToBasket = (deviceId: number) => {
    addDeviceToBasket(deviceId);
    message.success('Device added to basket');
  };

  return (
    <section className={styles.shop}>
      <div>{header(brand, type)}</div>
      <motion.div animate={listAnimations} className={styles.listAndPagination}>
        <div className={chosenDevice ? null : styles.devicesList}>
          {devicesList(openDeviceInfo, setDeviceToBasket)}
        </div>
        {totalCountItems > pageLimit && (
          <Pagination
            current={page} // current page
            pageSize={pageLimit} // number of data items per page
            total={totalCountItems} // total number of data items
            onChange={(page) => setPage(page)}
            className={styles.pagination}
          />
        )}
      </motion.div>
      <AnimatePresence>
        {chosenDevice && <DeviceInfo deviceId={chosenDevice} setDeviceId={closeDeviceInfo} />}
      </AnimatePresence>
    </section>
  );
});

export default Shop;
