function mostrar()
{
	var contador;
	var maximo;
	var minimo;

	contador=0;
	respuesta='si';

	while(respuesta!='no')
	{
		contador = contador + 1;
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(contador == 1)
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
		}else
		{
			if(numeroIngresado > maximo)
			{
				maximo = numeroIngresado;
			}
			if(numeroIngresado < minimo)//otro if porque que no sea el max no quiere decir que sea el min
			{
				minimo = numeroIngresado;
			}
		}
	
		respuesta=prompt("ingresa 'no' para salir");
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;



}//FIN DE LA FUNCIÓN