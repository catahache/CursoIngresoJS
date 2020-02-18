function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch (mesDelAño)
{
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		console.info("Este mes tiene 30 días");
		break;
	case "Febrero":
		console.info("Este mes tiene 28 días.");
		break;
	default: 
		console.info("Este mes tiene 31 días.")
}



}//FIN DE LA FUNCIÓN