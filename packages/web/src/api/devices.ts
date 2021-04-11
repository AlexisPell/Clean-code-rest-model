import { IDevice } from 'src/typings/index';
import axios, { AxiosResponse } from 'axios';

export const getDevices = async () => {
  try {
    const devices: AxiosResponse<IDevice[]> = await axios.get(
      `${process.env.BACKEND_URL}/api/device/`
    );
    return devices.data;
  } catch (e) {
    console.log('Error fetching devices: ', e);
    return [];
  }
};
