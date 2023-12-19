
import './App.css'
import Navegacion from './componentes/Navegacion'
import Home from './componentes/Home'
import Error from './componentes/Error'
import Formulario from './componentes/Formulario'
import Personajes from './componentes/Personajes'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navegacion />

      <Routes>
        <Route path='/home' element={ <Home /> }/>
        <Route path='/formulario' element={ <Formulario /> }/>
        <Route path='/personajes' element={ <Personajes /> }/>
        <Route path='*' element={ <Error /> }/>
      </Routes>
    </>
  )
}


export default App
