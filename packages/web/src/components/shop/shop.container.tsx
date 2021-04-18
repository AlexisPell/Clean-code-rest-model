import React, { useEffect, useState } from 'react';
import styles from './shop.module.scss';
import { motion, useCycle, useAnimation } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';

import { header } from './shop.utils';
import DeviceInfo from 'src/components/device/device.container';

interface ShopProps {}

const Shop: React.FC<ShopProps> = observer(() => {
  const {
    deviceStore: { devices, brand, type },
  } = useStore();
  const [chosenDevice, setChosenDevice] = useState<null | number>(null);

  const listAnimations = useAnimation();
  const deviceAnimations = useAnimation();
  const hideToLeft = { x: '-100vw', opacity: 0, transition: { ease: 'easeIn' } };
  const showFromRight = { x: '0', opacity: 1, transition: { ease: 'easeOut' } };

  const openDeviceInfo = (deviceId: number) => {
    listAnimations.start(hideToLeft);
    setChosenDevice(deviceId);
  };

  return (
    <section className={styles.shop}>
      <div>{header(brand, type)}</div>
      <motion.div animate={listAnimations} className={styles.devicesList}>
        {devices.map((device) => (
          <div className={styles.device} onClick={() => openDeviceInfo(device.id)}>
            <div className={styles.deviceImg}>
              <img src={`${process.env.BACKEND_URL}/${device.img}`} alt='device photo' />
            </div>
            <div className={styles.deviceInfo}>Device info: {device.name}</div>
          </div>
        ))}
      </motion.div>
      {chosenDevice && <DeviceInfo deviceId={chosenDevice} />}
    </section>
  );
});

export default Shop;
