import { IBrand } from 'src/typings/index';
import axios, { AxiosResponse } from 'axios';

export const fetchBrands = async () => {
  try {
    const brands: AxiosResponse<IBrand[]> = await axios.get(`${process.env.BACKEND}/api/device/`);
    return brands.data;
  } catch (e) {
    console.log('Error fetching brands: ', e);
    return null;
  }
};

// post /api/brand/
// delete /api/brand/
