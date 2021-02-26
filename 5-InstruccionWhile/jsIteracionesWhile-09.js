/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let max;
	let min;
	let numero;
	let seguir;
	let flag = 0;
	
	do{	
		numero = parseInt(prompt("Ingrese un numero:	"));
	
		while(isNaN(numero)){
			numero = parseInt(prompt("Ese no es un numero. Reingrese un numero:	"));
		}
	
		if( flag == 0 ){
				max = numero;
												//aca caigo si es la primer iteracion.
				min = numero;		
				flag = 1;
		}
		else{
												//aca caigo si entro en las restante interaciones.
		
		if(numero > max){
			max = numero;
		}else if(numero < min){
			min = numero;
		}
	}
		seguir = prompt("Quiere ingresar otro numero?:	");
		} while (seguir == `s`);
	
		document.getElementById("txtIdMaximo").value = max;
		document.getElementById("txtIdMinimo").value = min;
	}
	//}
	
	//FIN DE LA FUNCIÓN
	
	//ESTRATEGIA DE RESOLUCION.
	/*
	1- declarar variables(max, min, numero, seguir, ).
	2-*** generar un bloque que se repita mientras el usuario quiera( do while).
	3-(cosas que vandentro de la estructura repetitiva).
	3.1- pedir un numero.
	3.2- valido que sea un numero.
	4- fijarme si estoy en la primer interacion o no.
	4.1- si estoy en la primer interacion asigno el numero ingresado como maximo y minimo hasta el momento
	4.2- si no estoy en la primer interacion, debo comparar...
	el numero ingresado para ver si es un nuevo maximo o un nuevo minimo. si es asi...
	 actualizo la variable que corresponda con el numero ingresado.
	 5- pregunto si quiere seguir.***.
	
	 -------------(fuera de lo repetitivo..)-------------
	
	6- mostrar el maximo y el minimo.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	*/