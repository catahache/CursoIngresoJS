function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById('estadoCivil').value;

	if(edad>18)
	{
		if (estadoCivil == "Soltero")
		{
			alert("Es soltero y no es menor");
		}	
	}
//tomo la edad  

	


}//FIN DE LA FUNCIÓN