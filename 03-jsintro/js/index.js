

//Variables
var nombre = "Pepe";    // number 
let edad = 15
let apellido = 'Perez'  //cadena de caracteres => string '', " ", ` `
const DNI = 123456789; 
let falso = false
let verdadero = true

//alert('Hola mundo');

/*
console.log('Mi nombre es ' + nombre + ' y mi edad es ' + edad);
console.log("Mi nombre es " + nombre + " y mi edad es " + edad)
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)
*/



console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)

console.log('====================================================');

//operadores matemáticos
// + - * / % ** 

//Operadores relacionales
// == !== < > <= >= ===

//Operadores lógicos
//|| && ! 

let uno = 500
let dos = 800

let resultado = uno + dos

console.log(resultado);

resultado = uno - dos

console.log(resultado);

resultado = uno * dos

console.log(resultado);

resultado = dos / uno

console.log(resultado);

resultado = uno % dos

console.log(resultado);

resultado = 5 ** 3

console.log(resultado);


//contador: paso uno
uno++;
console.log(uno);
uno--;
console.log(uno);

//acumulador
let acumulador = 0;

console.log(acumulador);

acumulador += 500;
console.log(acumulador);

console.log('====================================================');

/* nombre = prompt('Por favor, introduzca su nombre:');

console.log(`Hola ${nombre}, bienvenido a mi página web`);

alert(`Hola ${nombre}, bienvenido a mi página web`) */

console.log('====================================================');

//operadores relacionales

resultado = dos == uno; 
console.log(resultado);

resultado = dos != uno;
console.log(resultado);

resultado = dos >= uno;
console.log(resultado);

resultado = dos <= uno;
console.log(resultado);


console.log('====================================================');

//condicional
let miedad = 18;

if(miedad >= 18){ 
    console.log('El cliente puede comprar bebidas alcohólicas');
}else{
    console.log('El cliente no puede comprar bebidas alcohólicas porque es menor de edad');
}

console.log('====================================================');

let saldo = 100000;
let compra = 7500;
let cliente = 123456789
let persona = 1234568894

//        V                  F
if(saldo >= compra && cliente == persona){//&& => true
    console.log('La compra se ha realizado con éxito');     
}else{
    console.log('No se ha podido realizar la compra por falta de saldo y/o no ese el cliente');
}

console.log('====================================================');

let user = 'pepe';
let password = '123545456546'

//       V                    V                   V
if(user == 'pepe' && password == '123456' && facial == true){//&& => true
    console.log('bienvenido a la app');     
}else{
    console.log('no tienes acceso a la app');
}

console.log('====================================================');

//       V                    F                  F
if(user == 'pepe' || password == '123456' || facial == false){//&& => true
    console.log('bienvenido a la app');     
}else{
    console.log('no tienes acceso a la app');
}

console.log('====================================================');












