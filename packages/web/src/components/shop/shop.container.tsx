import React, { useEffect, useState } from 'react';
import styles from './shop.module.scss';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';
import { Pagination } from 'antd';

import { header } from './shop.utils';
import DeviceInfo from 'src/components/device/device.container';

interface ShopProps {}

const hideToLeft = {
  x: '-100vw',
  height: 0,
  display: 'none',
  opacity: 0,
  transition: { ease: 'easeIn' },
};
const showFromLeft = {
  x: '0',
  height: '100%',
  display: 'block',
  opacity: 1,
  transition: { ease: 'easeOut', delay: 0.15 },
};

const Shop: React.FC<ShopProps> = observer(() => {
  const {
    deviceStore: { devices, brand, type },
  } = useStore();

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

  return (
    <section className={styles.shop}>
      <div>{header(brand, type)}</div>
      <motion.div animate={listAnimations} className={chosenDevice ? null : styles.devicesList}>
        {devices.map((device) => (
          <div key={device.id} className={styles.device} onClick={() => openDeviceInfo(device.id)}>
            <div className={styles.deviceImg}>
              <img src={`${process.env.BACKEND}/${device.img}`} alt='device photo' />
            </div>
            <div className={styles.deviceInfo}>
              <span>{device.name}</span>
              <span>{device.price}$</span>
            </div>
          </div>
        ))}
        <Pagination defaultCurrent={1} total={50} />
      </motion.div>
      <AnimatePresence>
        {chosenDevice && <DeviceInfo deviceId={chosenDevice} setDeviceId={closeDeviceInfo} />}
      </AnimatePresence>
    </section>
  );
});

export default Shop;
