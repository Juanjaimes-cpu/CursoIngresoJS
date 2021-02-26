function mostrar()
{

	let repeticiones;
	
	repeticiones = parseInt(prompt("ingrese el número de repeticiones: "));
	while( isNaN(repeticiones)){
		repeticiones = parseInt(prompt("Eso no es un numero. Ingrese el numero de repeticion: "));
	}
	for(let i = 0; i < repeticiones; i++ ){
		alert(i + " Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN