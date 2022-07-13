import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const Label = styled.label``;

export const InputStyled = styled.input``;

export const Error = styled.p``;

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    error: string | null;
    value: string;
    validateAt: () => boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

const Input = ({label, error, validateAt, onChange, onClick, value, ...rest}: InputProps) => {
  return (
    <Label>
        {label}
        <InputStyled
            value={value}
            onChange={onChange}
            onClick={onClick}
            onBlur={validateAt}
            {...rest}
        />
        {error ? <Error>{error}</Error> : undefined}
    </Label>
  )
}

export default Input