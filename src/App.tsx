import useForm from "./hooks/useForm"

function App() {
  const email = useForm("EMAIL");
  const password = useForm('PASSWORD');
  const cpf = useForm('CPF');
  const cep = useForm('CEP');
  const numero = useForm('NUMERO');

  return (
    <form action="">
      <input type="text" placeholder="Email" value={email.value} onChange={email.onChange} onBlur={email.onBlur}/>
      {email.error && <p className="error">{email.error}</p>}
      <input type="text" placeholder="Password" value={password.value} onChange={password.onChange} onBlur={password.onBlur}/>
      {password.error && <p className="error">{password.error}</p>}
      <input type="text" placeholder="Cpf" value={cpf.value} onChange={cpf.onChange} onBlur={cpf.onBlur}/>
      {cpf.error && <p className="error">{cpf.error}</p>}
      <input type="text" placeholder="Cep" value={cep.value} onChange={cep.onChange} onBlur={cep.onBlur}/>
      {cep.error && <p className="error">{cep.error}</p>}
      <input type="text" placeholder="Numero" value={numero.value} onChange={numero.onChange} onBlur={numero.onBlur}/>
      {numero.error && <p className="error">{numero.error}</p>}
    </form>
  )
}

export default App
