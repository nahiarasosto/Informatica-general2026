let respuestasCorrectas = [ 'JavaScript','Mendoza','Jorge Luis Borges', 'Andrómeda','Astor Piazzolla','1948', 'Surrealismo','Stranger Things','Alemania','Helio' ];

let botonesCorrectas = document.querySelectorAll('.botonCorrecta');
let botonesIncorrectas = document.querySelectorAll('.botonIncorrecta');
let botonResultados = document.querySelector('#botonResultados');
let pantallaResultados = document.querySelector('#resultados');

botonesCorrectas.forEach(function(boton) {
    boton.addEventListener('click', function(){
        alert('Respuesta correcta, ¡sigue así!');
    });
});

botonesIncorrectas.forEach(function(boton) {
    boton.addEventListener('click', function(){
        alert('Respuesta incorrecta, ¡no te rindas!');
    });
});

botonResultados.addEventListener('click', function(){

    let aciertos = 0;

    for (let i = 0; i < botonesCorrectas.length; i++){
        aciertos += botonesCorrectas[i];
    };

    let promedioAciertos = aciertos / botonesCorrectas.length;
    let totalPreguntas = respuestasCorrectas.length;

});
