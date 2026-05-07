import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate()

  function handleLogout() {
    navigate('/')
  }

  return (
    <div className='sidebar'>

      <h1 className='logo'>AEROCODE</h1>

      <div className='menu'>

        <Link to='/dashboard'>
          Dashboard
        </Link>

        <Link to='/aeronaves'>
          Aeronaves
        </Link>

        <Link to='/pecas'>
          Peças
        </Link>

        <Link to='/etapas'>
          Etapas
        </Link>

        <Link to='/funcionarios'>
          Funcionários
        </Link>

        <Link to='/testes'>
          Testes
        </Link>

        <Link to='/relatorios'>
          Relatórios
        </Link>

      </div>

      <div className='sidebar-footer'>

        <button
          className='logout-btn'
          onClick={handleLogout}
        >
          Sair
        </button>

      </div>
    </div>
  )
}

export default Sidebar