
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Formulario = () => {
    //js nativo
    //let nombre = document.getElementById('nombre').value;

    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [ provincia, setProvincia ] = useState('');
    const [ datos, setDatos ] = useState([]);


    const imprimirDatos = () =>{


        console.log(`Datos ingresados en el formulario. ${nombre} - ${apellido} - ${provincia}`)


        //A. Opción 1
        //1. Creamos un objeto de tipo persona para guardar en el arreglo de datos
/*         const persona = {
            nombre: nombre,
            apellido:apellido,
            provincia: provincia
        }  */

        //2. Cargamos el objeto de tipo persona para guardar en el arreglo de datos
        //setDatos([...datos, persona])
        
        //3. Gardamos el array de datos en el localstorage
        //window.localStorage.setItem('datos', JSON.stringify(datos));


        //B. Opción 2
        //1. Cargamos el arreglo de objetos con los datos de la persona
        setDatos([...datos, { nombre, apellido, provincia }])

        //2. Cargamos el arreglo en el localstorage
        setTimeout(() => {
            window.localStorage.setItem('datos', JSON.stringify(datos));
        }, 1000);

        //Mostrar datos al user
        alert(`Datos ingresados en el formulario: ${nombre} - ${apellido} - ${provincia}`);

        limpiarDatos();

    }

    function limpiarDatos() {
        setNombre('');
        setApellido('');
        setProvincia('');
    }


    return (

        <>
            <h1 className="text-center mt-5 mb-5">
                Form de Carga de Usuarios
            </h1>

            <div className="container">
                <form id="formLogin">
                    <div className="mb-3">
                        <label className="form-label">Nombre: </label>
                        <input 
                            type="text" 
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
                            type="text" 
                            className="form-control"  
                            value = { apellido }
                            onChange={(e) => setApellido(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Provincia: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value = { provincia }
                            onChange={(e) => setProvincia(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ imprimirDatos } type="button" className="btn btn-success w-50">Cargar Usuarios</button>
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