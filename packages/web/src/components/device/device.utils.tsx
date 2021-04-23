import { useEffect, useState } from 'react';
import { fetchDevice } from 'src/api/devices';
import { useStore } from 'src/mobx';
import { IDevice } from 'src/typings';

export const loadDevice = (deviceId: number) => {
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
