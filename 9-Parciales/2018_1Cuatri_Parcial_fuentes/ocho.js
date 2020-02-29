function mostrar() //RESOLVER
{
	var numeroIngresado;
	var letraIngresada;
	var respuesta;
	var numeroPar;
	var cantidadPares;
	var numeroImpar;
	var cantidadImpares;
	var cero;
	var cantidadCeros;
	var cantidadPositivos;
	var sumaPositivos;
	var sumaNegativos;
	var contador;
	var minimo;
	var maximo;
	var letraMinima;
	var letraMaxima;

	
	respuesta = "si";
	cantidadPares = 0;
	cantidadImpares = 0;
	cantidadCeros = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	sumaNegativos = 0;
	contador = 0;
	

	while(respuesta === "si")
	{
		letraIngresada = prompt ("Ingrese un letra");
		while(!isNaN(letraIngresada))
		{
			letraIngresada = prompt ("Ingrese una letra");
		}

		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado);

		while(isNaN(numeroIngresado) || numeroIngresado< -100 || numeroIngresado > 100)
		{
			numeroIngresado = prompt ("Ingrese un numero");
		}

		contador++;

		//Cantidad de pares
		if(numeroIngresado%2 == 0 && numeroIngresado != 0)
		{
			cantidadPares++;
		}
		else // Cantidad de ceros
		{
			if(numeroIngresado == 0)
			{
				cantidadCeros++;
			}
			else //Cantidad de impares
			{
				cantidadImpares++;
			}
		}

		//Cantidad de positivos
		if(numeroIngresado> -1) 
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos++;
		}
		else //Suma de positivos
		{
			if(numeroIngresado< 0)
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
			}
		}

		//Maximo y minimo
		if(contador == 1) 
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			letraMaxima = letraIngresada;
			letraMinima = letraIngresada;
		}
		else
		{
			if(numeroIngresado > maximo)
			{
				maximo = numeroIngresado;
				letraMaxima = letraIngresada;
			}
			else
			{
				if (numeroIngresado < minimo)
				{
					minimo = numeroIngresado;
					letraMinima = letraIngresada;
				}
			}
		}	

		respuesta = prompt ("Ingrese 'si' para ingresar letra y numero.")
	}

	promedio = sumaPositivos / cantidadPositivos;

	document.write("Cantidad numeros pares: " + cantidadPares + "<br>");
	document.write("Cantidad numeros impares: " + cantidadImpares + "<br>");
	document.write("Cantidad de ceros: " + cantidadCeros + "<br>");
	document.write("Promedio numeros positivos: " + promedio + "<br>");
	document.write("Suma negativos: " + sumaNegativos + "<br>");
	document.write("Letra máxima y número máximo " + maximo + letraMaxima + "<br>");
	document.write("Letra mínima y número mínimo "+ minimo + letraMinima + "<br>");








	/*for(respuesta = 'si'; respuesta === 'si'; )
	{
		respuesta = prompt("Ingresar 'si' para ingresar letra y numero");
		letraIngresada = prompt("Ingresar letra");

		for(letraIngresada=letraIngresada; !isNaN(letraIngresada); )
		{
			console.log("Letra ingresada: " + letraIngresada);
		}

		numeroIngresado = prompt("Ingresar número;");
		numeroIngresado = parseInt(numeroIngresado);

		for(numeroIngresado=numeroIngresado; numeroIngresado > -100 && numeroIngresado < 100; )
		{
			console.log("Numero ingresado: " + numeroIngresado);
		}

	}*/
}
