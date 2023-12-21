
import { Link } from 'react-router-dom';
import Cerrar from './Cerrar';

function Navegacion() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary miClase">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/formulario' class="nav-link" >Formulario</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/personajes' class="nav-link" >Personajes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' class="nav-link" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin' class="nav-link" >Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/usuarios' class="nav-link" >Usuarios</Link>
                            </li>
                        </ul>


                        <Cerrar />

                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navegacion;