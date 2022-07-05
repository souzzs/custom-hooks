import React, { Dispatch, SetStateAction } from 'react'

type Response<U> = [
    U,
    Dispatch<SetStateAction<U>>
]

const useLocalStorage = () => {
    // Converte o valor em JSON e salva no local storage
    const saveLs = (key: string, value: string) => {
        const valueJson = JSON.stringify(value);

        localStorage.setItem(key, valueJson);
    }

    // Caso tenha os dados da chave passada eles são convertidos
    // Caso não tenha será retornado false
    const getLs = (key: string) => {
        try {
            const value = localStorage.getItem(key);
            if(value) return JSON.parse(value);

            return false;
        } catch {
            return false;
        }
    }

    // Toda vez que o estado mudar, seu novo valor será salvo no local storage
    const persistedStateLs = <T>(key: string, initialState: T): Response<T> => {
        const [state, setState] = React.useState(() => {
            const hasValue = localStorage.getItem(key);

            if(hasValue){
                return JSON.parse(hasValue);
            } else {
                return initialState
            }
        });

        React.useEffect(() => {
            localStorage.setItem(key, JSON.stringify(state));
        }, [ key, state ]);


        return [state, setState]
    }

    return {
        saveLs,
        getLs,
        persistedStateLs
    }
}

export default useLocalStorage