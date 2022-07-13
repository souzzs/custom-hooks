import React, { ChangeEvent } from 'react'

// Armazena os tipos de validações.
const dataValidate = {
    email: {
        regex: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        messageError: 'Email inválido.'
    }
}

// Contém os tipos para validar. Para validar apenas se tem algo no input basta passar uma string vazia(''). Para não validar basta passar null
type ValidationTypes  = keyof typeof dataValidate | '' | null;


const useInput = (type: ValidationTypes) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState<string | null>(null);

    // Atualiza o value mediante a mudanças no input. Caso tenha algum erro é chamado novamente a função da validar
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if(error) validate(value);
        setValue(value);
    }

    // Remove o erro quando o usuário clica no input
    const onClick = () => setError(null);

    // Mediante ao tipo passado nos parametros ele faz a validação
    const validate = (v: string) => {
        if(type === null) return true;
        if(!v.length){
            setError('Campo vazio.');
            return false;
        } else if(type != '' && dataValidate[type] && !dataValidate[type].regex.test(v)){
            setError(dataValidate[type].messageError);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    // Retorna o tipo do input baseado no valor passado
    const typeInput = () => {
        if(type === null || type === ''){
            return 'text'
        } else return type;
    }

    return {
        value,
        setValue,
        onChange,
        onClick,
        validateAt: () => validate(value),
        error,
        typeInput
    }
}

export default useInput