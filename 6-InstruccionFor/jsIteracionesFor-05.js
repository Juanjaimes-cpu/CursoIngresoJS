function mostrar()
{
	let numero;
	

for (   ;      ;    ){
	numero = parseInt(prompt("ingrese un numero: "));
	while( isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
	}
	alert(numero);
	if(numero == 9){
		break;
	}
}
	}

//FIN DE LA FUNCIÓN