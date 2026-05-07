import Sidebar from '../components/Sidebar'

function Relatorios() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='content'>
        <div className='card'>
          <h1 className='title'>Relatório Final</h1>

          <p><strong>Cliente:</strong> Airbus</p>
          <p><strong>Aeronave:</strong> EMB001</p>
          <p><strong>Status:</strong> Pronta para entrega</p>

          <br />

          <ul>
            <li>Todas as etapas concluídas</li>
            <li>Testes aprovados</li>
            <li>Peças instaladas</li>
          </ul>

          <br />

          <button>Exportar PDF</button>
        </div>
      </div>
    </div>
  )
}

export default Relatorios