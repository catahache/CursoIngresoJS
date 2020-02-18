function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
		console.info("Este mes no tiene más de 29 días.");
		break;
	default:
		console.info("Este mes tiene 30 o más días");
		break;
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN