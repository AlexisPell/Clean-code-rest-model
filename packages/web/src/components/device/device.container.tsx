import React, { useEffect } from 'react';
import { useStore } from 'src/mobx';
import styles from './device.module.scss';

interface DeviceProps {
  deviceId: number;
}

const loadDevice = async (deviceId: number) => {
  const {
    deviceStore: { loadDevice, device },
  } = useStore();

  useEffect(() => {
    async function getDevice() {
      const device = await loadDevice(deviceId);
    }
    getDevice();
  }, []);

  return device;
};

const Device: React.FC<DeviceProps> = ({ deviceId }) => {
  // const device = await loadDevice(deviceId)

  const {
    deviceStore: { loadDevice, device },
  } = useStore();

  useEffect(() => {
    async function getDevice() {
      const device = await loadDevice(deviceId);
    }
    getDevice();
  }, []);

  console.log('DEVICE INFO: ', device);

  return <div className={styles.device}>Single device</div>;
};

export default Device;
