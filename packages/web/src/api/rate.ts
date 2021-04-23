import axios from 'axios';
import { setBearerToken } from 'src/utils/setBearerToken';

export const getRateForDevice = async (deviceId: number): Promise<{ rate: number }> => {
  try {
    const res = await axios({
      method: 'get',
      url: `${process.env.BACKEND}/api/rate?deviceId=${deviceId}`,
    });
    return res.data;
  } catch (e) {
    console.log('Error fetching device rate: ', e);
    return null;
  }
};

export const rateDevice = async (
  deviceId: number,
  rate: number
): Promise<{ msg: string; rate: number }> => {
  if (rate < 0 || rate > 10) return;
  try {
    setBearerToken();
    const res = await axios({
      method: 'post',
      url: `${process.env.BACKEND}/api/basket?deviceId=${deviceId}`,
      data: { rate },
    });
    return res.data;
  } catch (e) {
    console.log('Error rating device: ', e);
    return null;
  }
};
