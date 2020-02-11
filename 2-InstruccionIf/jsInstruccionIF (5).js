function mostrar()
{
	var edad;

	edad = document.getElementById('edad').value;

	/*if(edad>17)
	{
		alert("No es adolescente");
	}
	if(edad<13)
	{
		alert("No es adolescente");
	}*/
	
	if(!(edad<18 && edad>12))//Si lo niego, me muestra todo lo que no es >13 y <18
	{
		alert("No es adolescente");
	}
	
//tomo la edad  


}//FIN DE LA FUNCIÓN


