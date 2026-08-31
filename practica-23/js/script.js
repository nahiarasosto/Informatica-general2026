//Boton para calcular resultados

let boton = document.querySelector("#calculo");

boton.addEventListener("click", function() {
    let aulas = ["001", "101", "201", "301", "501"];
    
    let primerCantidad = Number(document.querySelector("#aula0").value) || 0;
    
    let maxAula = aulas[0];
    let maxPupitres = primerCantidad;
    
    let minAula = aulas[0];
    let minPupitres = primerCantidad;
    
    let totalAComprar = 0;
    if (primerCantidad < 80) {
        totalAComprar = 80 - primerCantidad;
    }

    for (let i = 1; i < aulas.length; i++) {
        let cantidad = Number(document.querySelector("#aula" + i).value) || 0;

    //Aula con más pupitres
    
    if (cantidad > maxPupitres) {
            maxPupitres = cantidad;
            maxAula = aulas[i];
        }

    //Aula con menos pupitres
    
    if (cantidad < minPupitres) {
            minPupitres = cantidad;
            minAula = aulas[i];
        }

    //80 pupitres
    
    if (cantidad < 80) {
            totalAComprar = totalAComprar + (80 - cantidad);
        }
    }

    //Resultados

    document.querySelector("#resultados").innerHTML = 
        "<h2>Resultados</h2>" +
        "<ul>" +
        "<li><strong>Aula con más pupitres:</strong> Aula " + maxAula + " (" + maxPupitres + " pupitres)</li>" +
        "<li><strong>Aula con menos pupitres:</strong> Aula " + minAula + " (" + minPupitres + " pupitres)</li>" +
        "<li><strong>Pupitres a comprar para completar 80 por aula:</strong> " + totalAComprar + " unidades</li>" +
        "</ul>";
});
