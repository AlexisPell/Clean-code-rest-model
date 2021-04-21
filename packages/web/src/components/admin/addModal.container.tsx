import { Input, message } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { createBrand } from 'src/api/brands';
import { createType } from 'src/api/types';
import { useStore } from 'src/mobx';

interface ModalProps {
  visible: boolean;
  modal: 'type' | 'brand';
}

interface AddModalProps {
  visible: boolean;
  setVisible: (...any) => void;
  modalType: 'type' | 'brand';
}

const AddModal: React.FC<AddModalProps> = ({ visible, setVisible, modalType }) => {
  const {
    deviceStore: { addType, addBrand },
  } = useStore();

  const [name, setName] = useState('');

  const handleOk = async () => {
    if (name.length < 2)
      return message.warning(`Name of ${modalType} may not be shorter than 3 symbols`);
    if (modalType === 'brand') {
      const newBrand = await createBrand(name);
      addBrand(newBrand);
    }
    if (modalType === 'type') {
      const newType = await createType(name);
      addType(newType);
    }
    message.success(`${modalType} was successfully added`);
    setVisible(false);
  };

  const handleCancel = () => {
    message.warning(`${modalType} was not created`);
    setVisible(false);
  };

  return (
    <Modal title={`Add new ${modalType}`} visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <Input autoFocus name='name' value={name} onChange={(e) => setName(e.target.value)} />
    </Modal>
  );
};

export default AddModal;
