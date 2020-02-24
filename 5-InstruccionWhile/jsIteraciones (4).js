/*al presionar el botón pedir un número 
entre 0 y 9 inclusive.*/
function mostrar()
{
	var numero;
	var valorDeVerdad;

	valorDeVerdad=isNaN(numero);//is not a number

	numero = prompt("ingrese un número entre 0 y 9");
	numero = parseInt(numero);

	while (isNaN(numero) || numero>10 || numero<0)//Si no pedis numero te lo pide de vuelta. Si alguna de todas estas no se cumple, vuelve a entrar
	{
		numero = prompt("ingrese un número entre 0 y 9");
		numero = parseInt(numero);
	}
	document.getElementById('Numero').value = numero;
}//FIN DE LA FUNCIÓN