import { IDevice } from 'src/typings/index';
import axios, { AxiosResponse } from 'axios';

export const fetchDevices = async () => {
  try {
    const devices: AxiosResponse<IDevice[]> = await axios.get(
      `${process.env.BACKEND_URL}/api/device/`
    );
    return devices.data;
  } catch (e) {
    console.log('Error fetching devices: ', e);
    return null;
  }
};

export const fetchDevice = async (deviceId: number): Promise<IDevice | null> => {
  try {
    const device: AxiosResponse<IDevice> = await axios.get(
      `${process.env.BACKEND_URL}/api/device/${deviceId}`
    );
    return device.data;
  } catch (e) {
    console.log('Error fetching devices: ', e);
    return null;
  }
};

// post /api/device/
// delete /api/device/deviceId
