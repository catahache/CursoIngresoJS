/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porciento25;
	var resultado;

	importe = document.getElementById('importe').value;
	importe = parseInt(importe);

	porciento25 = ( 25 * importe) / 100;
	resultado = importe - porciento25;

	document.getElementById('resultado').value = resultado;

	console.log("El importe con descuento es: " + resultado);

	
}
