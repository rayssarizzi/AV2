import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Aeronaves from '../pages/Aeronaves'
import Pecas from '../pages/Pecas'
import Etapas from '../pages/Etapas'
import Funcionarios from '../pages/Funcionarios'
import Testes from '../pages/Testes'
import Relatorios from '../pages/Relatorios'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/aeronaves' element={<Aeronaves />} />
        <Route path='/pecas' element={<Pecas />} />
        <Route path='/etapas' element={<Etapas />} />
        <Route path='/funcionarios' element={<Funcionarios />} />
        <Route path='/testes' element={<Testes />} />
        <Route path='/relatorios' element={<Relatorios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes