/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
numero = parseInt(prompt("Ingrese un numero entre 0 y 9 inclusive: "));
/*while(!(numero >= 0 && numero <= 9)){
    numero = parseInt(prompt("Dato invalido. Reingrese un numero entre 0 y 9 inclusive: "));
}
document.getElementById("txtIdNumero").value = numero;*/

while(numero < 0 || numero > 9 || isNaN(numero) ){
    numero = parseInt(prompt("Dato invalido. Reingrese un numero entre 0 y 9 inclusive: "));
}
document.getElementById("txtIdNumero").value = "Su numero es: " + numero;
	
}//FIN DE LA FUNCIÓN