
console.log('Hola desde tablaProductos.js');

//tomamos el botón para agregarle los eventos
let boton = document.getElementById('mostrarDatos');

//traer los dato del localstorage
let misProductos = localStorage.getItem('Productos');

console.log(misProductos);
console.log(misProductos.length);

//convertir los datos a un objeto
misProductos = JSON.parse(misProductos);

console.log(misProductos);
console.log(misProductos.length);



boton.addEventListener('click', (e) =>{

    e.preventDefault();

    //alert('Mostrar datos');


    let tabla = document.getElementById('miTabla');

    for (let i = 0; i < misProductos.length; i++) {
    
        //creamos la fila
        let fila = document.createElement('tr');

        //creamos 4 celdas
        let celdaNombre = document.createElement('td');
        let celdaPrecio = document.createElement('td');
        let celdaStock = document.createElement('td');
        let celdaDescripcion = document.createElement('td');

        //asignamos los datos a las celdas
        celdaNombre.textContent = misProductos[i].nombre;
        celdaPrecio.textContent = misProductos[i].precio;
        celdaStock.textContent = misProductos[i].stock;
        celdaDescripcion.textContent = misProductos[i].descripcion;

        //agregamos las celdas a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaStock);
        fila.appendChild(celdaDescripcion);

        //agregamos la fila a la tabla
        tabla.appendChild(fila);

    }


});