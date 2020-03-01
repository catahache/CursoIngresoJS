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

	if(eleccionMaquina == 1)
	{
		piedra = eleccionMaquina;
	}
	else
	{
		if(eleccionMaquina == 2)
		{
			papel = eleccionMaquina;
		}
		else
		{
			tijera = eleccionMaquina;
		}
	} 
	

}//FIN DE LA FUNCIÓN

function piedra()
{
	if(eleccionMaquina == tijera)
	{
		resultado = alert("Ganaste!");
	}
	else
	{
		if(eleccionMaquina == papel)
		{
			resultado = alert("Perdiste");
		}
		else
		{
			if(eleccionMaquina == piedra) //no anda
			{
				resultado = alert("Empataste");
			}
		}
	}

}//FIN DE LA FUNCIÓN
function papel()
{

	if (eleccionMaquina == piedra)
	{
		resultado = alert("Ganaste!");
	}
	else
	{
		if(jugador == tijera)
		{
			resultado = alert("Perdiste");
		}
		else
		{
			if(eleccionMaquina == papel) //no anda
			{
				resultado = alert("Empataste");
			}
		}
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina == papel)
	{
		resultado = alert("Ganaste!");
	}
	else
	{
		if(eleccionMaquina == piedra)
		{
			resultado = alert("Perdiste");
		}
		else
		{
			if(eleccionMaquina == tijera) //no anda
			{
				resultado = alert("Empataste");
			}
		}
	}


}//FIN DE LA FUNCIÓN