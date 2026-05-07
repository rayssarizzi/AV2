import Sidebar from '../components/Sidebar'

function Funcionarios() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='content'>
        <div className='card'>
          <h1 className='title'>Funcionários</h1>

          <input placeholder='Nome' />
          <input placeholder='Telefone' />
          <input placeholder='Endereço' />
          <input placeholder='Usuário' />
          <input type='password' placeholder='Senha' />

          <select>
            <option>Administrador</option>
            <option>Engenheiro</option>
            <option>Operador</option>
          </select>

          <button>Salvar Funcionário</button>
        </div>
      </div>
    </div>
  )
}

export default Funcionarios