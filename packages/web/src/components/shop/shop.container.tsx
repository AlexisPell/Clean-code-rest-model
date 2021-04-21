import React, { useEffect, useState } from 'react';
import styles from './shop.module.scss';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';

import { header } from './shop.utils';
import DeviceInfo from 'src/components/device/device.container';

interface ShopProps {}

const Shop: React.FC<ShopProps> = observer(() => {
  const {
    deviceStore: { devices, brand, type },
  } = useStore();

  const listAnimations = useAnimation();
  const hideToLeft = { x: '-100vw', opacity: 0, transition: { ease: 'easeIn' } };
  const showFromLeft = { x: '0', opacity: 1, transition: { ease: 'easeOut', delay: 0.15 } };

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
      <motion.div animate={listAnimations} className={styles.devicesList}>
        {devices.map((device) => (
          <div key={device.id} className={styles.device} onClick={() => openDeviceInfo(device.id)}>
            <div className={styles.deviceImg}>
              <img src={`${process.env.BACKEND}/${device.img}`} alt='device photo' />
            </div>
            <div className={styles.deviceInfo}>Device info: {device.name}</div>
          </div>
        ))}
      </motion.div>
      <AnimatePresence>
        {chosenDevice && <DeviceInfo deviceId={chosenDevice} setDeviceId={closeDeviceInfo} />}
      </AnimatePresence>
    </section>
  );
});

export default Shop;
