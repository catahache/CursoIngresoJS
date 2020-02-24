/*Al presionar el botón pedir números 
hasta que el USUARIO QUIERA e 
informar la suma acumulada y el promedio.*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';
	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador +1;
		acumulador = acumulador + numeroIngresado;
		respuesta=prompt("ingresa 'si' o de lo contrario sale");
	}



	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN