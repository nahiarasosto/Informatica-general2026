let mensaje = 'Hola! una pequeña cosa anes de continuar';
alert(mensaje);

let nombre = prompt('¿Cuál es tu nombre?','completá acá');

let titulo = document.querySelector('.principal');
titulo.innerText = 'Bienvenido ' + nombre;

let respuesta = confirm ('Queres personalizar tu bienvenida?');

if(respuesta){
	titulo.style.backgroundColor = 'blue';
	titulo.style.color = 'whites';
}

