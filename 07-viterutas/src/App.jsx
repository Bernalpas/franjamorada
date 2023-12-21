
import './App.css'
import Navegacion from './componentes/Navegacion'
import Home from './componentes/Home'
import Error from './componentes/Error'
import Formulario from './componentes/Formulario'
import Personajes from './componentes/Personajes'
import Login from './componentes/Login'
import Admin from './componentes/Admin'
import Usuarios from './componentes/Usuarios'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navegacion />

      <Routes>
        <Route path='/home' element={ <Home /> }/>
        <Route path='/formulario' element={ <Formulario /> }/>
        <Route path='/personajes' element={ <Personajes /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/admin' element={ <Admin /> }/>
        <Route path='/usuarios' element={ <Usuarios /> }/>
        <Route path='*' element={ <Error /> }/>
      </Routes>
    </>
  )
}


export default App
