function mostrar()
{
	var nota;
	var sexo;
	var sumaNotas;
	var promedio;
	var notaMasBaja;
	var cantidadAlumnxs;
	var cantidadVarones;
	var maximoSexo;

	cantidadAlumnxs = 0;
	cantidadAlumnxs = parseInt(cantidadAlumnxs);
	sumaNotas = 0;
	sumaNotas = parseInt (sumaNotas);

	while (cantidadAlumnxs < 5)
	{
		nota = prompt("Ingrese la nota");
		nota = parseInt(nota); //parsear adentro del while
		sexo = prompt("Ingrese sexo m o f");
		cantidadAlumnxs = cantidadAlumnxs + 1;
		sumaNotas = sumaNotas + nota;

		while (isNaN(nota) || nota < 0 || nota > 10)
		{
			nota = prompt("Ingrese la nota");
		}
		console.log("La nota ingresada es: " + nota);

		while (!isNaN(sexo) || sexo != "m" && sexo != "f")
		{
			sexo = prompt("Ingrese sexo m o f");
		}
		console.log("Sexo: " + sexo);
	}


	if (cantidadAlumnxs == 1)
	{
		notaMasBaja = nota;
		maximoSexo = sexo;
	}
	else
	{
		if (nota < notaMasBaja)
		{
			notaMasBaja = nota;
			maximoSexo = sexo;
		}
	}

	/*if (maximo<numeroIngresado || contador == 1)
	{
		maximo=numeroIngresado;
	}
	if (contador ==1 || minimo>numeroIngresado)
	{
		minimo=numeroIngresado;
	} ---> otra manera de sacar minimo y maximo*/ 


	console.log("La suma de las notas es: " + sumaNotas);

	promedio = sumaNotas / cantidadAlumnxs;

	alert("El promedio de las notas es de: " + promedio);
	alert("La nota mas baja es: " + notaMasBaja + " el sexo es: " + sexo);


	
}
