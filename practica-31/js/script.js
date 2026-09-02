//Variables
let formulario = document.querySelector('form');
let botonCalculoPorcentaje = document.querySelector("#calculo");
let botonCalculoDescuento = document.querySelector("#calculo1");
let resultadoPorcentaje = document.querySelector("#resultado");
let resultadoDescuento = document.querySelector("#resultado1");



botonCalculoPorcentaje.addEventListener ('click', function(){

    let datoNombre = document.querySelector('#nombre').value;
    let datoMonto = Number(document.querySelector('#montoTotal').value);

});


/*
//Las matemáticas

botonCalculo.addEventListener("click", function() {
    let datoPrecio = document.querySelector("#numPrecio").value;
    let datoDescuento = document.querySelector("#numDescuento").value;
    

    let montoDescuento = (Number (datoPrecio) * Number(datoDescuento)) / 100;
    let precioCondescuento = datoPrecio - montoDescuento;

//Resultado

    let resultado = document.querySelector('#resultado');
    resultado.value = precioCondescuento;
});
*/