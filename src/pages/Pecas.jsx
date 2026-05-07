import Sidebar from '../components/Sidebar'

function Pecas() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='content'>
        <div className='card'>
          <h1 className='title'>Gestão de Peças</h1>

          <input placeholder='Nome da peça' />

          <select>
            <option>Nacional</option>
            <option>Importada</option>
          </select>

          <input placeholder='Fornecedor' />

          <select>
            <option>Em produção</option>
            <option>Em transporte</option>
            <option>Pronta</option>
          </select>

          <button>Salvar Peça</button>
        </div>
      </div>
    </div>
  )
}

export default Pecas