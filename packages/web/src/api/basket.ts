import { IDevice } from 'src/typings/index';
import axios, { AxiosResponse } from 'axios';
import { setBearerToken } from 'src/utils/setBearerToken';

export const addDeviceToBasket = async (deviceId: number): Promise<{ msg: string }> => {
  try {
    setBearerToken();
    const res = await axios({
      method: 'post',
      url: `${process.env.BACKEND}/api/basket?deviceId=${deviceId}`,
    });
    return res.data;
  } catch (e) {
    console.log('Error adding device to basket: ', e);
    return null;
  }
};

export const removeDeviceFromBasket = async (deviceId: number): Promise<{ msg: string }> => {
  try {
    setBearerToken();
    const res = await axios({
      method: 'delete',
      url: `${process.env.BACKEND}/api/basket?deviceId=${deviceId}`,
    });
    return res.data;
  } catch (e) {
    console.log('Error adding device to basket: ', e);
    return null;
  }
};

export const getBasket = async (): Promise<IDevice[]> => {
  try {
    setBearerToken();
    const basket: AxiosResponse<IDevice[]> = await axios.get(`${process.env.BACKEND}/api/basket/`);
    return basket.data;
  } catch (e) {
    console.log('Error getting basket: ', e);
    return null;
  }
};
