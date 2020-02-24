/*Al presionar el botón pedir un sexo 'f' para femenino, 
'm' para masculino.*/
function mostrar()
{
	var sexo;

	sexo = prompt("ingrese f ó m .");

	while (sexo != "m" && sexo != "f")
	{
		sexo = prompt("ingrese f ó m.");
	}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN