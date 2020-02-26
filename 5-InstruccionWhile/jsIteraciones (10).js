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

	while(respuesta === "si") // o respuesta != "no"
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		respuesta = prompt("Ingrese 'si' para continuar ingresando numeros")
	}
	
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


	document.write("Suma de positivos: " + sumaPositivos + "<br>"); //preguntar como hacer punto aparte
	document.write("Suma de negativos: " + sumaNegativos + "<br>");
	document.write("Cantidad de positivos: " + cantPositivos + "<br>");
	document.write("Cantidad de negativos: " + cantNegativos + "<br>");
	document.write("Cantidad de ceros: " + cantCeros + "<br>");
	document.write("Cantidad de pares: " + cantPares + "<br>");
	document.write("Promedio de positivos: " + promedioPositivos + "<br>");
	document.write("Promedio de negativos: " + promedioNegativos + "<br>");
	document.write("Diferencia entre positivos y negativos: " + diferenciaPositivosNegativos + "<br>");


}//FIN DE LA FUNCIÓN