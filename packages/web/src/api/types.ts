import { IType } from 'src/typings/index';
import axios, { AxiosResponse } from 'axios';

export const fetchTypes = async () => {
  try {
    const types: AxiosResponse<IType[]> = await axios.get(`${process.env.BACKEND}/api/type/`);
    return types.data;
  } catch (e) {
    console.log('Error fetching types: ', e);
    return null;
  }
};

// post /api/type/
// delete /api/type/
