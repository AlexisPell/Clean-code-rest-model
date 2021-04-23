import { Input, message } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { createDevice } from 'src/api/devices';
import { IDevice } from 'src/typings';
import styles from './admin.module.scss';
import { IFormState } from './deviceForm.container';

export function saveDevice(
  addDevice: (device: IDevice) => void,
  setDeviceId: (...any: any) => void
) {
  return async (formState: IFormState) => {
    const { error, validatedForm } = validateFormState(formState);
    if (error) return;
    const { img, name, price, brandId, typeId, info } = validatedForm;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', img);
    formData.append('brandId', brandId);
    formData.append('typeId', typeId);
    formData.append('info', JSON.stringify(info));

    const newDevice = await createDevice(formData);
    message.success(`Device ${newDevice.name} was successfully added`);
    addDevice(newDevice);
    setDeviceId(newDevice.id);
  };
}

export function setFileToForm(
  setFormState: React.Dispatch<React.SetStateAction<IFormState>>,
  formState: IFormState
) {
  return (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    }
    if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    }
    setFormState({ ...formState, img: info.file.originFileObj });
  };
}

export function additionalInfoSectionRenderer(
  info: { title: string; description: string }[],
  setFormState: (...any) => void,
  formState: IFormState
) {
  return info.map((i, idx) => (
    <div key={idx} className={styles.additionalInfoSection}>
      <Input
        size='large'
        type='text'
        name='title'
        value={i.title}
        onChange={(e) => {
          const newInfo = [...info];
          newInfo[idx].title = e.target.value;
          setFormState({
            ...formState,
            info: newInfo,
          });
        }}
        placeholder='Title'
      />
      <Input
        size='large'
        type='text'
        name='description'
        value={i.description}
        onChange={(e) => {
          const newInfo = [...info];
          newInfo[idx].description = e.target.value;
          setFormState({
            ...formState,
            info: newInfo,
          });
        }}
        placeholder='Description'
      />
    </div>
  ));
}

export function validateFormState(formState: IFormState) {
  const { brandId, typeId, img, info, name, price } = formState;
  let error = false;
  if (!brandId || !typeId) {
    error = true;
    message.warning('Device must have type and brand');
  }
  if (!img) {
    error = true;
    message.warning('Everyone loves pictures... add it, please :)');
  }
  if (!name || name.length < 2) {
    error = true;
    message.warning('Invalid name for device');
  }
  if (!price || price < 0) {
    error = true;
    message.warning('Shop makes money selling things, not gifting :)');
  }
  return { validatedForm: formState, error };
}
