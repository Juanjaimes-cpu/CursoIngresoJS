function mostrar()
{
	let destino;
	let estacion;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				alert("Se viaja.");
			}
			else{
				alert("No se viaja.");
			}
			break;
		case "Verano":
			if (destino == "Cataratas"){
				alert("Se viaja.");
			}
			else if(destino == "Mar del plata"){
				alert("Se viaja.");
				}
			else{
				alert("No se viaja.");
				}
			break;
		case "Otoño":
				alert("Se viaja.");
				break;
		case "Primavera":
			if (destino == "Bariloche"){
				alert("No se viaja.");
			}
			else{
				alert("Se viaja.");
			}
				}
			}


	//FIN DE LA FUNCIÓN