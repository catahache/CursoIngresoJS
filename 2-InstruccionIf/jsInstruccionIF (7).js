function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById('estadoCivil').value;



	/*if(edad<18)
	{
		if(estadoCivil != "Soltero")
		{
			alert("Es muy pequeño para NO ser soltero");
		}
	}*/

	if(edad<18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	//Cualquiera de las dos formas funciona.

 //tomo la edad  
}//FIN DE LA FUNCIÓN