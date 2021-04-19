import { DeleteOutlined } from '@ant-design/icons';
import styles from './admin.module.scss';

export const itemsList = (brands, types, devices) => (
  <div className={styles.lists}>
    <div className={styles.list}>
      <h3>Categories</h3>
      {types.map((type) => (
        <div
          key={type.id}
          className={`${styles.listItem}`}
          // onClick={() => filter('type', type.id)}
        >
          <div>{type.name}</div>
          <a style={{ marginLeft: 'auto' }}>
            <DeleteOutlined />
          </a>
        </div>
      ))}
    </div>
    <div className={styles.list}>
      <h3>Brands</h3>
      {brands.map((brand) => (
        <div
          key={brand.id}
          className={`${styles.listItem}`}
          // onClick={() => filter('brand', brand.id)}
        >
          <div>{brand.name}</div>
          <DeleteOutlined style={{ marginLeft: 'auto' }} />
        </div>
      ))}
    </div>
    <div className={styles.list}>
      <h3>Devices</h3>
      {devices.map((device) => (
        <div
          key={device.id}
          className={`${styles.listItem}`}
          // onClick={() => filter('type', type.id)}
        >
          <div>{device.name}</div>
          <DeleteOutlined style={{ marginLeft: 'auto' }} />
        </div>
      ))}
    </div>
  </div>
);
