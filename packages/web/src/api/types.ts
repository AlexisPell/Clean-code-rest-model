import { IType } from 'src/typings/index';
import axios, { AxiosResponse } from 'axios';
import { setBearerToken } from 'src/utils/setBearerToken';

export const fetchTypes = async () => {
  try {
    const types: AxiosResponse<IType[]> = await axios.get(`${process.env.BACKEND}/api/type/`);
    return types.data;
  } catch (e) {
    console.log('Error fetching types: ', e);
    return null;
  }
};

export const createType = async (name: string) => {
  try {
    setBearerToken();
    const res = await axios({
      method: 'POST',
      url: `${process.env.BACKEND}/api/type/`,
      data: {
        name,
      },
    });
    return res.data;
  } catch (e) {
    console.log('Error creating type: ', e);
    return false;
  }
};

export const deleteType = async (typeId: number): Promise<{ deleted: boolean }> => {
  try {
    setBearerToken();
    const res = await axios({
      method: 'DELETE',
      url: `${process.env.BACKEND}/api/type/`,
      data: {
        id: typeId,
      },
    });
    return res.data;
  } catch (e) {
    console.log('Error deleting type: ', e);
    return { deleted: false };
  }
};
