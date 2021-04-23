import React from 'react';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import styles from './device.module.scss';
import { LeftOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import { loadDevice } from './device.utils';
import { Button, message, Tooltip } from 'antd';
import { addDeviceToBasket } from 'src/api/basket';

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

  const setDeviceToBasket = (deviceId: number) => {
    addDeviceToBasket(deviceId);
    message.success('Device added to basket');
  };

  const renderAdditionalInfo = () => {
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

  const deviceUi = () => (
    <div className={styles.deviceInfo}>
      <div className={styles.imgWrapper}>
        <img src={`${process.env.BACKEND}/${device.img}`} alt='device photo' />
      </div>
      <div className={styles.deviceDescription}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div>{device.name}</div>{' '}
          <div>
            {device.rating === 0 ? 'No rates yet ' : device.rating}
            <StarOutlined style={{ fontSize: 30, color: 'gold' }} />
          </div>
        </div>
        <div>{device.price} $</div>
        {renderAdditionalInfo()}
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
    </div>
  );
});

export default Device;
