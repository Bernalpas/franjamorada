

function buscarPedidos() {

    alert('Estamos buscando tu pedido')
    
}

const Busqueda = () => {



    return (
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success"  onClick={ buscarPedidos } type="submit">Search</button>
        </form>
    )
}

export default Busqueda;