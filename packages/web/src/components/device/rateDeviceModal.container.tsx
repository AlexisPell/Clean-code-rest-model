import { StarOutlined } from '@ant-design/icons';
import { Input, message, Tooltip } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { rateDevice } from 'src/api/rate';
import { useStore } from 'src/mobx';

interface RateDeviceProps {
  deviceId: number;
  visible: boolean;
  setVisible: (...any) => void;
  setCurrentRate: (...any) => void;
}

const RateDeviceModal: React.FC<RateDeviceProps> = ({
  visible,
  setVisible,
  deviceId,
  setCurrentRate,
}) => {
  const {} = useStore();

  const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [rate, setRate] = useState(0);

  const handleOk = async () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const rateCurrentDevice = async (rate: number) => {
    await rateDevice(deviceId, rate);
    setCurrentRate(rate);
    message.success(`Device was rated with ${rate} stars`);
    handleOk();
  };

  return (
    <Modal title={`Rate device`} visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {rates.map((r, i) => (
          <Tooltip title={i + 1}>
            <StarOutlined
              style={{ fontSize: 30, color: 'gold' }}
              onClick={() => rateCurrentDevice(i + 1)}
            />
          </Tooltip>
        ))}
      </div>
    </Modal>
  );
};

export default RateDeviceModal;
