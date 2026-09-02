const menu = ['pasta', 'ensalada', 'pollo'];

let botonResultado = document.querySelector("#calculo");
let datoInvitado = document.querySelector("#invitado");
let datoInvitado1 = document.querySelector("#invitado1");
let datoInvitado2 = document.querySelector("#invitado2");
let datoInvitado3 = document.querySelector("#invitado3");
let datoInvitado4 = document.querySelector("#invitado4");
let datoInvitado5 = document.querySelector("#invitado5");
let datoInvitado6 = document.querySelector("#invitado6");
let datoInvitado7 = document.querySelector("#invitado7");
let datoInvitado8 = document.querySelector("#invitado8");
let datoInvitado9 = document.querySelector("#invitado9");
let datoInvitado10 = document.querySelector("#invitado10");
let datoInvitado11 = document.querySelector("#invitado11");

let contenedorResultados = document.querySelector("#resultados");

botonResultado.addEventListener('click', function(){

    let datosCapturados = [];

// Guardando datos
    datosCapturados.push(datoInvitado.value);
    datosCapturados.push(datoInvitado1.value);
    datosCapturados.push(datoInvitado2.value);
    datosCapturados.push(datoInvitado3.value);
    datosCapturados.push(datoInvitado4.value);
    datosCapturados.push(datoInvitado5.value);
    datosCapturados.push(datoInvitado6.value);
    datosCapturados.push(datoInvitado7.value);
    datosCapturados.push(datoInvitado8.value);
    datosCapturados.push(datoInvitado9.value);
    datosCapturados.push(datoInvitado10.value);
    datosCapturados.push(datoInvitado11.value);

    let cantidadPasta = 0;
    let cantidadEnsalada = 0;
    let cantidadPollo = 0;
    let totalInvitados = datosCapturados.length;

//validación

    for (let i = 0; i < datosCapturados.length; i++) {
        let esValido = false; 

        for (let m = 0; m < menu.length; m++) {
            if (datosCapturados[i] === menu[m]) {
                esValido = true; 
            }
        }

        if (esValido === false) {
            alert('Error: completa cada campo unicamente con lo que forma parte del menú');
            return; 
        }

        if (datosCapturados[i] === 'pasta') {
            cantidadPasta++;
        } else if (datosCapturados[i] === 'ensalada') {
            cantidadEnsalada++;
        } else if (datosCapturados[i] === 'pollo') {
            cantidadPollo++;
        }
    }

//porcentajes
    let porcentajePasta = (cantidadPasta / totalInvitados) * 100;
    let porcentajeEnsalada = (cantidadEnsalada / totalInvitados) * 100;
    let porcentajePollo = (cantidadPollo / totalInvitados) * 100;

//menú más elegido

    let maxVotos = cantidadPasta;
    let menuMasElegido = 'pasta';

    if (cantidadEnsalada > maxVotos) {
        maxVotos = cantidadEnsalada;
        menuMasElegido = 'ensalada';
    }
    if (cantidadPollo > maxVotos) {
        maxVotos = cantidadPollo;
        menuMasElegido = 'pollo';
    }

//Resultados

contenedorResultados.innerHTML = 
        "<h3>Resultados de la votación:</h3>" +
        "<ul>" +
            "<li>Porcentaje de invitados que eligieron pasta: " + porcentajePasta + "%</li>" +
            "<li>Porcentaje de invitados que eligieron ensalada: " + porcentajeEnsalada + "%</li>" +
            "<li>Porcentaje de invitados que eligieron pollo: " + porcentajePollo + "%</li>" +
        "</ul>" +
        "<p><strong>El menú más elegido fue:</strong> " + menuMasElegido + " (con " + maxVotos + " votos)</p>";
});
