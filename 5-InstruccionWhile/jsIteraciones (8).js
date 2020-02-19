function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador;
	var numeroIngresado;
	
	var respuesta='si';

	while(respuesta == "si")
	{
		contador = contador + 1;
		numeroIngresado = prompt("Ingrese número");
		numeroIngresado = parseInt(numeroIngresado);
		respuesta=prompt("ingresa 'si' o de lo contrario sale");

		if(numeroIngresado > 0)
		{
			acumulador = acumulador + numeroIngresado;
		}
		if (numeroIngresado < 0)
		{
			acumulador = acumulador * numeroIngresado;
		}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN