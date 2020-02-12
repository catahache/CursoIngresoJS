/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var precioLamparas;
	var cantidadLamparas;
	var precioConDescuento;
	var marca;

	precioLamparas = 35;
	precioLamparas = parseInt(precioLamparas);
	cantidadLamparas = document.getElementById('Cantidad').value;
	cantidadLamparas = parseInt(cantidadLamparas);
	precioConDescuento = parseInt(precioConDescuento);
	marca = document.getElementById('Marca').value;

	if (cantidadLamparas > 5)
	{
		precioConDescuento = (precioLamparas * cantidadLamparas) * 0.50;
	}
	else
	{
		if (marca == "ArgentinaLuz" && cantidadLamparas == 5)
		{
			precioConDescuento = (precioLamparas * cantidadLamparas) * 0.60;
		}
		else
		{
			if (marca == "ArgentinaLuz" && cantidadLamparas == 4)
			{
				precioConDescuento = (precioLamparas * cantidadLamparas) * 0.75;
			}
			else
			{
				if (marca == "ArgentinaLuz" && cantidadLamparas == 3)
					{
						precioConDescuento = (precioLamparas * cantidadLamparas) * 0.85;//descuento 15% 
					}
			}
		}
	} //pisteando como una campeona por ahora
	if(marca == "FelipeLamparas" && cantidadLamparas == 4)
	{
		precioConDescuento = (precioLamparas * cantidadLamparas) * 0.75;//descuento 25%
	}
	else
	{
		if (marca == "FelipeLamparas" && cantidadLamparas == 3) 
		{
			precioConDescuento = (precioLamparas * cantidadLamparas) * 0.90;//decuento 10%
		}
	}
	if (marca != "ArgentinaLuz" && cantidadLamparas == 5)
	{
		precioConDescuento = (precioLamparas * cantidadLamparas) * 0.70;//des 30%
	}
	else
	{
		if (marca != "ArgentinaLuz" && marca != "FelipeLamparas" && cantidadLamparas == 4)
		{
			precioConDescuento = (precioLamparas * cantidadLamparas) * 0.80;//des 20%
		}
		else
		{
			if (marca != "ArgentinaLuz" && marca != "FelipeLamparas" && cantidadLamparas == 3)
			{
				precioConDescuento = (precioLamparas * cantidadLamparas) * 0.95;//des 5%
			}
		}
	}
	if (precioConDescuento > 120)
	{
		precioConDescuento = (precioConDescuento * 1.10) //sumo IIBB
		alert("Usted pagó " + precioConDescuento * 10 / 100 + " de IIBB.")
	}

	document.getElementById('precioDescuento').value = precioConDescuento;
}