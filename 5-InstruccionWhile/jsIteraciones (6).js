/*Al presionar el botón pedir 5 números e informar 
la suma acumulada y el promedio.*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while (contador < 5)
	{
		numeroIngresado = prompt ("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador + 1; // contador++
		acumulador = acumulador + numeroIngresado;
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN