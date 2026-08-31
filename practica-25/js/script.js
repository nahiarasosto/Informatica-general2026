const seriesRecomendadas = [

//ACCIÓN
  {nombre: "The Boys", genero: "Acción", plataforma: "Amazon Prime Video", edad: "Mayor"},
  {nombre: "Invincible", genero: "Acción", plataforma: "Amazon Prime Video", edad: "Mayor"},
  {nombre: "Impuros", genero: "Acción", plataforma: "Disney+", edad: "Mayor"},

  //DRAMA
  {nombre: "Succession", genero: "Drama", plataforma: "Max", edad: "Mayor"},
  {nombre: "El cuento de la criada", genero: "Drama", plataforma: "Max / Prime Video", edad: "Mayor"},
  {nombre: "BoJack Horseman", genero: "Drama", plataforma: "Netflix", edad: "Mayor"},

//COMEDIA
  {nombre: "Fleabag", genero: "Comedia", plataforma: "Amazon Prime Video", edad: "Mayor"},
  {nombre: "Ted Lasso", genero: "Comedia", plataforma: "Apple TV+", edad: "Mayor"},
  {nombre: "Los simuladores", genero: "Comedia", plataforma: "Netflix / Max", edad: "Mayor"},

//SUSPENSO
  {nombre: "Severance", genero: "Suspenso", plataforma: "Apple TV+", edad: "Mayor"},
  {nombre: "Slow Horses", genero: "Suspenso", plataforma: "Apple TV+", edad: "Mayor"},
  {nombre: "El marginal", genero: "Suspenso", plataforma: "Netflix", edad: "Mayor"},

//TERROR
  {nombre: "The Haunting of Hill House", genero: "Terror", plataforma: "Netflix", edad: "Mayor"},
  {nombre: "Castlevania", genero: "Terror", plataforma: "Netflix", edad: "Mayor"},

//FANTASÍA
  {nombre: "House of the Dragon", genero: "Fantasía", plataforma: "Max", edad: "Mayor" },
  { nombre: "Arcane", genero: "Fantasía", plataforma: "Netflix", edad: "Mayor"},

//INFANTILES
  {nombre: "Bluey", genero: "Infantil", plataforma: "Disney+", edad: "Menor"},
  {nombre: "Avatar: La leyenda de Aang", genero: "Infantil", plataforma: "Netflix / Paramount+", edad: "Menor"},
  {nombre: "Gravity Falls", genero: "Infantil", plataforma: "Disney+", edad: "Menor"}
];

const formulario = document.querySelector("form");
const botonResultados = document.querySelector("#calculo");
const resultados = document.querySelector("#resultados");

botonResultados.addEventListener("click", function() {

    let nombreUsuario = document.querySelector("#nombre").value;
    let edadUsuario = Number(document.querySelector("#edadUsuario").value);
    let generoSerie = document.querySelector("#genero").value;

    let rangoEdad = edadUsuario >= 18 ? "Mayor" : "Menor";

    let seriesCoincidentes = [];

    for (let i = 0; i < seriesRecomendadas.length; i++) {
        if (seriesRecomendadas[i].genero === generoSerie && seriesRecomendadas[i].edad === rangoEdad) {
            seriesCoincidentes.push(seriesRecomendadas[i]);
        }
    }

    if (seriesCoincidentes.length > 0) {
        
        //Aleatoriedad en las respuestas
        let indiceAleatorio = Math.floor(Math.random() * seriesCoincidentes.length);
        
        let serieSugerida = seriesCoincidentes[indiceAleatorio];
        
    //Resultados
        resultados.innerHTML = `
          <p>¡Hola, <strong>${nombreUsuario}</strong>!</p>
          <p>Según tus datos, te sugerimos ver la serie: <strong>"${serieSugerida.nombre}"</strong>.</p>
          <p>La podés encontrar disponible en la plataforma: <strong>${serieSugerida.plataforma}</strong>.</p>
          <p>(Si volvés a presionar el botón, podrías obtener una sugerencia distinta)</small></p>
        `;

    } else {
        resultados.innerHTML = `
          <p>¡Hola, <strong>${nombreUsuario}</strong>!</p>
          <p>No se ha encontrado una serie que encaje con tu búsqueda en nuestro catálogo actual. ¡Probá con otro género!</p>
        `;
    }
});
