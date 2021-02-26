/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let marca = document.getElementById("Marca").value;
	let cantidad = document.getElementById("txtIdCantidad").value;
	let precio = 35;
	let descuento;
	let precioFinal;
	let impuesto;


	precio = parseInt(precio);
	descuento = parseInt(descuento);
	precioFinal = parseInt(precioFinal);
	impuesto = parseInt(impuesto);
	cantidad = parseInt(cantidad);

 	switch(cantidad)
 	{
 		case 6:
 		descuento = precio * 50/100;
 		precioFinal = cantidad * precio - descuento;
 		document.getElementById("txtIdprecioDescuento").value = precioFinal;
 		if(precioFinal >= 120)
 		{
 			impuesto = precioFinal * 10/100;
 			precioFinal= impuesto + precioFinal;
 			alert("el precio final con impuesto es: "+ precioFinal + " y el impuesto agregado es de: " + impuesto );
 		}
 		break;

 		case 5:

 		if (marca == "ArgentinaLuz") 
 		{
 			descuento = precio * 40/100;
 			precioFinal = cantidad * precio - descuento;

 			document.getElementById("txtIdprecioDescuento").value = precioFinal;
 			
 		}
 		else
 		{
 			descuento = precio * 30/100;
 			precioFinal = cantidad * precio - descuento;
 			document.getElementById("txtIdprecioDescuento").value = precioFinal;

 		}

 		if(precioFinal >= 120)
 		{
 			impuesto = precioFinal * 10/100;
 			precioFinal= impuesto + precioFinal;
 			alert("el precio final con impuesto es: "+ precioFinal + " y el impuesto agregado es de: " + impuesto );
 		}

 		break;

 		case 4:
 		if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 		{
 			descuento = precio * 25/100;
 			precioFinal = cantidad * precio - descuento;
 			document.getElementById("txtIdprecioDescuento").value = precioFinal;
 			
 		}
 		else 
 		{
 			descuento = precio * 20/100;
 			precioFinal = cantidad * precio - descuento;
 			document.getElementById("txtIdprecioDescuento").value = precioFinal;

 		}

 		if(precioFinal >= 120)
 		{
 			impuesto = precioFinal * 10/100;
 			precioFinal= impuesto + precioFinal;
 			alert("el precio final con impuesto es: "+ precioFinal + " y el impuesto agregado es de: " + impuesto );
 		}

 		break;

 		case 3:
 		if (marca == "ArgentinaLuz" )
 		{
 			descuento = precio * 15/100;
 			precioFinal = cantidad * precio - descuento;
 			document.getElementById("txtIdprecioDescuento").value = precioFinal;
 		}
 		else if(marca == "FelipeLamparas")
 		{
 			descuento = precio * 10/100;
 			precioFinal = cantidad * precio - descuento;
 			document.getElementById("txtIdprecioDescuento").value = precioFinal;

 		}
 		else
 		{
 			descuento = precio * 5/100;
 			precioFinal = cantidad * precio - descuento;
 			document.getElementById("txtIdprecioDescuento").value = precioFinal;
 		}

 		if(precioFinal >= 120)
 		{
 			impuesto = precioFinal * 10/100;
 			precioFinal= impuesto + precioFinal;
 			alert("el precio final con impuesto es: "+ precioFinal + " y el impuesto agregado es de: " + impuesto );
 		}
 		break;


 		
 	}
}
