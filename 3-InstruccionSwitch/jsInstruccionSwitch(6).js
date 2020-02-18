function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
laHora= parseInt(laHora);

switch(laHora)
{
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
		console.info("Es de mañana");
		break;
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
		console.info("Es de tarde");
		break;
	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
		console.info("Es de noche");
		break;
	default:
		console.info("la hora no existe.")
}


}//FIN DE LA FUNCIÓN