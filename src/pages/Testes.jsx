import Sidebar from '../components/Sidebar'

function Testes() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='content'>
        <div className='card'>
          <h1 className='title'>Painel de Testes</h1>

          <table className='table'>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Resultado</th>
                <th>Aeronave</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Elétrico</td>
                <td>Aprovado</td>
                <td>EMB001</td>
              </tr>

              <tr>
                <td>Hidráulico</td>
                <td>Reprovado</td>
                <td>KC390</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Testes