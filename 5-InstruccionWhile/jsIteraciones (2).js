/*al presionar el botón mostrar 10 
repeticiones con números DESCENDENTES, 
desde el 10 al 1.*/
function mostrar()
{
	var numero;

	numero = 10;
	numero = parseInt(numero);

	while (numero > 0)
	{
		alert(numero);
		numero = numero - 1;
	}

}//FIN DE LA FUNCIÓN