import React from 'react';
import styles from './admin.module.scss';

import Device from 'src/components/device/device.container';
import { AnimatePresence, motion } from 'framer-motion';

const initialAnimationState = { x: '-100vw', opacity: 0 };
const showFromLeft = { x: '0', opacity: 1, transition: { ease: 'easeOut', delay: 0.15 } };
const hideToLeft = { x: '-100vw', opacity: 0, transition: { ease: 'easeIn' } };

interface DeviceFormProps {
  deviceId?: number;
  setDeviceId?: (...any) => void;
}

// if takes deviceId - shows it info, else - show form to create device
const DeviceForm: React.FC<DeviceFormProps> = ({ deviceId, setDeviceId }) => {
  const form = (
    <motion.div
      initial={initialAnimationState}
      animate={showFromLeft}
      exit={hideToLeft}
      className={styles.deviceForm}
    >
      form to create device
    </motion.div>
  );

  const renderFormOrInfo = () => {
    return (
      <AnimatePresence>
        {!deviceId && form}
        {deviceId && (
          <Device
            deviceId={deviceId}
            setDeviceId={setDeviceId}
            style={{ top: '55%', left: '55%' }}
          />
        )}
      </AnimatePresence>
    );
  };

  return <div className={styles.deviceSection}>{renderFormOrInfo()}</div>;
};

export default DeviceForm;
