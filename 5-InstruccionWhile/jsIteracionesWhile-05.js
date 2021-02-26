/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	//pido el dato
	sexo = prompt("ingrese sexo f / m: ")//.toLowerCase();
	//valido el dato con while
	// opcion A= pregunto si la variable a toma algun valor invalido
	// opcion B= pregunto si la variable B toma algun valor invalido
	//!( sexo == `f` || sexo == `M` || sexo == `F` || sexo == `M` );
	while(	(sexo != `f` &&	sexo !=`m` && sexo != `F`	&&	sexo != `M`)	){		//informo que el dato es invalido y lo pido nuevamente
		sexo = prompt("Error, sexo invalido. Reingrese el sexo F / M")//.toLowerCase();
	}	
	//si el flujo del programa llega hasta aca significa que la variable sexo tengo cargado un sexo valido
	document.getElementById("txtIdSexo").value = sexo;
	}//FIN DE LA FUNCIÓN