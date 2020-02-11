function mostrar()
{
	var botonRandom;

	botonRandom = document.getElementById('FormIngreso').value;
	botonRandom = Math.floor(Math.random() * 10) + 1;

	if(botonRandom > 8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(botonRandom < 4)
		{
			alert("Vamos, la próxima se puede");
		}
		else
		{
			alert("Aprobó");
		}
	}
	
	
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN