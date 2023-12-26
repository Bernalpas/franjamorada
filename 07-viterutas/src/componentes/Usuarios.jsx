import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Usuarios() {

    const [usuario, setUsuario] = useState('')
    const [ datos, setDatos ] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        //verificamos si existe una sessión en la app
        if(window.sessionStorage.getItem('usuario')){

            //1. Setea o asigna la sesión del usuario
            setUsuario(usuario);

            //2. Leer los usuarios desde el localstorage
            setDatos(JSON.parse(window.localStorage.getItem('datos')));

            console.log(datos);

        }else{
            alert('Usuario no logueado');
            navigate('*');
        }

    },[]);


    return (

        <>
            <h1 className="text-center mt-5 mb-5">
                Tabla de Usuarios 
            </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Provincia</th>
                    </tr>
                </thead>
                <tbody>

                {datos.map((u, index) => ( 

                    <tr key={index}>
                        <td>{ index + 1 }</td>
                        <td>{ u.nombre }</td>
                        <td>{ u.apellido }</td>
                        <td>{ u.provincia }</td>
                    </tr>

                ))}


                </tbody>
            </Table>
        </>
    );
}

export default Usuarios;