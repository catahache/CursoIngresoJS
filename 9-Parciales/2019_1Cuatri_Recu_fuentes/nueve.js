/* Realizar el algoritmo que permita ingresar el nome de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)   
hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a)La cantidad de varones aprobados
b)El promedio de notas de los menores de edad
c)El promedio de notas de los adolescentes.
d)El promedio de notas de los mayores		
f)El promedio de notas  por sexo masculino y femenino*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var nota;
	var respuesta;
	var cantidadVaronesAprobados;
	var contadorNotasMenores;
	var acumuladorNotasMenores;
	var contadorNotasAdolescentes;
	var acumuladorNotasAdolescentes;
	var contadorNotasMayores;
	var acumuladorNotasMayores;
	var contadorNotasVarones;
	var acumuladorNotasVarones;
	var contadorNotasMujeres;
	var acumuladorNotasMujeres;
	var promedioNotasMenores;
	var promedioNotasAdolescentes;
	var promedioNotasMayores;
	var promedioNotasVarones;
	var promedioNotasMujeres;

	cantidadVaronesAprobados = 0;
	acumuladorNotasMenores = 0;
	contadorNotasMenores = 0;
	contadorNotasAdolescentes = 0;
	acumuladorNotasAdolescentes = 0;
	contadorNotasMayores = 0;
	acumuladorNotasMayores = 0;
	contadorNotasVarones = 0;
	acumuladorNotasVarones = 0;
	contadorNotasMujeres = 0;
	acumuladorNotasMujeres = 0;

	for(respuesta = "si" ; respuesta === "si" ;)
	{

		for(nombre = 0; !isNaN(nombre); )
		{
			nombre = prompt("Ingrese nombre");
		}

		for(edad = 0; isNaN(edad) || edad<10 || edad>99; )
		{
			edad = prompt("Ingrese edad de 10 a 99")
		}

		for(sexo = 0; !isNaN(sexo) || sexo != "f" && sexo != "m"; )
		{
			sexo = prompt ("Ingrese sexo f o m");
		}

		for(nota = 0; isNaN(nota) || nota<1 || nota>10; )
		{
			nota = prompt("Ingrese nota");
			nota = parseInt(nota);
		}

		respuesta = prompt("Escriba 'si' para seguir ingresando");


		if(nota > 5 && sexo == "m")
		{
			cantidadVaronesAprobados++;
		}
		
		if(edad > 17)
		{
			contadorNotasMayores++;
			acumuladorNotasMayores = acumuladorNotasMayores + nota;
		}
		else
		{
			if(edad < 18)
			{
				contadorNotasMenores++;
				acumuladorNotasMenores = acumuladorNotasMenores +nota;
			}
			if(edad < 18 && edad > 12)
			{
				contadorNotasAdolescentes++;
				acumuladorNotasAdolescentes = acumuladorNotasAdolescentes + nota;
			}
		}

		if(sexo == "m")
		{
			contadorNotasVarones++;
			acumuladorNotasVarones = acumuladorNotasVarones + nota;
		}
		else
		{
			contadorNotasMujeres++;
			acumuladorNotasMujeres = acumuladorNotasMujeres + nota;
		}
	}

	promedioNotasMenores = acumuladorNotasMenores / contadorNotasMenores;
	promedioNotasAdolescentes = acumuladorNotasAdolescentes / contadorNotasAdolescentes;
	promedioNotasMayores = acumuladorNotasMayores / contadorNotasMayores;
	promedioNotasVarones = acumuladorNotasVarones / contadorNotasVarones;
	promedioNotasMujeres = acumuladorNotasMujeres / contadorNotasMujeres;

	if(promedioNotasMenores == NaN)
	{
		promedioNotasMenores = 0;
	}
	if(promedioNotasAdolescentes == NaN)
	{
		promedioNotasAdolescentes = 0;
	}
	if(promedioNotasMayores == NaN)
	{
		promedioNotasMayores = 0;
	}
	if(promedioNotasVarones == NaN)
	{
		promedioNotasVarones = 0;
	}
	if(promedioNotasMujeres == NaN)
	{
		promedioNotasMujeres = 0;
	}

	document.write("<br> Cantidad de varones aprobados: " + cantidadVaronesAprobados);
	document.write("<br> Promedio de notas de menores de edad: " + promedioNotasMenores);
	document.write("<br> Promedio de notas de adolescentes: " + promedioNotasAdolescentes);
	document.write("<br> Promedio de notas de mayores de edad: " + promedioNotasMayores);
	document.write("<br> Promedio de nota de varones: " + promedioNotasVarones);
	document.write("<br> Promedio de nota de mujeres: " + promedioNotasMujeres);
}
