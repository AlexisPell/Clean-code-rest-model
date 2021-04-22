import { Input } from 'antd';
import styles from './admin.module.scss';
import { IFormState } from './deviceForm.container';

export function additionalInfoSectionRenderer(
  info: { title: string; description: string }[],
  setFormState: (...any) => void,
  formState: IFormState
) {
  return info.map((i, idx) => (
    <div className={styles.additionalInfoSection}>
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
