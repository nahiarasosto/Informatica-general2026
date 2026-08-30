//Variables

let botonCalculo = document.querySelector("#calculo");
let resultado = document.querySelector("#resultado");

//Las matemáticas

botonCalculo.addEventListener("click", function calcularResultado() {
    let datoPrecio = document.querySelector("#numPrecio").value;
    let datoDescuento = document.querySelector("#numDescuento").value;
    

    let montoDescuento = (Number (datoPrecio) * Number(datoDescuento)) / 100;
    let precioCondescuento = datoPrecio - montoDescuento;

//Resultado

    let resultado = document.querySelector('#resultado');
    resultado.value = precioCondescuento;
});