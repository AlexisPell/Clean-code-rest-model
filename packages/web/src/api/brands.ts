import { IBrand } from 'src/typings/index';
import axios, { AxiosResponse } from 'axios';
import { setBearerToken } from 'src/utils/setBearerToken';

export const fetchBrands = async () => {
  try {
    const brands: AxiosResponse<IBrand[]> = await axios.get(`${process.env.BACKEND}/api/brand/`);
    return brands.data;
  } catch (e) {
    console.log('Error fetching brands: ', e);
    return null;
  }
};

export const createBrand = async (name: string): Promise<IBrand> => {
  try {
    setBearerToken();
    const res = await axios({
      method: 'POST',
      url: `${process.env.BACKEND}/api/brand/`,
      // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      data: {
        name,
      },
    });
    return res.data;
  } catch (e) {
    console.log('Error creating brand: ', e);
    return null;
  }
};

export const deleteBrand = async (brandId: number): Promise<{ deleted: boolean }> => {
  try {
    setBearerToken();
    const res = await axios({
      method: 'DELETE',
      url: `${process.env.BACKEND}/api/brand/`,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      data: {
        id: brandId,
      },
    });
    return res.data;
  } catch (e) {
    console.log('Error deleting brand: ', e);
    return { deleted: false };
  }
};
