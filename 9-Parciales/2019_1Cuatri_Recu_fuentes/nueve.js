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
	var notaFinal;
	var respuesta;
	var cantidadVaronesAprobados;
	var acumuladorNotasMenores;
	var cantidadMenores;
	var promedioNotaMenores;
	var cantidadAdolescentes;
	var acumuladorNotasAdolescentes;
	var promedioNotasAdolescentes;
	var cantidadMayores;
	var acumuladorNotasMayores;
	var promedioNotasMayores;
	var acumuladorNotasMujeres;
	var cantidadMujeres;
	var promedioNotasMujeres;
	var acumuladorNotasVarones;
	var cantidadVarones;
	var promedioNotasVarones;

	cantidadVaronesAprobados = 0;
	acumuladorNotasMenores = 0;
	cantidadMenores = 0;
	cantidadAdolescentes = 0;
	acumuladorNotasAdolescentes = 0;
	cantidadMayores = 0;
	acumuladorNotasMayores = 0;
	acumuladorNotasMujeres =0;
	cantidadMujeres = 0;
	acumuladorNotasVarones = 0;
	cantidadVarones = 0;

	for(respuesta = "si"; respuesta === "si"; )
	{
		for(nombre = 0; !isNaN(nombre); )
		{
			nombre = prompt("Ingrese nombre");

		}
		for(edad = 0; isNaN(edad) || edad<10 || edad>99; )
		{
			edad = prompt("Ingrese edad de 10 a 99");
			edad = parseInt(edad);
		}
		for(sexo = 0; !isNaN(sexo) || sexo != "m" && sexo != "f"; )
		{
			sexo = prompt("Ingrese sexo f o m");
		}
		for(notaFinal = 0; isNaN(notaFinal) || notaFinal<1 || notaFinal>10; )
		{
			notaFinal = prompt("Ingrese nota final");
			notaFinal = parseInt(notaFinal)
		}

		if(notaFinal>5 && sexo == "m")//se aprueba con 6
		{
			cantidadVaronesAprobados++;
		}

		if(edad>17)
		{
			cantidadMayores++;
			acumuladorNotasMayores = acumuladorNotasMayores + notaFinal;
			
		}
		else
		{
			if(edad<18)
			{
				cantidadMenores++;
				acumuladorNotasMenores = acumuladorNotasMenores + notaFinal;
			}
			if(edad>13 && edad<18)
			{
				cantidadAdolescentes++;
				acumuladorNotasAdolescentes = acumuladorNotasAdolescentes + notaFinal;
			}
		}

		if(sexo == "f")
		{
			cantidadMujeres++;
			acumuladorNotasMujeres = acumuladorNotasMujeres + notaFinal;
		}
		else
		{
			cantidadVarones++;
			acumuladorNotasVarones = acumuladorNotasVarones + notaFinal;
		}

		respuesta = prompt("Ingrese si para seguir ingresando datos");
	}

	promedioNotaMenores = acumuladorNotasMenores / cantidadMenores;
	promedioNotasAdolescentes = acumuladorNotasAdolescentes / cantidadAdolescentes;
	promedioNotasMayores = acumuladorNotasMayores / cantidadMayores;
	promedioNotasMujeres = acumuladorNotasMujeres / cantidadMujeres;
	promedioNotasVarones = acumuladorNotasVarones / cantidadVarones;

	console.log("<br> cantidad de varones aprobados: " + cantidadVaronesAprobados);
	console.log("<br> promedio de notas de menores de edad: "+promedioNotaMenores);
	console.log("<br> promedio de notas de adolescentes: " + promedioNotasAdolescentes);
	console.log("<br> promedio notas de mayores de edad: " + promedioNotasMayores);
	console.log("<br> promedio notas de mujeres: " + promedioNotasMujeres);
	console.log("<br> promedio notas de varones: " + promedioNotasVarones);

	document.write("<br> cantidad de varones aprobados: " + cantidadVaronesAprobados);
	document.write("<br> promedio de notas de menores de edad: "+promedioNotaMenores);
	document.write("<br> promedio de notas de adolescentes: " + promedioNotasAdolescentes);
	document.write("<br> promedio notas de mayores de edad: " + promedioNotasMayores);
	document.write("<br> promedio notas de mujeres: " + promedioNotasMujeres);
	document.write("<br> promedio notas de varones: " + promedioNotasVarones);

	
}
