import { InboxOutlined } from '@ant-design/icons';
import { Button, Input, Select, Tooltip, Upload } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Device from 'src/components/device/device.container';
import { useStore } from 'src/mobx';
import styles from './admin.module.scss';
import { additionalInfoSectionRenderer, saveDevice, setFileToForm } from './deviceForm.utils';

const { Option } = Select;
const { Dragger } = Upload;

const initialAnimationState = { x: '-100vw', opacity: 0 };
const showFromLeft = { x: '0', opacity: 1, transition: { ease: 'easeOut', delay: 0.15 } };
const hideToLeft = { x: '-100vw', opacity: 0, transition: { ease: 'easeIn' } };

interface DeviceFormProps {
  deviceId?: number;
  setDeviceId?: (...any) => void;
}
export interface IFormState {
  img: any;
  name: string;
  price: number;
  brandId: any;
  typeId: any;
  info: { title: string; description: string }[];
}

// if takes deviceId - shows it info, else - shows form to create new device
const DeviceForm: React.FC<DeviceFormProps> = ({ deviceId, setDeviceId }) => {
  const {
    deviceStore: { brands, types, addDevice },
  } = useStore();

  const [formState, setFormState] = useState<IFormState>({
    img: null,
    name: '',
    price: 100000,
    brandId: null,
    typeId: null,
    info: [{ title: '', description: '' }],
  });
  const { name, price, info } = formState;

  const onChangeInput = (e: any) => setFormState({ ...formState, [e.target.name]: e.target.value });
  const onChangeFile = setFileToForm(setFormState, formState);
  const createNewDevice = saveDevice(addDevice, setDeviceId);

  const form = (
    <motion.div
      initial={initialAnimationState}
      animate={showFromLeft}
      exit={hideToLeft}
      className={styles.deviceForm}
    >
      <Dragger
        // beforeUpload={() => false}
        name='file'
        onChange={onChangeFile}
        maxCount={1}
        className={styles.fileDragger}
      >
        <InboxOutlined style={{ fontSize: '50px', color: '#4fa9fc' }} />
        <p style={{ fontSize: '24px' }}>Click or drag file to this area to upload image</p>
      </Dragger>
      <div className={styles.selects}>
        <Select
          placeholder='types'
          size='large'
          allowClear={false}
          style={{ width: 190 }}
          onChange={(typeId) => setFormState({ ...formState, typeId })}
        >
          {types.map((t) => (
            <Option key={t.id} value={t.id}>
              {t.name}
            </Option>
          ))}
        </Select>
        <Select
          placeholder='brands'
          size='large'
          allowClear={false}
          style={{ width: 190 }}
          onChange={(brandId) => setFormState({ ...formState, brandId })}
        >
          {brands.map((b) => (
            <Option key={b.id} value={b.id}>
              {b.name}
            </Option>
          ))}
        </Select>
      </div>
      <Input
        size='large'
        type='text'
        name='name'
        value={name}
        onChange={onChangeInput}
        placeholder='Name of device'
      />
      <Input
        size='large'
        type='number'
        name='price'
        value={price}
        onChange={onChangeInput}
        placeholder='Price of device'
      />
      {additionalInfoSectionRenderer(info, setFormState, formState)}
      <Tooltip title='each device may have unlimited number of descriptions'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            onClick={() =>
              setFormState({ ...formState, info: [...info, { title: '', description: '' }] })
            }
          >
            Add info
          </Button>
          <Button type='primary' onClick={() => createNewDevice(formState)}>
            Save device
          </Button>
        </div>
      </Tooltip>
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
            style={
              window.innerWidth < 500 ? { top: '45%', left: '50%' } : { top: '55%', left: '55%' }
            }
            fadeIn={window.innerWidth < 500}
          />
        )}
      </AnimatePresence>
    );
  };
  return <div className={styles.deviceSection}>{renderFormOrInfo()}</div>;
};

export default DeviceForm;
