import React, { useState } from 'react';
import styles from './admin.module.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/mobx/index';
import DeviceForm from './deviceForm.container';
import AddModal from './addModal.container';
import { checkIfAdmin } from 'src/hooks/checkIfAdmin';
import ItemsList from './itemsList.container';

interface AuthProps {}

const AdminPanel: React.FC<AuthProps> = observer(() => {
  checkIfAdmin();

  const {
    deviceStore: { devices, brands, types },
  } = useStore();

  const [deviceId, setDeviceId] = useState<null | number>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'type' | 'brand'>('type');

  return (
    <section className={`section-container ${styles.adminSection}`}>
      {brands && types && devices && (
        <ItemsList
          deviceId={deviceId}
          setDeviceId={setDeviceId}
          setModalType={setModalType}
          setModalVisible={setModalVisible}
        />
      )}
      <DeviceForm deviceId={deviceId} setDeviceId={setDeviceId} />
      {modalVisible && (
        <AddModal visible={modalVisible} setVisible={setModalVisible} modalType={modalType} />
      )}
    </section>
  );
});

export default AdminPanel;
