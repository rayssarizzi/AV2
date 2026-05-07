import Sidebar from '../components/Sidebar'

function Dashboard() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='content'>
        <h1 className='title'>Dashboard</h1>

        <div className='cards-grid'>
          <div className='dashboard-card'>
            <h3>Aeronaves</h3>
            <p>12</p>
          </div>

          <div className='dashboard-card'>
            <h3>Peças em Produção</h3>
            <p>58</p>
          </div>

          <div className='dashboard-card'>
            <h3>Testes Pendentes</h3>
            <p>9</p>
          </div>

          <div className='dashboard-card'>
            <h3>Funcionários Ativos</h3>
            <p>87</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard