/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let nuevosueldo;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);//tomo el importe por ID y lo vuelvo entero
	aumento = sueldo * 25 / 100; //importe mas 10%
	nuevosueldo = sueldo - aumento; //sumo importe del 10% mas el sueldo

	document.getElementById("txtIdResultado").value = nuevosueldo; //resultado de nuevo sueldo en pantalla
}