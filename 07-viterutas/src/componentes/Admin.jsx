import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const Admin = () => {

    const [usuario, setUsuario] = useState('')


    const navigate = useNavigate();


    useEffect(() => {

        //verificamos si existe una sessión en la app
        if(window.sessionStorage.getItem('usuario')){
            setUsuario(usuario);
        }else{
            alert('Usuario no logueado');
            navigate('*');
        }

    });



    return (
        <>
            <h1 className="text-center mt-5 mb-5">
                Bienvenido Administrador { usuario}
            </h1>

            <div className="text-center mt-5 mb-5">
                <img 
                    src="https://rincondeladministrador.com/wp-content/uploads/2018/04/manager.jpg" 
                    alt="error en el login" 
                />
            </div>
        </>
    )
}

export default Admin;