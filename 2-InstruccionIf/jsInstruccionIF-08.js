function mostrar()
{
	//tomo la edad  
	let edad;
	let estado;
		edad = parseInt(document.getElementById("txtIdEdad").value);
		estado = document.getElementById("estadoCivil").value;
		
		if(	estado == "Soltero"	&&	!(edad < 18)	){
			alert("Es soltero y no es menor");
		}
 

}//FIN DE LA FUNCIÓN