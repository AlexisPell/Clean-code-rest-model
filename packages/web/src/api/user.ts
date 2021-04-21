import { IUser } from './../../../server/src/types/types';
import axios, { AxiosResponse } from 'axios';
import jwtDecode from 'jwt-decode';

export const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
};

export const register = async (email, password): Promise<Partial<IUser>> => {
  try {
    const res: AxiosResponse<{ token: string }> = await axios({
      method: 'post',
      url: `${process.env.BACKEND}/api/user/registration`,
      data: { email, password, role: 'USER' },
    });
    localStorage.setItem('token', res.data.token);
    return jwtDecode(res.data.token);
  } catch (e) {
    console.log(`Register api error: `, e);
    return null;
  }
};

export const login = async (email, password): Promise<Partial<IUser>> => {
  try {
    const res: AxiosResponse<{ token: string }> = await axios({
      method: 'post',
      url: `${process.env.BACKEND}/api/user/login`,
      data: { email, password },
    });
    localStorage.setItem('token', res.data.token);
    return jwtDecode(res.data.token);
  } catch (e) {
    console.log(`Login api error: `, e);
    return null;
  }
};
