function mostrar()
{
	var numeroIngresado;
	var i;
	var contador;

	contador = 0;
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);



	for(i=2; i<numeroIngresado;i++)//i es 2 porque es el divisor mas bajo
	{
		if(numeroIngresado%i==0)
		{
			contador = 1;
			break; //cuando encuentro un divisor no sigue dividiendo
		}
	}

	if (contador == 0)
	{
		alert("El numero "+numeroIngresado+" es primo");
	}



}//FIN DE LA FUNCIÓN