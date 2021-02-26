/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let total = 0;
	let respuesta = `s`;
	let promedio;
	let contador = 0;

	/*
	do{
		alert ("Hola");
		respuesta = prompt("Quiere que lo saludo nuevamente?: ");
	}while(respuesta == `s`);
		alert("Chau");
	}
	*/
	while(	respuesta ==  `s`){
		numero = parseInt(prompt("ingrese un numero: "));
		total += numero; //total = total + numero
		contador++;//Con contador genero el saber cuantas veces ingresaron un numero
		respuesta = prompt("¿Quiere ingresar otro numero?, si la respuesta es si, entonces escriba la letra s");
	}
	
	promedio = total / contador;

	document.getElementById("txtIdSuma").value = total;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN