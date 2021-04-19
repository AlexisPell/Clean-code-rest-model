import React, { useEffect, useState } from 'react';
import { fetchDevice } from 'src/api/devices';
import { motion } from 'framer-motion';
import { useStore } from 'src/mobx';
import { IDevice } from 'src/typings';
import { observer } from 'mobx-react-lite';
import styles from './device.module.scss';
import { LeftOutlined } from '@ant-design/icons';

const loadDevice = (deviceId: number) => {
  const { deviceStore } = useStore();
  const [device, setDevice] = useState<IDevice>(null);

  const _loadDevice = async (deviceId: number) => {
    const _device = await fetchDevice(deviceId);
    setDevice(_device);
    deviceStore.setFullDevice(_device);
  };

  useEffect(() => {
    _loadDevice(deviceId);
  }, []);

  return { device: deviceStore.device };
};

const initialAnimationState = { x: '100vw', opacity: 0 };
const showFromRight = { x: '0', opacity: 1, transition: { ease: 'easeOut', delay: 0.15 } };
const hideToRight = { x: '100vw', opacity: 0, transition: { ease: 'easeIn' } };

interface DeviceProps {
  deviceId: number;
  setDeviceId: (deviceId: number) => any;
}

const Device: React.FC<DeviceProps> = observer(({ deviceId, setDeviceId }) => {
  const { device } = loadDevice(deviceId);

  const backToDevicesList = () => setDeviceId(null);

  return (
    <div className={styles.deviceSection}>
      <motion.div
        initial={initialAnimationState}
        animate={showFromRight}
        exit={hideToRight}
        className={styles.deviceCard}
      >
        <div className={styles.deviceHeader}>
          <LeftOutlined onClick={() => backToDevicesList()} />
        </div>
        {device && (
          <div className={styles.deviceInfo}>
            <img src={`${process.env.BACKEND}/${device.img}`} alt='device photo' />
            <h3>Name: {device.name}</h3>
            <h4>Price: {device.price}</h4>
            <h5>Rating: {device.rating}</h5>
            <h6>
              Info:{' '}
              {device.info.length &&
                device.info.map((i) => (
                  <div>
                    <strong>{i.title}</strong>
                    {i.description}
                  </div>
                ))}
            </h6>
          </div>
        )}
      </motion.div>
    </div>
  );
});

export default Device;
