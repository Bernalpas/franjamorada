

const saludar = () => {
    alert('Saludos!!!');
}


const Boton = () => {

    return (


        <div className="text-center mt-5 mb-5">
            <button className="btn btn-danger" onClick={ saludar }>
                    Saludar al Cliente
            </button>
        </div>

    )
}

export default Boton;