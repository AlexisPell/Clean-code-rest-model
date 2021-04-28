import { useEffect, useState } from 'react';
import { fetchDevice } from 'src/api/devices';
import { getRateForDevice } from 'src/api/rate';
import { useStore } from 'src/mobx';
import { IDevice } from 'src/typings';

export const loadDevice = (deviceId: number) => {
  const { deviceStore } = useStore();

  const _loadDevice = async (deviceId: number) => {
    const _rate = await getRateForDevice(deviceId);
    console.log('🚀 ~ file: device.utils.tsx ~ line 12 ~ const_loadDevice= ~ _rate', _rate);
    const _device = await fetchDevice(deviceId);
    _device.rating = _rate.rate;
    deviceStore.setFullDevice(_device);
  };

  useEffect(() => {
    _loadDevice(deviceId);
  }, [deviceId]);

  return { device: deviceStore.device };
};

export function deviceRate({ rateDeviceModal, setRateDeviceModal, deviceId }) {
  const [currentRate, setCurrentRate] = useState(0);

  useEffect(() => {
    async function getRating() {
      const { rate } = await getRateForDevice(deviceId);
      console.log('🚀 ~ file: device.container.tsx ~ line 30 ~ getRating ~ rate', rate);
      setCurrentRate(rate);
    }
    getRating();
  }, [rateDeviceModal, setRateDeviceModal]);
  return { currentRate, setCurrentRate };
}

export const renderAdditionalInfo = (device: Partial<IDevice>) => {
  let info;
  if (!device.info?.length) info = <></>;
  if (device.info?.length)
    info = (
      <div
        style={{
          marginTop: '.5rem',
          paddingTop: '.5rem',
          borderTop: '1px solid grey',
          width: '100%',
        }}
      >
        {device.info.map((i) => (
          <div key={i.id} style={{ overflowWrap: 'anywhere' }}>
            <strong>{i.title}: </strong>
            <span>{i.description}</span>
          </div>
        ))}
      </div>
    );
  return info;
};
