function mostrar()
{
	let estacion;
	let destino;
	let preciofinal;
	let aumento = 0;
	let descuento = 0;
	const PRECIO = 15000;

		estacion = document.getElementById("txtIdEstacion").value;
		destino = document.getElementById("txtIdDestino").value;

		switch (estacion) {
			case "Invierno":
			if (destino == "Bariloche"){
				aumento = 20;
			}
			else if ( destino == "Mar del plata"){
				descuento = 20;
			}
			else{
				descuento = 10;
			}
			break;
			case "Verano":
				if (destino == "Bariloche"){
					descuento = 20;
				}
				else if ( destino == "Mar del plata"){
					aumento = 20;
				}
				else{
					aumento = 10;
				}
				break;
			case "Otoño":
			case "Primavera":
				if ( destino != "Cordoba"){
					aumento = 10;
				}
				break;
				}
				if(aumento != 0){
					preciofinal = PRECIO + PRECIO * aumento / 100; 
				}
				else if ( descuento != 0){
					preciofinal = PRECIO - PRECIO * descuento / 100; 
				}
				else{
					preciofinal = PRECIO;
				}
				alert("Precio final $" + preciofinal);
		
		} 
//FIN DE LA FUNCIÓN