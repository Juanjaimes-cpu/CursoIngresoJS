/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1; //creo las 3 variables
    let num2;
    let suma;

    num1 = parseInt(document.getElementById("txtIdNumeroUno").value); //busco el numero y lo convierto a parseint
    num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
    suma = num1 + num2;

    alert("la suma es " + suma);//muestro el resultado en pantalla
}


