function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt ("Ingrese el primer numero");
	numeroDos = prompt ("Ingrese el segundo numero");

	if(numeroUno == numeroDos)
	{
		resultado = numeroUno + numeroDos;
	}
	else
	{
		if (numeroUno > numeroDos)
		{
			resultado = parseInt(numeroUno) - parseInt (numeroDos);
		}
		else
		{
			resultado = parseInt(numeroUno) + parseInt (numeroDos);
		}
	}
	
	if (resultado > 10)
	{
		alert("La suma es "+ resultado +" y supero el 10");
	}
	else
	{
		alert ("El resultado es "+ resultado);
	}

	

	
}


