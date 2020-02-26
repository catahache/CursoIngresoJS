/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	 var edad;
	 var sexo;
	 var estadoCivil;
	 var sueldoBruto;
	 var numeroLegajo;
	 var nacionalidad;

	 edad = 0;
	 estadoCivil = 0;
	 sueldoBruto = 0;
	 legajo = 0;

	 //EDAD
	 while(isNaN(edad) || edad < 18 || edad > 90)
	 {
	 	edad = prompt ("Ingrese en números -edad entre 18 y 90-");
	 }

	 //SEXO
	 while (!isNaN(sexo) || sexo != "M" && sexo != "F")
	 {
	 	sexo = prompt ("Ingrese sexo: M o F")
	 }

	 //ESTADO CIVIL
	 while (isNaN(estadoCivil) || (estadoCivil < 1 || estadoCivil > 4)) //no puedo poner isNaN porque vuelve a entrar, preguntar 
	 {
	 	estadoCivil = prompt("Ingrese estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	 	estadoCivil = parseInt(estadoCivil);
	 }

	 //SUELDO BRUTO
	 while (isNaN(sueldoBruto) || sueldoBruto < 8000)
	 {
	 	sueldoBruto = prompt("Ingrese sueldo bruto no menor a 8000");
	 }

	 //LEGAJO
	 while (isNaN(legajo) || legajo < 1000 || legajo > 9999)
	 {
	 	legajo = prompt("Ingrese numero de legajo -4 cifras sin ceros a la izquierda-");
	 }

	//NACIONALIDAD: preguntar por que no puedo poner el if adentro
	while (!isNaN(nacionalidad) || nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
	{
		nacionalidad = prompt ("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados" )
	}


	//LOGICA

	 if (estadoCivil == 1)
	{
		estadoCivil = "solterx"
	}
	 elseS
	{
		if (estadoCivil == 2)
		{
			estadoCivil = "casadx"
		}
		else
		{
			 if(estadoCivil == 3)
			 {
			 	estadoCivil = "divorciadx"
			 }
			 else
			 {
			 	if(estadoCivil == 4)
			 	{
			 		estadoCivil = "viudx"
			 	}
			 }
		}
	 }


	if (nacionalidad == "A")
	{
		nacionalidad = "Argentinx";
	}
	else
	{
		if (nacionalidad == "E")
		{
			nacionalidad = "Extranjerx";
		}
		else
		{
			if(nacionalidad == "N")
			{
				nacionalidad = "Nacionalizadx";
			}
		}
	}
	
	document.getElementById('Edad').value = edad;
	document.getElementById('Sexo').value = sexo;
	document.getElementById('EstadoCivil').value = estadoCivil;
	document.getElementById('Sueldo').value = sueldoBruto;
	document.getElementById('Legajo').value = legajo;
	document.getElementById('Nacionalidad').value = nacionalidad;
}
