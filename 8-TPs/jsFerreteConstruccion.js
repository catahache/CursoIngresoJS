/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var cantidadDeAlambre;
	var cantidadDeVueltas;

	largo = document.getElementById('Largo').value;
	largo = parseInt(largo);
	ancho = document.getElementById('Ancho').value;
	ancho = parseInt(ancho);
	cantidadDeVueltas = 3;

	cantidadDeAlambre = ((largo + ancho) * 2) * cantidadDeVueltas;

	console.log ("Cantidad de alambre necesaria: " + cantidadDeAlambre);

}
function Circulo () 
{
	var radio;
	var circunferencia;
	var cantidadDeAlambre;
	var cantidadDeVueltas;

	radio = document.getElementById('Radio').value;
	circunferencia = 2 * Math.PI * radio;
	cantidadDeVueltas = 3;

	cantidadDeAlambre = circunferencia * cantidadDeVueltas;

	console.log ("Cantidad de alambre necesaria: " + cantidadDeAlambre);

}
function Materiales () 
{
	var largo;
	var ancho;
	var cantidadDeCemento;
	var cantidadDeCal;

	largo = document.getElementById('Largo').value;
	largo = parseInt(largo);
	ancho = document.getElementById('Ancho').value;
	ancho = parseInt(ancho);

	cantidadDeCemento = (largo * ancho) * 2;
	cantidadDeCal = (largo * ancho) * 3;

	console.log ("Cantidad de Cemento necesaria: " + cantidadDeCemento + " bolsas.");
	console.log ("Cantidad de Cal necesaria: " + cantidadDeCal + " bolsas.");
	
}