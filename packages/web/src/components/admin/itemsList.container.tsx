import styles from './admin.module.scss';
import React from 'react';
import { Tooltip, Modal, message } from 'antd';
import { DeleteOutlined, ExclamationCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { deleteBrand } from 'src/api/brands';
import { deleteType } from 'src/api/types';
// import {  } from 'src/api/devices';
import { useStore } from 'src/mobx';
import { IBrand, IDevice, IType } from 'src/typings';
import { deleteDevice } from 'src/api/devices';

interface ItemsListProps {
  deviceId: number;
  setDeviceId: (id: number) => void;
  setModalVisible: (bool: boolean) => void;
  setModalType: (str: 'type' | 'brand') => void;
}

const ItemsList: React.FC<ItemsListProps> = ({
  deviceId,
  setDeviceId,
  setModalType,
  setModalVisible,
}) => {
  const {
    deviceStore: { devices, brands, types, removeBrand, removeType, removeDevice },
  } = useStore();

  const openAddModal = (modalType: 'type' | 'brand') => {
    setModalVisible(true);
    setModalType(modalType);
  };

  const onDelete = (
    category: 'brand' | 'type' | 'device',
    item: Partial<IDevice> | Partial<IType> | Partial<IBrand>
  ) => {
    Modal.confirm({
      title: 'Confirmation dialog',
      icon: <ExclamationCircleOutlined />,
      content: (
        <h3>
          Do you really want to delete {category} {item.name}?
        </h3>
      ),
      okText: 'delete',
      cancelText: 'cancel',
      onOk: () => {
        if (category === 'brand') {
          removeBrand(item.id);
          deleteBrand(item.id);
        }
        if (category === 'type') {
          removeType(item.id);
          deleteType(item.id);
        }
        if (category === 'device') {
          removeDevice(item.id);
          deleteDevice(item.id);
        }
        message.success(`${category} ${item.name} was successfully deleted`);
      },
    });
  };

  return (
    <div className={styles.lists}>
      <div className={styles.list}>
        <h3 className={styles.listItemHeader}>
          Types{' '}
          <Tooltip title='Add a new type' placement='right'>
            <a>
              <PlusCircleOutlined onClick={() => openAddModal('type')} />
            </a>
          </Tooltip>
        </h3>
        {types.map((type) => (
          <div key={type.id} className={`${styles.listItem}`}>
            <div>{type.name}</div>
            <Tooltip title='Delete category' placement='right'>
              <a style={{ marginLeft: 'auto' }}>
                <DeleteOutlined onClick={() => onDelete('type', type)} />
              </a>
            </Tooltip>
          </div>
        ))}
      </div>
      <div className={styles.list}>
        <h3 className={styles.listItemHeader}>
          Brands{' '}
          <Tooltip title='Add a new brand' placement='right'>
            <a>
              <PlusCircleOutlined onClick={() => openAddModal('brand')} />
            </a>
          </Tooltip>
        </h3>
        {brands.map((brand) => (
          <div key={brand.id} className={`${styles.listItem}`}>
            <div>{brand.name}</div>
            <Tooltip title='Delete brand' placement='right'>
              <a style={{ marginLeft: 'auto' }}>
                <DeleteOutlined onClick={() => onDelete('brand', brand)} />
              </a>
            </Tooltip>
          </div>
        ))}
      </div>
      <div className={styles.list}>
        <h3 className={styles.listItemHeader}>Devices</h3>
        {devices.map((device) => (
          <div key={device.id} className={`${styles.listItem}`}>
            <Tooltip title='View device info'>
              <div
                onClick={() => {
                  setDeviceId(device.id);
                }}
                style={{ width: '100%' }}
              >
                {device.name}
              </div>
            </Tooltip>
            <Tooltip title='Delete device' placement='right'>
              <a style={{ marginLeft: 'auto' }}>
                <DeleteOutlined onClick={() => onDelete('device', device)} />
              </a>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
