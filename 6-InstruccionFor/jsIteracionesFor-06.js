function mostrar()
{
	let numero;
	let contador = 0;

	numero = parseInt(prompt("ingrese un numero: "));

	while( isNaN(numero) || numero <= 0){
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
	}

	for	(let i = 1; i <= numero; i++){
	if	(i % 2 == 0){
		alert(i);
		contador++;
}
}
alert("Cantidad de pares encontrados: " + contador);
}

//FIN DE LA FUNCIÓN