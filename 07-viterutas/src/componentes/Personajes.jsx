import Tarjetas from './Tarjetas'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import '../personajes.css'

const Personajes = () => {

    const [ personaje, setPersonaje ] = useState([]); 

    //una función que maneja efectos dentro de los componentes
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(response => setPersonaje(response.results))
        .catch(error => console.log(error))
    },[]);

    const imprimirApi = () => {

        console.log(personaje);

    }


    return (

        <>

        <div className='personaje'>

            <h1 className="text-center mt-5 mb-5">
                Personajes con useEffect
            </h1>

            <Button onClick={ imprimirApi }>
                Imprimir Datos desde la Api
            </Button>


            <Tarjetas characters={ personaje } />

        </div>
        </>
    )
}

export default Personajes;
