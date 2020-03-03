/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
-nombre del huésped
-cantidad de personas 
-cantidad de dia de estadia 
-forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var nombre;
	var cantidadPersonas;
	var cantidadDias;
	var formaPago;
	var respuesta;
	var contador;
	var maximoPersonas;
	var minimoPersonas;
	var maximoPersonasNombre;
	var promedio;
	var maximoDias;
	var maximoDiasCantidadPersonas;
	var maximaFormaPago;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfectivo;
	var acumulador;

	contador = 0;
	acumulador = 0;
	contadorQR = 0;
	contadorTarjeta = 0;
	contadorEfectivo = 0;

	for(respuesta = "si"; respuesta === "si";)
	{
		for(nombre = 0; !isNaN(nombre);)
		{
			nombre = prompt("Ingrese nombre");
		}
		
		for(cantidadPersonas = 0; cantidadPersonas < 1; )
		{
			cantidadPersonas = prompt("Ingrese cantidad de personas");
			cantidadPersonas = parseInt(cantidadPersonas);
		}

		
		for(cantidadDias = 0; isNaN(cantidadDias) || cantidadDias < 1; )
		{
			cantidadDias = prompt("Ingrese cantidad de dias");
			cantidadDias = parseInt(cantidadDias);
			acumulador = acumulador + cantidadDias;
		}


		for(formaPago = 1; formaPago != "efectivo" && formaPago != "tarjeta" && formaPago != "QR"; )
		{
			formaPago = prompt ("Ingrese forma de pago - efectivo, tareta o QR-");
		}

		console.log("Personas: " + cantidadPersonas);
		console.log("Dias: " + cantidadDias);
		console.log("forma pago: " + formaPago);

		contador ++;


		if(contador == 1 || maximoPersonas<cantidadPersonas)
		{
			maximoPersonas = cantidadPersonas;
			maximoPersonasNombre = nombre;
		}

		if(contador == 1 || maximoDias<cantidadDias)
		{
			maximoDias = cantidadDias;
			maximoDiasCantidadPersonas = cantidadPersonas;
		}
		
		switch(formaPago)
		{
			case "efectivo":
				contadorEfectivo++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
			default:
				contadorQR++;
				break;
		}

		respuesta = prompt("Para continuar ingrese si");
	}//for respuesta

	if(contadorEfectivo == contadorTarjeta && contadorEfectivo == contadorQR)
	{
		maximaFormaPago = "No hay formma de pago mas utilizada";
	}
	else
	{
		if(contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorTarjeta)
		{
			maximaFormaPago = contadorEfectivo;
		}
		else
		{
			if(contadorQR>contadorTarjeta)
			{
				maximaFormaPago = contadorQR;
			}
			else
			{
				maximaFormaPago = contadorTarjeta;
			}
		}
	}
	

	promedio = acumulador/contador;
	console.log(maximoPersonasNombre);
	console.log(maximoDiasCantidadPersonas);
	console.log(maximaFormaPago);
	document.write("<br> nombre del huesped con mas invitados: " + maximoPersonasNombre);
	document.write("<br> cantidad de personas que se quedaron mas dias: " + maximoDiasCantidadPersonas);
	document.write("<br> forma de pago mas utilizada: "+ maximaFormaPago);
	document.write("<br> promedio de cantidad de dias por reserva "+promedio);

}//funcion
