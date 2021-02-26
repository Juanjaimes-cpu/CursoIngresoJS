/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
    let producto1;
    let producto2;
    let producto3;
    let suma;
         producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
         producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
         producto3=parseInt(document.getElementById("txtIdPrecioTres").value);
         suma = producto1 + producto2 + producto3;
         alert("la suma de los 3 productos es " + suma);
    }
    function Promedio () 
    {
    let producto1;
    let producto2;
    let producto3;
    let producto;
         producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
         producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
         producto3=parseInt(document.getElementById("txtIdPrecioTres").value);
         producto = producto1 * producto2 * producto3;
         alert("El producto de los 3 productos es " + producto);
    }
    function PrecioFinal () 
    {
    let producto1;
    let producto2;
    let producto3;
    let iva;
    let preciofinal;
    
         producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
         producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
         producto3=parseInt(document.getElementById("txtIdPrecioTres").value);
         iva = (producto1 + producto2 + producto3) * 0.21;
         preciofinal = producto1 + producto2 + producto3+ iva;
         alert("El precio final (mas iba) de los 3 productos es " + preciofinal);
    }