/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

function comenzar()
{
	contadorIntentos = 0; //inicializo el contador en 0
	numeroSecreto = Math.floor(Math.random() * 100)+1;
	console.log(numeroSecreto);
}

function verificar()
{
	contadorIntentos = contadorIntentos + 1; //cada vez que el user utilice la funcion verificar, se suma 1
	numeroIngresado = document.getElementById('numero').value;

	if (numeroIngresado > numeroSecreto)
	{
		alert("Te pasaste");
	}
	else
	{
		if (numeroIngresado < numeroSecreto) 
		{
			alert ("Te falta");
		}
		else
		{
			alert ("Sos un campeón!!! y en solo " + contadorIntentos + " intentos");
		}
	}
	
	document.getElementById('intentos').value = contadorIntentos; //siempre van adentro de funciones
}


