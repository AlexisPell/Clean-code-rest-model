import React from 'react';
import { Modal } from 'antd';

interface ConfirmationModalProps {
  visible: boolean;
  setVisible: (...any) => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ visible, setVisible }) => {
  const handleOk = async () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal
      title={`Hope you enjoyed my project! Thank you, see you soon`}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <h2>Спасибо! Надеюсь, вам понравился этот проект и его кодовая база. </h2>
      <h2>
        Автор проекта:{' '}
        <a target='_blank' href='github.com/alexispell'>
          Alexis Pell
        </a>
      </h2>
      <h3>
        Сам репозиторий:{' '}
        <a target='_blank' href='https://github.com/AlexisPell/Clean-code-rest-model'>
          Pern-shop
        </a>
      </h3>
    </Modal>
  );
};

export default ConfirmationModal;
