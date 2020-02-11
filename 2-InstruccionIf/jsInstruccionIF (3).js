function mostrar()
{
	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	
	if(edad>17) //usa el microprocesador
	{
		alert("mayores");
	}
	else //no usa el microprocesador.
	{
		alert("menores");
	}
//tomo la edad  


}//FIN DE LA FUNCIÓN