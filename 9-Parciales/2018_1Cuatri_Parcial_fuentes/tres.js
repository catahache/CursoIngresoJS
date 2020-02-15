//Pedir por prompt el precio y el porcentaje de 
//descuento, mostrar el precio final con descuento 
//por id.
function mostrar()
{
	var precio;
	var porcentajeDeDescuento;
	var precioFinal;

	precio = prompt ("Ingrese precio.");
	porcentajeDeDescuento = prompt ("Ingrese el porcentaje de descuento.");

	precioFinal = precio - precio*porcentajeDeDescuento/100;

	document.getElementById('elPrecioFinal').value = precioFinal;
}
