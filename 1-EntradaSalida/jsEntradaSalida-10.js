/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{
	var importe;
	var porcentaje;
	var importeConDescuento;

	importe = document.getElementById('importe').value;
	importe = parseInt(importe);
	porcentaje = 25;

	importeConDescuento = importe - importe*porcentaje/100;

	document.getElementById('resultado').value = importeConDescuento;

	console.log("El importe con descuento es: " + importeConDescuento);

	//precioConDescuento = precio - precio * porcenteDescuento / 100;
	//precioConAumento = precio + precio * aumento / 100;
	
}

//EJERCICIO 11