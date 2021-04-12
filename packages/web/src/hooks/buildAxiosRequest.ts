import axios, { AxiosStatic, AxiosRequestConfig } from 'axios';
import { useState, useEffect, useReducer } from 'react';

interface IAxiosResponse<D> {
  data: D | null;
  loading: boolean;
  error: boolean;
  refetchData: () => void;
}

/**
 * HOC buildAxiosRequest
 * @author Alexis Pell
 * @param axiosParams Axios config object
 * @returns returns useHook function, which result is object with data, loading and error params
 */
export const buildAxiosRequest = <D>(axiosConfig: AxiosRequestConfig) => {
  /**
   * useFetch hook
   * @author Alexis Pell
   * @returns { data, loading, error }
   */
  const hookResult = (): IAxiosResponse<D> => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tick, forceUpdate] = useReducer((x) => x + 1, 0);

    const refetchData = () => forceUpdate();

    const fetchData = async () => {
      try {
        setLoading(true);

        const axiosResponse = await axios(axiosConfig);
        console.log('axiosResponse result', axiosResponse);

        setData(axiosResponse);
      } catch (e) {
        console.warn('useAxiosRequest results failed with error:', e);
        setData(null);
        setError({ error: e });
      } finally {
        setLoading(false);
      }
    };

    // case for the first time fetching data
    useEffect(() => {
      fetchData();
    }, []);
    // case for the forced triggering refetching data
    useEffect(() => {
      fetchData();
    }, [tick, forceUpdate]);

    return {
      data,
      loading,
      error,
      refetchData,
    };
  };

  return hookResult;
};
