/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosFahrenheit;
	var gradosCentigrados;

	gradosFahrenheit = document.getElementById('Temperatura').value;
	gradosCentigrados = (gradosFahrenheit - 32) * 5 / 9;

	console.log (gradosFahrenheit + " grados Fahrenheit equivalen a " + gradosCentigrados + " grados Centígrados.");


	
}

function CentigradosFahrenheit () 
{
	var gradosFahrenheit;
	var gradosCentigrados;

	gradosCentigrados = document.getElementById('Temperatura').value;
	gradosFahrenheit = (gradosCentigrados * 9 / 5) + 32;

	console.log (gradosCentigrados + " grados Centígrados equivalen a " + gradosFahrenheit + " grados Fahrenheit.");
	
}

//(32 °F − 32) × 5/9 = 0 °C


//(0 °C × 9/5) + 32 = 32 °F

