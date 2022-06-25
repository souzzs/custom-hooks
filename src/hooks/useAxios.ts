import { AxiosResponse } from 'axios'
import React from 'react'

// Recebe uma promise do Axios e sua tipagem
const useAxios = <T>(promiseAxios: Promise<AxiosResponse<T>>) => {
    const [data, setData] = React.useState<null | T>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<null | string>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null);
                
                const response = await promiseAxios;
                setData(response.data);
                setError(null);
            } catch (error) {
                setData(null);
                setError(JSON.stringify(error));
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {data, loading, error}
}

export default useAxios