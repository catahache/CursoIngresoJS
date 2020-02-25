function mostrar()
{
	var sistemaSolar;
	sistemaSolar = prompt("Ingresar un planeta del sistema solar");

	switch(sistemaSolar)
	{
		case "tierra":
			console.log ("Acá vivimos");
			break;
		case "mercurio":
		case "venus":
			console.log("Acá hace más calor");
			break;
		case "jupiter":
		case "marte":
		case "saturno":
		case "neptuno":
		case "urano":
		case "pluton":
			console.log("Acá hace más frío");
			break;
		default:
			console.log("No es un planeta válido");
			break;
	}
}
