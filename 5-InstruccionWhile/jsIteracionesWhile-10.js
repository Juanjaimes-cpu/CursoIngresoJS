/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//1-	declarar variables.
	let numero;
	let seguir;
	let positivos = 0;
	let negativos = 0;
	let contP = 0;
	let contN = 0;
	let contcero = 0;
	let pares = 0;
	let promedioP = 0;
	let promedioN = 0;
	let diferencia;

	//2-	generar un bucle (do while).
	do{	
	//3-	pido el numero.
		numero = parseInt(prompt("Ingrese un numero:	"));
		while(isNaN(numero)){
	//3.1-valido que sea numero.
			numero = parseInt(prompt("Ese no es un numero. Reingrese un numero:	"));
		}
	//4-	identificar el signo del numero (positivo, negativo o cero).
	//------------------------------------------------------
	//4.1-si numero es positivo (lo acumulo, lo cuento, ).
		if( numero > 0){
			positivos += numero;
			contP++;

	//4.2-si numero es negativo (lo acumulo, lo cuento, ).
		}else if (numero < 0){
			negativos += numero;
			contN++;

	//4.3-si el numero es cero (lo cuento).
		}else{
			contcero += numero;
		}

	//5-identificar si el numero es par.
		if(numero %2 == 0){
	//5.1-si es par lo cuento.
			pares++;
		}

	//6-preguntar si quiere ingresar otro numero.
		seguir = prompt("Quiere ingresar otro numero?:	");
		}while (seguir == `s`);

	//7-calcular los promedios.
		if( positivos != 0){
		promedioP = contP / positivos;
		}
		if (negativos != 0){
		promedioN = contN / negativos;
		}

		//8-calcular la diferencia.
		diferencia = positivos - negativos;

		//9-mostrar los resultados.
		alert("La suma de los negativos es: " + negativos + "\n" +
		"La suma de los positivos es: "  + positivos + "\n" +
		"La cantidad de positivos es: "  + contP + "\n" +
		"La cantidad de negativos es: "  + contN + "\n" +
		"La cantidad de ceros es: "  + contcero + "\n" +
		"La cantidad de numeros pares es: "  + pares + "\n" +
		"el promedio de los numeros positivos es: "  + promedioP + "\n" +
		"el promedio de los numeros negativos es: "  + promedioN + "\n" +
		"La diferencia entre positivos y negativos es: "  + diferencia);
}    
   
//FIN DE LA FUNCIÓN


/*
-------ESTRATEGIA DE RESOLUCION--------

1-	declarar variables.
*********** comienzo de do while ***********.

2-	generar un bucle (do while).
3-	pido el numero.
3.1-valido que sea numero.
4-	identificar el signo del numero (positivo, negativo, cero)
4.1-si numero es positivo (lo acumulo, lo cuento, ).
4.2-si numero es negativo (lo acumulo, lo cuento, ).
4.3-si el numero es cero (lo cuento).
5-	identificar si el numero es par.
5.1-si es par lo cuento.
6-	preguntar si quiere ingresar otro numero.

*********** fin do while ***********.

7-	calcular los promedios.
8-	calcular la diferencia.
9-	mostrar los resultados.
*/