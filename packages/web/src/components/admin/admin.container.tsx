import React, { useState } from 'react';
import styles from './admin.module.scss';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import DeviceForm from './deviceForm.component';
import { Tooltip } from 'antd';
// import { itemsList } from './itemsList.container';

interface AuthProps {}

const AdminPanel: React.FC<AuthProps> = observer(({}) => {
  const {
    deviceStore: { devices, brands, types },
  } = useStore();

  const [deviceId, setDeviceId] = useState<null | number>(null);

  const itemsList = (brands, types, devices) => (
    <div className={styles.lists}>
      <div className={styles.list}>
        <h3>
          Categories{' '}
          <Tooltip title='Add a new category' placement='right'>
            <a>
              <PlusCircleOutlined />
            </a>
          </Tooltip>
        </h3>
        {types.map((type) => (
          <div
            key={type.id}
            className={`${styles.listItem}`}
            // onClick={() => filter('type', type.id)}
          >
            <div>{type.name}</div>
            <Tooltip title='Delete category' placement='right'>
              <a style={{ marginLeft: 'auto' }}>
                <DeleteOutlined />
              </a>
            </Tooltip>
          </div>
        ))}
      </div>
      <div className={styles.list}>
        <h3>
          Brands{' '}
          <Tooltip title='Add a new brand' placement='right'>
            <a>
              <PlusCircleOutlined />
            </a>
          </Tooltip>
        </h3>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={`${styles.listItem}`}
            // onClick={() => filter('brand', brand.id)}
          >
            <div>{brand.name}</div>
            <Tooltip title='Delete brand' placement='right'>
              <a style={{ marginLeft: 'auto' }}>
                <DeleteOutlined />
              </a>
            </Tooltip>
          </div>
        ))}
      </div>
      <div className={styles.list}>
        <h3>
          Devices{' '}
          <Tooltip title='Add a new device' placement='right'>
            <a>
              <PlusCircleOutlined />
            </a>
          </Tooltip>
        </h3>
        {devices.map((device) => (
          <div
            key={device.id}
            className={`${styles.listItem}`}
            onClick={() => {
              setDeviceId(device.id);
            }}
          >
            <div>{device.name}</div>
            <Tooltip title='Delete device' placement='right'>
              <a style={{ marginLeft: 'auto' }}>
                <DeleteOutlined />
              </a>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className={`section-container ${styles.adminSection}`}>
      {brands && types && devices && itemsList(brands, types, devices)}
      <DeviceForm deviceId={deviceId} setDeviceId={setDeviceId} />
    </section>
  );
});

export default AdminPanel;
