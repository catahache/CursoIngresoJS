/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//modulo %
	var dividendo;
	var divisor;
	var resultado;

	dividendo = document.getElementById('numeroDividendo').value;
	console.log("Ingreso: " + dividendo);
	primerNumero = parseInt(dividendo);
	divisor = document.getElementById('numeroDivisor').value;
	console.log("Ingreso: " + divisor);
	primerNumero = parseInt(divisor);

	resultado = dividendo % divisor;

	console.log(resultado); 

	
}
