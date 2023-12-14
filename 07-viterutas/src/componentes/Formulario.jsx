
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Formulario = () => {


    //js nativo
    //let nombre = document.getElementById('nombre').value;

    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [ provincia, setProvincia ] = useState('');


    const imprimirDatos = () =>{
        console.log(`Datos ingresados en el formulario. ${nombre} - ${apellido} - ${provincia}`)
        setNombre('');
        setApellido('');
        setProvincia('');

    }

    function limpiarDatos() {
        setNombre('');
        setApellido('');
        setProvincia('');
    }


    return (

        <>
            <h1 className="text-center mt-5 mb-5">
                Form de Login Admin
            </h1>

            <div className="container">
                <form id="formLogin">
                    <div className="mb-3">
                        <label className="form-label">Nombre: </label>
                        <input 
                            type="email" 
                            className="form-control" 
                            /* id="nombre" */ 
                            value = { nombre }
                            onChange={(e) => setNombre(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido: </label>
                        <input 
                            type="email" 
                            className="form-control"  
                            value = { apellido }
                            onChange={(e) => setApellido(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre: </label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value = { provincia }
                            onChange={(e) => setProvincia(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ imprimirDatos } type="button" className="btn btn-success w-50">Login</button>
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ limpiarDatos } className="btn btn-danger w-75">Reset</button>
                    </div>
                </form>
            </div>

            <Link to="/">
                <h2 className="text-center mt-5 mb-5">
                    Ir a la Página Principal
                </h2>
            </Link>

        </>
    )
}


export default Formulario;