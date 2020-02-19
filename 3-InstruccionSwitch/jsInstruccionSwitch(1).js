function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Enero":
			console.info("Que comiences bien el año!!!");
			break;
		case "Marzo":
			console.info("a clases!!!");
			break;
		case "Julio":
			console.info("se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			console.info("Felices fiestas!!!");
			break;
	}



}//FIN DE LA FUNCIÓN
//adentro del switch cada case busca el break (busca para abajo, sigue el lineamiento de la escritura)