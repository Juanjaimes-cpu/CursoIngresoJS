function mostrar()
{

	let numero;
	let contador = 0;

	numero = parseInt(prompt("ingrese un numero: "));

	while( isNaN(numero) || numero <= 0){
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
	}

	for	(let i = 1; i <= numero; i++){
	if	(numero % i == 0){ //busco la cantidad de divisores encontrados por el numero ingresado por el usuario.
		alert(i);
		contador++;
}
}
alert("Cantidad de divisores encontrados: " + contador);
}
//FIN DE LA FUNCIÓN