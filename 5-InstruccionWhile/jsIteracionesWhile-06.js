function mostrar()
{
	let total = 0;
    x = 0; // contador

    while(x < 5){
       total += parseInt(prompt("Ingrese un numero: "));
       x++
    }
    document.getElementById("txtIdSuma").value = total;
    document.getElementById("txtIdPromedio").value = total / 5;


}//FIN DE LA FUNCIÓN