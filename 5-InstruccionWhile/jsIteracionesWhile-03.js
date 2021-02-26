/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;//pido variavles

	clave = prompt("ingrese clave: "); //pido el dato

	while (clave != "utn750"){		//aca me fijo si el dato es vlaido		valido -->  false
			//informo que el dato es invalido
			clave = prompt("clave invalida, reingrese clave: ");	//pido el dato nuevamente
	}
			alert("¡clave correcta!");//aca puedo utilizar el dato ya valido
	
}//FIN DE LA FUNCIÓN