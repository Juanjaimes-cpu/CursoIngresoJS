/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let seguir;
	let totalP = 0;//acumulador
	let totalN = 1;//acumulador
	let contadorN = 0;

	do{
		numero = parseInt(prompt("Ingrese un numero:	"));

		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:	"));
		}
			if(numero >= 0){
				totalP += numero;
			}
			else{
				totalN *= numero;
				contadorN++;
			}

		//alert("Es un numero");

		seguir = prompt("¿Quiere ingresar otro numero?:	");

	}while( seguir == `s`);

	if(contadorN == 0){
		totalN = 0;
	}
	
	document.getElementById("txtIdSuma").value = totalP;
	document.getElementById("txtIdProducto").value = totalN;

}//FIN DE LA FUNCIÓN

// ESTRATEGIA DE RESOLUCION
// 1- declaracion de variables (numero, acumulador de positivos, acumulador de negativos, respuesta del usuario)
// 2- generar un bucle que se va a ejecutar cuando quiera el usuario
// 3- pedir numero al usuario
// 3.1- validar si el dato ingresado por el usuario sea un numero.
// 4- sumar numero positivos
// 5- multiplicar numero negativos
// 6- preguntar nuevamente si quiere ingresar otro numero
// 7- mostrar la informacion