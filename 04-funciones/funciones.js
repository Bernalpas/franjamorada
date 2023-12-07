var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

function guardarDatos() {
    let dni = 123456;
    let nombre = "Juan";

    console.log(`Tus datos son: ${dni} ${nombre} y han sido guardados en la database`);
}


function dameResultado(a, b) {
    let resultado = a + b;
    console.log(resultado);
}

let resultado = 5 + 6;

guardarDatos();
dameResultado(5, 6);
dameResultado(10, 89);
dameResultado(20, 91); 

/* 
resultado = 10 + 89;
console.log(resultado);

resultado = 18 + 890;
console.log(resultado); 
*/


//ES5

function login(email, password, facial) {

    let respuesta = ''
    
    if(email == 'pepe@gmail.com' && password == '123456' && facial == true){//&& => true
        
        respuesta = 'bienvenido a la app';
        console.log('1. bienvenido a la app'); 
        //return respuesta;
        

    }else{

        respuesta = 'no tienes acceso a la app';
        //return respuesta;
        console.log('no tienes acceso a la app');
    }


}


login('pepe@gmail.com', '123456', true);
login('pepe@gmail.com', '12545644', true);



//callback
function validacion(token, callback) {

    console.log(`el token es: ${token} y es válido para el acceso a la red`);

    email = 'pepe@gmail.com'
    password = '123456'
    facial = true

    callback(email, password, facial);

    guardarDatos();
    
}

validacion(token, login);

//ES6 => arrow function
const calculoSaldo = function(saldo, compra){
    return saldo - compra;
};

console.log(calculoSaldo(100000, 7500));


const flecha = (saldo, compra) => {
    return saldo - compra;
}

console.log(flecha(100000, 7500));


//DOM
let botonSaludo = document.getElementById('botonSaludo');

console.log(botonSaludo);

botonSaludo.style.background = 'red';

console.log('=======================================================');

let titulo = document.getElementById('titulo');

console.log(titulo);



function saludar(nombre) {
    alert(`Hola ${nombre}`);
    
    titulo.innerHTML = `Hola ${nombre}`;
    titulo.style.color = 'green';
    titulo.style.fontFamily = 'Arial';
    titulo.style.fontSize = '50px';
    
}

