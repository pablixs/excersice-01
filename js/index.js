// Escriba un programa para calcular la factura de electricidad ( permitiendo que el usuario pueda ingresar su consumo ) y calcular el precio con los siguientes criterios:
// Precio Unitario.
// Primeras 100 unidades sin cargo
// Siguientes 100 unidades $ 5 por unidad
// Después de 200 unidades $ 10 por unidad
// (Por ejemplo, el usuario ingresa un consumo de 350, el monto total de la factura es $2000)

var nombreUsuario = prompt("Ingresa tu nombre");
var consumoUsuario = prompt("Ingresar su consumo de este mes")
var primerasCien = 100;
var cien = 100;
var doscientos = 200;
var precioTotal = "";
var valorTotal = "";
var descuentoTotal = "";

if (consumoUsuario <= primerasCien) {
    valorTotal = consumoUsuario * 5;
    descuentoTotal = consumoUsuario * 5;
    precioTotal = consumoUsuario * 0;
} else {
    if (consumoUsuario >= cien && consumoUsuario <= doscientos) {
        valorTotal = consumoUsuario * 5;
        descuentoTotal = 100 * 5;
        precioTotal = consumoUsuario * 5 - 100 * 5;
    } else {
        if (consumoUsuario >= doscientos) {
            valorTotal = consumoUsuario * 10;
            descuentoTotal = 150 * 10;
            precioTotal = consumoUsuario * 10 - 150 * 10;
        }
    }
}

function mostrarItems() {
    document.getElementById('miNombre').innerHTML = nombreUsuario;
    document.getElementById('miConsumo').innerHTML = consumoUsuario + "u.";
    document.getElementById('miCuota').innerHTML = valorTotal;
    document.getElementById('miDescuento').innerHTML = descuentoTotal;
    document.getElementById('valorTotal').innerHTML = precioTotal;
}

mostrarItems();