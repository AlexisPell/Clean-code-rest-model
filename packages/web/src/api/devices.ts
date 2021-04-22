import { IDevice } from 'src/typings/index';
import axios, { AxiosResponse } from 'axios';
import { setBearerToken } from 'src/utils/setBearerToken';

export const fetchDevices = async () => {
  try {
    const devices: AxiosResponse<IDevice[]> = await axios.get(`${process.env.BACKEND}/api/device/`);
    return devices.data;
  } catch (e) {
    console.log('Error fetching devices: ', e);
    return null;
  }
};

export const fetchDevice = async (deviceId: number): Promise<IDevice | null> => {
  try {
    const device: AxiosResponse<IDevice> = await axios.get(
      `${process.env.BACKEND}/api/device/${deviceId}`
    );
    return device.data;
  } catch (e) {
    console.log('Error fetching device: ', e);
    return null;
  }
};

type InfoInputObj = {
  title: string;
  description: string;
};
interface CreateDeviceInput {
  name: string;
  price: number;
  brandId?: number;
  typeId?: number;
  img: any;
  info: InfoInputObj[];
}
type CreateDeviceOutput = Omit<CreateDeviceInput, 'info'> & { info: string };
export const createDevice = async (deviceInfo: CreateDeviceInput): Promise<IDevice | null> => {
  try {
    setBearerToken();

    // Stringify info and parse it in backend
    const deviceOutput: CreateDeviceOutput = {
      ...deviceInfo,
      info: JSON.stringify(deviceInfo.info),
    };

    const device: AxiosResponse<IDevice> = await axios({
      method: 'post',
      url: `${process.env.BACKEND}/api/device/`,
      data: deviceOutput,
    });
    return device.data;
  } catch (e) {
    console.log('Error creating device: ', e);
    return null;
  }
};

export const deleteDevice = async (deviceId: number): Promise<{ deleted: boolean }> => {
  try {
    setBearerToken();
    const res = await axios({
      method: 'DELETE',
      url: `${process.env.BACKEND}/api/device/`,
      data: {
        id: deviceId,
      },
    });
    return res.data;
  } catch (e) {
    console.log('Error deleting device: ', e);
    return { deleted: false };
  }
};
