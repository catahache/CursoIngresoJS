/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () 
{
	var numeroPositivo;
	var cantidadPares;

	numeroPositivo = document.getElementById('numero').value;
	numeroPositivo = parseInt(numeroPositivo);
	cantidadPares = 0;

	for(numeroPositivo = numeroPositivo; numeroPositivo > -1; numeroPositivo--)
	{
		if(numeroPositivo % 2 == 0)
		{
			document.write(numeroPositivo + " es par");
			cantidadPares++;
		}
		
	}
	console.log("La cantidad de pares es: " + cantidadPares);

}

function NumerosImpares ()
{
	var numeroPositivo;
	var cantidadImpares;

	numeroPositivo = document.getElementById('numero').value;
	numeroPositivo = parseInt(numeroPositivo);
	cantidadImpares = 0;

	for(numeroPositivo = numeroPositivo; numeroPositivo > -1; numeroPositivo--)
	{
		if(numeroPositivo % 2 == 1)
		{
			document.write(numeroPositivo + " es impar");
			cantidadImpares++;
		}
	}
	document.write("La cantidad de impares es: " + cantidadImpares);

}

function NumerosDivisibles()
{
	var numeroPositivo; //dividendo
	var i; //divisor
	var cantidadDivisibles;

	numeroPositivo = document.getElementById('numero').value;
	numeroPositivo = parseInt(numeroPositivo);
	cantidadDivisibles = 0;

	for(i=1;i<101;i++)
	{
		if(numeroPositivo> -1)
		{
			if(i % numeroPositivo == 0) //si el resto de la division entre i y numeroP da 0
			{
				document.write(numeroPositivo + "es divisor de " + i);				
				cantidadDivisibles++;
			}
		}	
	}
	document.write(numeroPositivo + " es divisor de " + cantidadDivisibles + " numeros del 1 al 100");
}

function VerificarPrimo ()
{
	var numeroPositivo;
	var i;
	var bandera;

	numeroPositivo = document.getElementById('numero').value;
	numeroPositivo = parseInt(numeroPositivo);
	bandera = 0; //lo que no entre en el for o el if sera primo(por eso 1 y 2 salen como primos)

	for(i=2; i < numeroPositivo; i++)//2 es el divisor mas bajo. i tiene que ser menor al numeroP porque el anterior es 1 (primo)
	{
		if(numeroPositivo % i == 0)
		{
			bandera = 1;
			document.write("El numero " + numeroPositivo + " NO es primo.");
			break;
		}
	}

	if (bandera == 0)//si no es afectada por el for o el if.
	{
		document.write("El numero " + numeroPositivo + " es primo.");
	}
}

function NumerosPrimos () //revisar
{
	var numeroPositivo;
	var divisor;
	var i;
	var bandera;

	bandera = 0;

	numeroPositivo = document.getElementById('numero').value;
	numeroPositivo = parseInt(numeroPositivo);

	for(numeroPositivo = numeroPositivo; numeroPositivo> -1; numeroPositivo--)
	{
		for(divisor = 2; divisor < numeroPositivo; divisor++)
		{
			if(numeroPositivo % divisor == 0)
			{
				bandera = 1; 
				console.log("El numero " + numeroPositivo + " NO es primo");
				break;
			}
			else
			{
				if(bandera == 0)
				{
					console.log("El numero " + numeroPositivo + " SI es primo");
					break;
				}
			}
		}
	}
}


























