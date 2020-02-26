/*al presionar el botón mostrar 10 
repeticiones con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	var i;

	for(i=1; i<11; i++)
	{
		document.write("for" + i + "<br>");
	}
	/*var contador;

	contador = 0;

	while(contador<10)
	{
		contador ++;
		console.log(contador);
	}*/

	/*var i; //iteracion
	var nombre;

	for(i = 0; nombre!="jose"; i ++)//el primero se ejecuta una sola vez,
	//la logica (lo que me tiene que dar v o f) puede estar rel o no a lo demas
	{
		nombre = prompt("ingrese nombre");
		console.log("for: " + i);
	}*/
	
	/*contador = 0;
	for(; contador<10; )
	{
		console.log("for: " + contador);
		contador ++;
		if(contador==10)
		{
			break; //tengo que romper en la logica
		}
	}*/
	


	/*do//se ejecuta minimo una vez aunque haya hecho mal la logica
	{
		//console.log(contador);//muestra del 0 al 9
		contador++; //contador=contador+1;
		console.log(contador);//muestra del 1 al 10
	}while (contador<10);*/
}