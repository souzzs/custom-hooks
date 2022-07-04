import axios, { AxiosResponseHeaders } from 'axios';
import React from 'react'
import api from '../services/api';

type RequestParams<U> = {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
    url: string;
    headers?: AxiosResponseHeaders;
    data?: U;
}

type ResquestError = {
    message: string;
}

const useAxios = <T>() =>  {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<null | string>(null);

    const request = React.useCallback(async (params: RequestParams<T>) => {
        try {
            setData(null);
            setLoading(true);
            setError(null);

            const {data, status} = await api.request<T>(params);

            if(status !== 200) throw new Error();

            setData(data);
        } catch (error) {
            if(axios.isAxiosError(error) && error.response){
                const dataError = error.response.data as ResquestError;
                setError(dataError.message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return {data, loading, error, request}
}

export default useAxios