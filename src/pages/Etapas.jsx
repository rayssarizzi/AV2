import Sidebar from '../components/Sidebar'

function Etapas() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='content'>
        <h1 className='title'>Etapas de Produção</h1>

        <div className='kanban'>

          <div className='column'>
            <h3>Pendente</h3>

            <div className='task'>
              Montagem da Asa
            </div>

            <div className='task'>
              Instalação do Trem de Pouso
            </div>

            <div className='task'>
              Cabeamento Interno
            </div>

            <div className='task'>
              Preparação da Pintura
            </div>
          </div>

          <div className='column'>
            <h3>Em andamento</h3>

            <div className='task'>
              Sistema Hidráulico
            </div>

            <div className='task'>
              Instalação Elétrica
            </div>

            <div className='task'>
              Integração do Painel
            </div>
          </div>

          <div className='column'>
            <h3>Concluído</h3>

            <div className='task'>
              Estrutura Base
            </div>

            <div className='task'>
              Montagem da Fuselagem
            </div>

            <div className='task'>
              Fixação das Turbinas
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Etapas