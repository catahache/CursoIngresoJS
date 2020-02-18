function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			console.info("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			console.info("Abrigate que hace frio");
			break;
		default:
			console.info("Ya pasamos el frio, ahora calor!!!.");
			break;
	}



}//FIN DE LA FUNCIÓN