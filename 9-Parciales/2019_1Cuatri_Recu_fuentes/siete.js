/*Pedir:
edad (mas 18)
sexo (f o m)
pasaje (urbano, nacional o internacional

a) nombre del hombre con pasaje nacional mas joven
b) sexo y pasaje de pasajero mas viejo
c) cant de mujeres con pasaje urbano o nacional
d) promedio de edad entre mujeres
e) promedio de edad entre hombre con pasaje internacional*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var pasaje;
	var respuesta;
	var contador;
	var masJoven;
	var edadMasJoven;
	var masViejo;
	var edadMasViejo;
	var pasajeMasViejo;
	var sexoMasViejo;
	var cantidadMujeresPasaje;
	var cantidadMujeres;
	var acumuladorEdadMujeres;
	var promedioEdadMujeres;
	var cantidadHombresPasaje;
	var acumuladorEdadHombresPasaje;
	var promedioEdadHombresPasaje;

	contador = 0;
	cantidadMujeresPasaje = 0;
	cantidadMujeres = 0;
	acumuladorEdadMujeres = 0;
	cantidadHombresPasaje = 0;
	acumuladorEdadHombresPasaje = 0;

	for(respuesta = "si"; respuesta === "si"; )
	{
		for(nombre = 0; !isNaN(nombre);)
		{
			nombre = prompt("Ingrese su nombre");
		}
		for(edad = 0; isNaN(edad) || edad < 18;)
		{
			edad = prompt("Ingrese edad mayor a 18");
			edad = parseInt(edad);
		}
		for(sexo = 0; !isNaN(sexo) || sexo != "m" && sexo != "f";)
		{
			sexo = prompt("Sexo f o m");
		}
		for(pasaje = 0; !isNaN(pasaje) || pasaje != "urbano" && pasaje != "nacional" && pasaje != "internacional";)
		{
			pasaje = prompt("Ingrese si su pasaje es urbano, nacional o internacional");
		}

		contador++;

		//a)
		if(contador == 1)
		{
			if(pasaje == "nacional" && sexo == "m")
			{
				edadMasJoven = edad;
				masJoven = nombre;
			}
		}
		else
		{
			if(edad<edadMasJoven)
			{
				edadMasJoven = edad;
				masJoven = nombre;
			}
		}

		//b)
		if(contador == 1)
		{
			edadMasViejo = edad;
			masViejo = nombre;
			pasajeMasViejo = pasaje;
			sexoMasViejo = sexo;
		}
		else
		{
			if(edad > edadMasViejo)
			{
				edadMasViejo = edad;
				masViejo = nombre;
				pasajeMasViejo = pasaje;
				sexoMasViejo = sexo;
			}
		}

		//c) d)
		if(sexo == "f")
		{
			cantidadMujeres++;
			acumuladorEdadMujeres = acumuladorEdadMujeres + edad;

			if(pasaje == "nacional" && pasaje == "urbano")
			{
				cantidadMujeresPasaje++;
			}
		}

		//e)
		if(sexo == "m" && pasaje == "internacional")
		{
			cantidadHombresPasaje++;
			acumuladorEdadHombresPasaje = acumuladorEdadHombresPasaje + edad;
		}

		respuesta = prompt("Si para continuar");
	}
	//d)
	promedioEdadMujeres = acumuladorEdadMujeres / cantidadMujeres;
	promedioEdadHombresPasaje = acumuladorEdadHombresPasaje / cantidadHombresPasaje;

	document.write("<br> nombre del hombre con pasaje nacional mas joven: "+masJoven);
	document.write("<br> sexo y pasaje de pasajero mas viejo: "+ sexoMasViejo + " "+pasajeMasViejo);
	document.write("<br> cant de mujeres con pasaje urbano o nacional: "+cantidadMujeresPasaje);
	document.write("<br> promedio de edad entre mujeres: "+promedioEdadMujeres);
	document.write("<br> promedio de edad entre hombre con pasaje internacional: "+ promedioEdadHombresPasaje);
}
