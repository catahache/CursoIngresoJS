function mostrar() //RESOLVER
{
	var numeroIngresado;
	var letraIngresada;
	var respuesta;

	respuesta = prompt("Ingresar 'si' para ingresar letra y numero");

	for(respuesta = 'si'; respuesta === 'si'; )
	{
		letraIngresada = prompt("Ingresar letra");

		for(letraIngresada=letraIngresada; !isNaN(letraIngresada); )
		{
			console.log("Letra ingresada: " + letraIngresada);
		}

		numeroIngresado = prompt("Ingresar número;");
		numeroIngresado = parseInt(numeroIngresado);

		for(numeroIngresado=numeroIngresado; numeroIngresado > -100 && numeroIngresado < 100; )
		{
			console.log("Numero ingresado: " + numeroIngresado);
		}
	}
}
