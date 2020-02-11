function mostrar()
{
	var botonRandom;

	botonRandom = document.getElementById('FormIngreso').value;

	botonRandom = Math.floor(Math.random() * 10) + 1;

	console.log(botonRandom);
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN