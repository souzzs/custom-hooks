import { AxiosResponseHeaders } from 'axios';
import React from 'react'
import useAxios from '../hooks/useAxios'
import useInput from '../hooks/useInput';
import Input from './Input';

interface Product {
    descricao: string;
    fotos: {
        titulo: string, src: string
    }[];
    id: string;
    nome: string;
    preco: string;
    usuario_id: string;
    vendido: string;
}

type RequestParams<U> = {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
    url: string;
    headers?: AxiosResponseHeaders;
    data?: U;
  }

const Products = () => {
    // O tipo da resposta vai como parametro aqui
    const {request, data, error, loading} = useAxios<Product[]>();

    const showProducts = async () => {
        // A mesma tipagem da response vai aqui
        const params: RequestParams<Product[]> = {
            method: 'GET',
            url: '/produto'
        }

        await request(params);
    }

    return (
        <>
            <button onClick={showProducts}>{loading ? 'Carregando' : 'Listar produtos'}</button>
            {data && 
            <ul>
                {data.map(product => {
                    return (
                        <li key={product.id}>{product.nome}</li>
                    )
                })}
            </ul>}
        </>
    )
}

export default Products