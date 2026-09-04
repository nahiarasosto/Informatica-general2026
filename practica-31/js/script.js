//Variables
let botonEnviar = document.querySelector("#enviar");
let botonCalculoPorcentaje = document.querySelector("#calculo");
let botonCalculoDescuento = document.querySelector("#calculo1");
let resultadoPorcentaje = document.querySelector("#resultados");
let resultadoDescuento = document.querySelector("#resultados1");

let listaNombres = [];
let listaMontos = [];

//Botón enviar
botonEnviar.addEventListener('click', function() {

    let datoNombre = document.querySelector('#nombre').value;
    let datoMonto = Number(document.querySelector('#montoTotal').value);

    listaNombres.push(datoNombre);
    listaMontos.push(datoMonto);

    alert(`¡Cliente registrado con éxito!`);
    
    document.querySelector('#nombre').value = "";
    document.querySelector('#montoTotal').value = "";
});

//Botón porcentaje
botonCalculoPorcentaje.addEventListener('click', function() {

    if (listaNombres.length === 0) {
        resultadoPorcentaje.innerHTML = "<p>No hay clientes registrados para calcular</p>";
        return;
    }

    let totalClientes = listaNombres.length;
    let sumaMontos = 0;
    
    for (let i = 0; i < listaMontos.length; i++) {
        sumaMontos += listaMontos[i];
    }

    let promedio = sumaMontos / totalClientes;
    let promedioRedondeado = Math.round(promedio * 100) / 100;

    resultadoPorcentaje.innerHTML = `
        <p><strong>Total de clientes:</strong> ${totalClientes}</p>
        <p><strong>Promedio de compra:</strong> ${promedioRedondeado}</p>
    `;
});

//Botón descuento
botonCalculoDescuento.addEventListener('click', function() {

    if (listaNombres.length === 0) {
        resultadoDescuento.innerHTML = "<p>No hay clientes registrados para evaluar</p>";
        return;
    }

    let montoMayor = listaMontos[0];
    let mayor = 0;

    for (let i = 1; i < listaMontos.length; i++) {
        if (listaMontos[i] > montoMayor) {
            montoMayor = listaMontos[i];
            mayor = i;
        }
    }

//Cliente que más gastó (descuento)

    let clienteMasGasto = listaNombres[mayor];

    let descuento = 0;
    if (montoMayor > 50000) {
        descuento = 0.30;
    } else {
        descuento = 0.15;
    }

    let montoDescuento = montoMayor * descuento;
    let totalConDescuento = montoMayor - montoDescuento;

    let totalConDescuentoRedondeado = Math.round(totalConDescuento * 100) / 100;

    resultadoDescuento.innerHTML = `
        <p><strong>Cliente que más gastó:</strong> ${clienteMasGasto}</p>
        <p><strong>Total con descuento:</strong> ${totalConDescuentoRedondeado}</p>
    `;
});
