function mostrar()
{
	var edad;

	edad = document.getElementById('edad').value;

	/*if(edad<18)
	{
		if(edad>12)//Le agrego un if para tomar la intersección entre 13 y 17.
		{
			alert("Es adolescente");
		}
	}*/

	if(edad<18 && edad>12)//trabaja por cortocircuito. Si igualo la edad a 33 directamente no entra.
	{
		alert("Es adolescente");
	}

	/*if(!(edad>17 || edad>12))
	{
		alert("Es adolescente")
	}*/
	//Si niego (!) me muestra lo que no es mayor a 17 O lo que no es menor a 12
//tomo la edad  



}//FIN DE LA FUNCIÓN