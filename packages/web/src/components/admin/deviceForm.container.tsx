import { InboxOutlined } from '@ant-design/icons';
import { Button, Input, message, Select, Tooltip, Upload } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Device from 'src/components/device/device.container';
import { useStore } from 'src/mobx';
import styles from './admin.module.scss';
import { additionalInfoSectionRenderer } from './deviceForm.utils';

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
    deviceStore: { brands, types },
  } = useStore();

  const [formState, setFormState] = useState<IFormState>({
    img: null,
    name: '',
    price: 0,
    brandId: null,
    typeId: null,
    info: [{ title: 'title', description: 'descr' }],
  });
  const { img, name, price, brandId, typeId, info } = formState;

  const onChangeFile = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    }
    if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    }
    console.log('🚀 ~ file: deviceForm.container.tsx ~ line 36 ~ onChangeFile ~ info', info);
    setFormState({ ...formState, img: info.file });
    // {
    //  name: 'iphone'
    //  data: <Buffer ff d8 ff e0 .... >
    //  size: number
    //  encoding: '7bit'
    //  tempFilePath: ''
    //  truncated: false,
    //  mimetype: 'image/jpeg'
    //  md5: 'uuid35325sdfsdfgw53'
    //  mv: Function
    // }
  };

  console.log('FORM: ', formState);

  const onChange = (e: any) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const form = (
    <motion.div
      initial={initialAnimationState}
      animate={showFromLeft}
      exit={hideToLeft}
      className={styles.deviceForm}
    >
      <Dragger name='file' onChange={onChangeFile} maxCount={1} className={styles.fileDragger}>
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
        onChange={onChange}
        placeholder='Name of device'
      />
      <Input
        size='large'
        type='number'
        name='price'
        value={price}
        onChange={onChange}
        placeholder='Price of device'
      />
      {additionalInfoSectionRenderer(info, setFormState, formState)}
      <Tooltip title='each device may have unlimited number of descriptions'>
        <Button
          onClick={() =>
            setFormState({ ...formState, info: [...info, { title: '', description: '' }] })
          }
        >
          Add info
        </Button>
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
            style={{ top: '55%', left: '55%' }}
          />
        )}
      </AnimatePresence>
    );
  };
  return <div className={styles.deviceSection}>{renderFormOrInfo()}</div>;
};

export default DeviceForm;
