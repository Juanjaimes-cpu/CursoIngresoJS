function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("En este destino hace frio");
			break;
		default:
			alert("En este destino hace calor");
	}

}//FIN DE LA FUNCIÓN