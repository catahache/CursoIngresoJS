/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var piedra;
var papel;
var tijera;
var jugador;
var resultado;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random()*3) + 1;
	console.log(eleccionMaquina);

	switch(eleccionMaquina)
	{
		case 1:
			eleccionMaquina = piedra;
			break;
		case 2:
			eleccionMaquina = papel;
			break;
		case 3:
			eleccionMaquina = tijera;
			break;
	}
		

}//FIN DE LA FUNCIÓN

function piedra()
{
	switch(eleccionMaquina)
	{
		case piedra:
			alert("Empataste");
			break;
		case papel:
			alert("Perdiste");
			break;
		case tijera:
			alert("Ganaste");
			break;
	}

}//FIN DE LA FUNCIÓN
function papel()
{

	switch(eleccionMaquina)
	{
		case piedra:
			alert("Ganaste");
			break;
		case papel:
			alert("Empataste");
			break;
		case tijera:
			alert("Perdiste");
			break;
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
	{
		case piedra:
			alert("Perdiste");
			break;
		case papel:
			alert("Ganaste");
			break;
		case tijera:
			alert("Empataste");
			break;
	}


}//FIN DE LA FUNCIÓN