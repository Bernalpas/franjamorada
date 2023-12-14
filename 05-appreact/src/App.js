
import './css/App.css'; //module - ES6
import React from 'react';
import Navegacion from './componentes/Navegacion';
import Footer from './componentes/Footer/Footer'

//(4)
import { Routes, Route } from 'react-router-dom';
import Boton from './componentes/Boton';




function App() {
  //JSX
  
  return (

    <React.Fragment> 

      <>

        <Navegacion />

        <h1 className='text-center mt-5 mb-5'>
          Bienvenido al Componente Principal
        </h1>

        {/* 5 */}
        <Routes>
          <Route path='/boton' element= { <Boton /> } />
        </Routes>
    
    



        <Footer />

      </>
      
      </React.Fragment>

  );

}

export default App;
