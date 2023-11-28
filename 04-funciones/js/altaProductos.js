

console.log('altaProductos.js');

//1. obtenemos el tag al que daremos el evento
let enviarDatos = document.getElementById('enviarDatos');
//                  0
let misProductos = []


//2. Le asigno una escucha del evento que quiero que realice
enviarDatos.addEventListener('click', (e) => {
    
    e.preventDefault();
    //console.log(e);

    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;
    let stockProducto = document.getElementById('stockProducto').value;
    let descripcionProducto = document.getElementById('descripcionProducto').value;

    if(nombreProducto == '' || precioProducto == '' || stockProducto =='' || descripcionProducto == ''){
        alert('Debes completar todos los campos');
        return;
    }else{ 
        cargarDatos(nombreProducto, precioProducto, stockProducto, descripcionProducto);
    }

    borrarDatosForm();
});



const cargarDatos = (nombre, precio, stock, descripcion ) => {

    console.log(`El producto guardado en la database es: ${nombreProducto} ${precioProducto} ${stockProducto} ${descripcionProducto}`);

    let producto = {
        nombre: nombre,
        precio: precio,
        stock: stock,
        descripcion: descripcion
    }

    console.log(producto);

    misProductos.push(producto);

    //setear los datos en el localstorage
    localStorage.setItem('Productos', JSON.stringify(misProductos));

    console.log(misProductos);

    console.log(`La suma de todos los productos es: ${misProductos.length}`);
}

const borrarDatosForm = () => {
    let miFormulario = document.getElementById('miFormulario');
     //limpiamos los inputs de datos
    miFormulario.reset();
}




