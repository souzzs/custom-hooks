import React from 'react'
import useInput from '../hooks/useInput';
import Input from './Input';

function FormExample() {
    const {setValue, typeInput, ...email} = useInput('email');

  return (
    <form>
        <Input 
            placeholder='Email'
            id='email'
            type={typeInput()}
            name='email'
            required
            {...email}
        />
    </form>
  )
}

export default FormExample