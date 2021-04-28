import React, { useState } from 'react';
import styles from './basket.module.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';
import { deleteDeviceFromBasket, getBasket } from 'src/api/basket';
import { checkIfLogged } from 'src/hooks/checkIfLogged';
import { Button, message, Tooltip } from 'antd';
import { CaretDownOutlined, CaretUpOutlined, DeleteOutlined } from '@ant-design/icons';
import { List } from 'antd';
import ConfirmationModal from './confirmationModal.container';
import { getDevicesList } from './basket.utils';

interface BasketProps {}

const Basket: React.FC<BasketProps> = observer(() => {
  checkIfLogged();
  const { basketDevices } = getDevicesList();
  const {
    basketStore: {
      addOneToCurrentDevice,
      removeOneFromCurrentDevice,
      removeDeviceFromBasket,
      totalPrice,
    },
  } = useStore();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <section className={`section-container ${styles.basket}`}>
      <List
        className={styles.basketDevices}
        size='large'
        itemLayout='horizontal'
        dataSource={basketDevices}
        header={
          <div style={{ textAlign: 'center', fontSize: '22px' }}>
            Total price of devices: ${totalPrice}
          </div>
        }
        footer={
          <div className={styles.footer}>
            <Button onClick={() => setModalVisible(true)}>Create an order</Button>
          </div>
        }
        renderItem={(d) => (
          <List.Item
            className={styles.basketDevice}
            actions={[
              <div style={{ marginRight: '1rem' }}>{d.price * d.numOfDevices}</div>,
              <Tooltip title='Remove one device from basket'>
                <CaretDownOutlined onClick={() => removeOneFromCurrentDevice(d.id)} />
              </Tooltip>,
              <span>{d.numOfDevices} </span>,
              <Tooltip title='Add one more device to basket'>
                <CaretUpOutlined onClick={() => addOneToCurrentDevice(d.id)} />
              </Tooltip>,
              <Tooltip title='Remove device from basket'>
                <DeleteOutlined
                  style={{ marginLeft: '1rem' }}
                  onClick={() => {
                    removeDeviceFromBasket(d.id);
                    deleteDeviceFromBasket(d.id);
                    message.success('Device was deleted from basket');
                  }}
                />
              </Tooltip>,
            ]}
          >
            <div>{d.name}</div>
          </List.Item>
        )}
      />
      {modalVisible && <ConfirmationModal visible={modalVisible} setVisible={setModalVisible} />}
    </section>
  );
});

export default Basket;
