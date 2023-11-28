


let usuario = localStorage.getItem('Admin');

console.log(usuario);

let nombre = document.getElementById('usuario');//h2

console.log(nombre);

nombre.style.textAlign = 'center';
nombre.style.color = 'red';
nombre.innerText = usuario;
/* nombre.innerHTML = `<h1>${nombre.innerHTML}</h1>` */