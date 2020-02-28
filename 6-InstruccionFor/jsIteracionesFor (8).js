function mostrar()
{
	var numeroIngresado;
	var i;
	var bandera;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	bandera = 0;//lo que no entre en el for o el if sera primo(por eso 1 y 2 salen como primos)


	for(i=2; i<numeroIngresado;i++)//i es 2 porque es el divisor mas bajo
	{
		if(numeroIngresado%i==0)
		{
			bandera = 1;
			break; //cuando encuentro un divisor no sigue dividiendo. El num NO es primo.
		}
	}

	if (bandera == 0)
	{
		alert("El numero "+numeroIngresado+" es primo");
	}



}//FIN DE LA FUNCIÓN