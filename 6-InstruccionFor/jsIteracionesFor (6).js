function mostrar()
{
	var i;
	var numeroIngresado;

	numeroIngresado = prompt("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(i=1; ; i++)//i=1 para que entre en 1 
	{

		if(i % 2 == 0)
		{
			console.log(i + " es par");
		}
		else
		{
			console.log(i + " es impar")
		}


		if(i==numeroIngresado)
		{
			break;
		}
	}





}//FIN DE LA FUNCIÓN