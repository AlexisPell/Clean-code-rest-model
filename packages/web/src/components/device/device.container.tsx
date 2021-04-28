import { LeftOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import { Button, message, Tooltip } from 'antd';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { addDeviceToBasket } from 'src/api/basket';
import styles from './device.module.scss';
import { deviceRate, loadDevice, renderAdditionalInfo } from './device.utils';
import RateDeviceModal from './rateDeviceModal.container';

interface DeviceProps {
  deviceId: number;
  setDeviceId: (deviceId: number) => any;
  style?: Record<string, any>;
  fadeIn?: boolean;
}

const Device: React.FC<DeviceProps> = observer(({ deviceId, setDeviceId, style, fadeIn }) => {
  const initialAnimationState = { x: '100vw', opacity: 0, display: fadeIn ? 'none' : 'inherit' };
  const showFromRight = {
    x: '0',
    opacity: 1,
    display: fadeIn ? 'block' : 'inherit',
    transition: { ease: 'easeOut', delay: 0.15 },
  };
  const hideToRight = { x: '100vw', opacity: 0, transition: { ease: 'easeIn' } };

  const [rateDeviceModal, setRateDeviceModal] = useState(false);

  const { device } = loadDevice(deviceId);
  const { currentRate, setCurrentRate } = deviceRate({
    deviceId,
    rateDeviceModal,
    setRateDeviceModal,
  });

  const backToDevicesList = () => setDeviceId(null);

  const setDeviceToBasket = (deviceId: number) => {
    addDeviceToBasket(deviceId);
    message.success('Device added to basket');
  };

  const deviceUi = () => (
    <div className={styles.deviceInfo}>
      <div className={styles.imgWrapper}>
        <img src={`${process.env.BACKEND}/${device.img}`} alt='device photo' />
      </div>
      <div className={styles.deviceDescription}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div>{device.name}</div>{' '}
          <Tooltip title='Rate device'>
            <div onClick={() => setRateDeviceModal(true)}>
              {currentRate === 0 ? 'No rates yet ' : `${currentRate} `}
              <StarOutlined style={{ fontSize: 30, color: 'gold', paddingTop: '5px' }} />
            </div>
          </Tooltip>
        </div>
        <div>{device.price} $</div>
        {renderAdditionalInfo(device)}
        <Tooltip title='Add to shopping basket'>
          <Button
            style={{ margin: 'auto', marginTop: '1rem' }}
            onClick={() => setDeviceToBasket(deviceId)}
          >
            <ShoppingCartOutlined />
          </Button>
        </Tooltip>
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
      {rateDeviceModal && (
        <RateDeviceModal
          visible={rateDeviceModal}
          setVisible={setRateDeviceModal}
          deviceId={deviceId}
          setCurrentRate={setCurrentRate}
        />
      )}
    </div>
  );
});

export default Device;
