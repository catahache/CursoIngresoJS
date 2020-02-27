function mostrar()
{
	var i;
	var numeroIngresado;
	var contador;

	numeroIngresado = prompt("Ingresar numero");
	numeroIngresado = parseInt(numeroIngresado);
	contador = 0;

	for(i=1; i<numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			console.log(i+" es divisor de "+numeroIngresado);
			contador++;
		}
	}

	console.log("Cantidad de nums primos encontrada: "+contador);




}//FIN DE LA FUNCIÓN