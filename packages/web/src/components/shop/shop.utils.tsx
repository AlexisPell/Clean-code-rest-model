import React from 'react';
import styles from './shop.module.scss';
import { IBrand, IType } from 'src/typings';

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
