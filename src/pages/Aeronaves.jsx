import Sidebar from '../components/Sidebar'

function Aeronaves() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='content'>

        <div className='card'>
          <h1 className='title'>Gestão de Aeronaves</h1>

          <input placeholder='Código da Aeronave' />

          <input placeholder='Modelo' />

          <select>
            <option>Comercial</option>
            <option>Militar</option>
          </select>

          <input placeholder='Capacidade de Passageiros' />

          <input placeholder='Alcance de Voo' />

          <button>Salvar Aeronave</button>
        </div>

        <div className='card'>
          <table className='table'>

            <thead>
              <tr>
                <th>Código</th>
                <th>Modelo</th>
                <th>Tipo</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>EMB001</td>
                <td>E190</td>
                <td>Comercial</td>
                <td>Produção</td>
              </tr>

              <tr>
                <td>KC390</td>
                <td>Cargueiro</td>
                <td>Militar</td>
                <td>Testes</td>
              </tr>

              <tr>
                <td>EMB120</td>
                <td>Turbo Hélice</td>
                <td>Comercial</td>
                <td>Finalizada</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  )
}

export default Aeronaves