//Mensaje de bienvenida

let mensaje = document.querySelector("#bienvenida");

let respuesta = confirm("¿Deseas personalizar tu bienvenida?");

if (respuesta) {
    let nombre = prompt("Ingresa tu nombre", "aquí");
    if (nombre) {
        mensaje.innerText = "¡Hola, " + nombre + "!";
    }
} else {
    mensaje.innerText = "¡Hola, amante del buen café!";
}

//Dark Mode

let preguntaModoOscuro = document.querySelector("#modo");

let respuestaModoOscuro = confirm("¿Prefieres ver esta página en Modo Oscuro?");

if (respuestaModoOscuro = true) {
    preguntaModoOscuro.style.color = "#f5ebe0";
    preguntaModoOscuro.style.backgroundColor = "#0a0602";
}

//Mensaje de despedida

let mensajeDespedida = document.querySelector("#despedida");

let horario = prompt("¿Que hora es?", "Ingresa un numero de 0 a 23");

if (horario >= 5 && horario <= 13) {
    mensajeDespedida.innerText = "¡Gracias por visitar! Ten un hermoso día!";
} else if (horario >= 13 && horario <= 19) {
    mensajeDespedida.innerText = "¡Gracias por visitar! Ten una linda tarde!";
} else if (horario >= 19 && horario <= 23) {
    mensajeDespedida.innerText = "¡Gracias por visitar! Ten una buena noche, anda a dormir!";
} else {
    mensajeDespedida.innerText = "¡Gracias por visitar!";
}