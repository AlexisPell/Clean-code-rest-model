import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState, useEffect, useReducer } from 'react';

interface IAxiosResponse<D> {
  res: AxiosResponse<D> | null;
  loading: boolean;
  error: boolean;
  refetchData: () => void;
}

/**
 * HOC buildAxiosRequest
 * @author Alexis Pell
 * @param axiosParams Axios config object
 * @returns returns useHook function, which result is object with res, loading and error params
 */
export const buildAxiosRequest = <D>(axiosConfig: AxiosRequestConfig) => {
  /**
   * useFetch hook
   * @author Alexis Pell
   * @returns { res, loading, error }
   */
  const hookResult = (): IAxiosResponse<D> => {
    const [res, setRes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tick, forceUpdate] = useReducer((x) => x + 1, 0);

    const refetchData = () => forceUpdate();

    const fetchData = async () => {
      try {
        setLoading(true);

        const axiosResponse = await axios(axiosConfig);

        setRes(axiosResponse);
      } catch (e) {
        console.warn('useAxiosRequest results failed with error:', e);
        setRes({ data: 'error' });
        setRes(null);
        setError({ error: e });
      } finally {
        setLoading(false);
      }
    };

    // case for the first time fetching res
    useEffect(() => {
      fetchData();
    }, []);
    // case for the forced triggering refetching data
    useEffect(() => {
      fetchData();
    }, [tick, forceUpdate]);

    return {
      res,
      loading,
      error,
      refetchData,
    };
  };

  return hookResult;
};
