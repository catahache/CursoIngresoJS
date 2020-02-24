function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	var acumulador;
	var numeroIngresado;
	var respuesta;
	
	respuesta='si';
	acumulador = 0;

	while(respuesta == "si")
	{
		contador = contador + 1;
		numeroIngresado = prompt("Ingrese número");
		numeroIngresado = parseInt(numeroIngresado);
		respuesta=prompt("ingresa 'si' o de lo contrario sale");

		if(numeroIngresado > 0)
		{
			acumulador = acumulador + numeroIngresado;
			positivo = acumulador;
		}
		if (numeroIngresado < 0)
		{
			acumulador = acumulador * numeroIngresado;
			negativo = acumulador;
		}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN