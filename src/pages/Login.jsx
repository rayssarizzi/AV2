import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  function handleLogin() {
    navigate('/dashboard')
  }

  return (
    <div className='login-page'>
      <div className='login-box'>
        <h1>AEROCODE</h1>

        <input type='text' placeholder='Usuário' />
        <input type='password' placeholder='Senha' />

        <button onClick={handleLogin}>ENTRAR</button>
      </div>
    </div>
  )
}

export default Login