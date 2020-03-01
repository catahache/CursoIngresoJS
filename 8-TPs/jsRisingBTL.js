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
	 var legajo;
	 var nacionalidad;

	 edad = 0;
	 while(isNaN(edad) || edad < 18 || edad > 90)
	 {
	 	edad = prompt("Ingrese edad de 18 a 90");
	 }

	 sexo = 0;
	 while(!isNaN(sexo) || sexo != "m" && sexo != "f")
	 {
	 	sexo = prompt("Ingrese sexo, m ó f");
	 }

	 estadoCivil = 0;
	 while(isNaN(estadoCivil) || estadoCivil < 1 || estadoCivil > 4)
	 {
	 	estadoCivil = prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	 }

	 sueldoBruto = 0;
	 while(isNaN(sueldoBruto) || sueldoBruto < 8000)
	 {
	 	sueldoBruto = prompt("Ingrese sueldo bruto no menor a 8000");
	 }

	 legajo = 0;
	 while(isNaN(legajo) || legajo < 1000 || legajo > 9999)
	 {
	 	legajo = prompt("Ingrese legajo de 4 cifras");
	 }

	 nacionalidad = 0;
	 while(!isNaN(nacionalidad) || nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
	 {
	 	nacionalidad = prompt ("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	 }

	 if(sexo == "m")
	 {
	 	sexo = "masculino";
	 }
	 else
	 {
	 	if(sexo == "f")
	 	{
	 		sexo = "femenino";
	 	}
	 }

	 if(estadoCivil == 1)
	 {
	 	estadoCivil = "Soltero";
	 }
	 else
	 {
	 	if(estadoCivil == 2)
	 	{
	 		estadoCivil = "Casado";
	 	}
	 	else
	 	{
	 		if(estadoCivil == 3)
	 		{
	 			estadoCivil = "Divorciado";
	 		}
	 		else
	 		{
	 			estadoCivil = "Viudo";
	 		}
	 	}
	 }

	 if(nacionalidad == "a")
	 {
	 	nacionalidad = "Argentino";
	 }
	 else
	 {
	 	if(nacionalidad == "e")
	 	{
	 		nacionalidad = "Extranjero";
	 	}
	 	else
	 	{
	 		nacionalidad = "Nacionalizado";
	 	}
	 }

	 document.getElementById('Edad').value = edad;
	 document.getElementById('Sexo').value = sexo;
	 document.getElementById('EstadoCivil').value = estadoCivil;
	 document.getElementById('Sueldo').value = sueldoBruto;
	 document.getElementById('Legajo').value = legajo;
	 document.getElementById('Nacionalidad').value = nacionalidad;
}
