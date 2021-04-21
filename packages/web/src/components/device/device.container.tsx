import React, { useEffect, useState } from 'react';
import { fetchDevice } from 'src/api/devices';
import { motion } from 'framer-motion';
import { useStore } from 'src/mobx';
import { IDevice } from 'src/typings';
import { observer } from 'mobx-react-lite';
import styles from './device.module.scss';
import { LeftOutlined, StarOutlined } from '@ant-design/icons';

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
  }, [deviceId]);

  return { device: deviceStore.device };
};

const initialAnimationState = { x: '100vw', opacity: 0 };
const showFromRight = { x: '0', opacity: 1, transition: { ease: 'easeOut', delay: 0.15 } };
const hideToRight = { x: '100vw', opacity: 0, transition: { ease: 'easeIn' } };

interface DeviceProps {
  deviceId: number;
  setDeviceId: (deviceId: number) => any;
  style?: Record<string, any>;
}

const Device: React.FC<DeviceProps> = observer(({ deviceId, setDeviceId, style }) => {
  const { device } = loadDevice(deviceId);

  const backToDevicesList = () => setDeviceId(null);

  const renderRate = () => {
    if (device.rating === 0)
      return (
        <>
          No rates yet <StarOutlined style={{ fontSize: 30, color: 'gold' }} />
        </>
      );
    return (
      <>
        {device.rating} <StarOutlined style={{ fontSize: 30, color: 'gold' }} />
      </>
    );
  };

  const renderInfo = () => {
    if (!device.info?.length) return <h3>No additional information provided</h3>;
    return device.info.map((i) => (
      <div>
        <h2 style={{ textAlign: 'center' }}>{i.title}:</h2>
        <h3>{i.description}</h3>
      </div>
    ));
  };

  const deviceUi = () => (
    <div className={styles.deviceInfo}>
      <div className={styles.imgWrapper}>
        <img src={`${process.env.BACKEND}/${device.img}`} alt='device photo' />
      </div>
      <div className={styles.deviceDescription}>
        <div className={styles.description}>
          <span>{device.name}</span>
          <span>{device.price} $</span>
        </div>
        <div className={styles.description}>
          <span>Additional info</span>
          <span>{renderRate()}</span>
        </div>
        {renderInfo()}
      </div>
    </div>
  );

  return (
    <div className={styles.deviceSection} style={style}>
      <motion.div
        initial={initialAnimationState}
        animate={showFromRight}
        exit={hideToRight}
        className={styles.deviceCard}
      >
        <div className={styles.deviceHeader}>
          <LeftOutlined onClick={() => backToDevicesList()} />
        </div>
        {device && deviceUi()}
      </motion.div>
    </div>
  );
});

export default Device;
