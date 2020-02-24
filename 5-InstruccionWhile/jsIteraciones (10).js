/* Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/

function mostrar()
{
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantPositivos;
	var cantNegativos;
	var cantCeros;
	var cantPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	var respuesta;

	contador = 0;
	respuesta = "si";
	negativos = 0;
	positivos = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;
	cantPositivos = 0;
	cantNegativos = 0;
	cantCeros = 0;
	cantPares = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	//declarar contadores y variables 

	while(respuesta!="no")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		respuesta = prompt("Ingrese 'si' para continuar ingresando numeros")

			if (numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantPositivos = cantPositivos + 1;
				promedioPositivos = sumaPositivos / cantPositivos;
			}
			else
			{
				if (numeroIngresado < 0)
				{
					sumaNegativos = sumaNegativos + numeroIngresado;
					cantNegativos = cantNegativos + 1;
					promedioNegativos = sumaNegativos / cantNegativos; 
				}
				else
				{
					cantCeros = cantCeros + 1;
				}
			}

		diferenciaPositivosNegativos = sumaPositivos + sumaNegativos;

			if (numeroIngresado % 2 == 0)
			{
				cantPares = cantPares + 1;
			}
	}

	console.log("Suma de positivos: " + sumaPositivos);
	console.log("Suma de negativos: " + sumaNegativos);
	console.log("Cantidad de positivos: " + cantPositivos);
	console.log("Cantidad de negativos: " + cantNegativos);
	console.log("Cantidad de ceros: " + cantCeros);
	console.log("Cantidad de pares: " + cantPares);
	console.log("Promedio de positivos: " + promedioPositivos);
	console.log("Promedio de negativos: " + promedioNegativos);
	console.log("Diferencia entre positivos y negativos: " + diferenciaPositivosNegativos);


}//FIN DE LA FUNCIÓN