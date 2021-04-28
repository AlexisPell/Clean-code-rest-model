import React, { useEffect } from 'react';
import styles from './shop.module.scss';
import { IBrand, IType } from 'src/typings';
import { useStore } from 'src/mobx';
import { fetchDevices } from 'src/api/devices';
import { Button, Tooltip } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const handlePagination = () => {
  const {
    deviceStore: { brand, type, setDevices },
    paginationStore: { totalCountItems, pageLimit, page, setPage, setTotalCount },
  } = useStore();

  useEffect(() => {
    const paginateDevicesFromServer = async () => {
      const { count, rows } = await fetchDevices(type?.id, brand?.id, page, pageLimit);
      setDevices(rows);
      setTotalCount(count);
    };
    paginateDevicesFromServer();
  }, [page, type, brand, pageLimit]);

  return { totalCountItems, pageLimit, page, setPage, brand, type };
};

export const devicesList = (
  openDeviceInfo: (deviceId: number) => void,
  setDeviceToBasket: (deviceId: number) => void
) => {
  const {
    deviceStore: { devices },
  } = useStore();

  if (!devices.length) return <h1>No devices satisfy chosen filters</h1>;

  if (devices.length)
    return devices.map((device) => (
      <div key={device.id} className={styles.device} onClick={() => openDeviceInfo(device.id)}>
        <div className={styles.deviceImg}>
          <img src={`${process.env.BACKEND}/${device.img}`} alt='device photo' />
        </div>
        <div className={styles.deviceInfo}>
          <div>
            <span>{device.name}</span>
            <span>{device.price}$</span>
          </div>
          <div className={styles.addDeviceIcon}>
            <Tooltip title='Add to shopping basket'>
              <Button
                className={styles.addDeviceIcon}
                onClick={(e) => {
                  e.stopPropagation();
                  setDeviceToBasket(device.id);
                }}
              >
                <ShoppingCartOutlined />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    ));
};

export const header = (
  brand: Partial<IBrand>,
  type: Partial<IType>,
  singleDeviceHeader?: string
) => {
  let text;
  if (singleDeviceHeader) {
    return <h1 style={{ marginLeft: '1rem', fontSize: '20px' }}>{singleDeviceHeader}</h1>;
  }
  if (brand && !type)
    text = (
      <>
        Chosen brand is <strong>{brand.name}</strong> in all types
      </>
    );
  if (!brand && type)
    text = (
      <>
        Chosen type is <strong>{type.name}</strong> in all brands
      </>
    );
  if (brand && type)
    text = (
      <>
        Chosen brand is{' '}
        <strong>
          <i>{brand.name}</i>
        </strong>{' '}
        and chosen type is <strong>{type.name}</strong>
      </>
    );
  if (!brand && !type) text = <>No search filters applied</>;
  return <h1 className={styles.searchResultText}>{text}</h1>;
};

export const hideToLeft = {
  x: '-100vw',
  height: 0,
  display: 'none',
  opacity: 0,
  transition: { ease: 'easeIn' },
};

export const showFromLeft = {
  x: '0',
  height: 'calc(100% - 26px)',
  display: 'flex',
  opacity: 1,
  transition: { ease: 'easeOut', delay: 0.15 },
};
