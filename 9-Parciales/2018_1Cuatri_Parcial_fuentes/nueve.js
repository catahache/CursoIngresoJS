/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/

function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var cantTemperaturasPares;
	var contador;
	var productosMenosCero;
	var sumaPesos;
	var contadorPeso;
	var promedioPeso;
	var pesoMaximo;
	var pesoMinimo;
	var marcaMaxima;

	contador = 0;
	cantTemperaturasPares = 0;
	productosMenosCero = 0;
	sumaPesos = 0;
	contadorPeso = 0;

	for(respuesta = "si"; respuesta === "si";)
	{
		for(marca = 1; !isNaN(marca);)
		{
			marca = prompt ("Ingrese marca");
		}
		for(peso = -1; peso<0 || peso>101;)
		{
			peso = prompt("Ingrese peso del producto");
			peso = parseInt(peso);
			sumaPesos = sumaPesos + peso;
			contadorPeso ++;
		}

		for(temperatura = -32;temperatura< -31 || temperatura> 31;)
		{
			temperatura = prompt("Ingrese temperatura del producto");
			temperatura = parseInt(temperatura);
		}

		contador++;

		//Cantidad temperaturas pares;
		if(temperatura%2 == 0)
		{
			cantTemperaturasPares++;
		}

		//Peso maximo y minimo y marca maxima
		if(contador == 1)
		{
			pesoMaximo = peso;
			pesoMinimo = peso;
			marcaMaxima = marca;
		}
		else
		{
			if(peso > pesoMaximo)
			{
				pesoMaximo = peso;
				marcaMaxima = marca;
			}
			else
			{
				if(peso < pesoMinimo)
				{
					pesoMinimo = peso;
				}
			}
		}

		//Cantidad de productos conservados a menos de 0 grados
		if(temperatura < 0)
		{
			productosMenosCero++;
		}

		//Promedio peso productos
		promedioPeso = sumaPesos / contadorPeso;





		respuesta = prompt("Para seguir ingresando escriba 'si' ");
	}

	document.write("Cantidad de temperaturas pares: " + cantTemperaturasPares + "<br>");
	document.write("Marca producto más pesado: " + marcaMaxima + "<br>");
	document.write("Cantidad de productos conservados a menos de 0 grados: " + productosMenosCero + "<br>");
	document.write("Promedio del peso: " + promedioPeso + "<br>");
	document.write("Peso máximo: "+ pesoMaximo + "<br>");
	document.write ("Peso minimo: "+ pesoMinimo + "<br>");
}
