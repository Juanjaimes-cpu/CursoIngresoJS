function mostrar()
{
	
	//tomo la edad  
let edad;
edad = parseInt(document.getElementById("txtIdEdad").value);
	if(edad < 13)	{
		alert("Usted es un niño");
		}else{	
	if(edad <= 17)	{
		alert("Usted es adolecente");
	}else{
		alert("Usted es adulto");
					}								
			}						
}
//FIN DE LA FUNCIÓN
/*
if(edad < 13)	{
		alert("Usted es un niño");
		}else{	
	if(edad < 65)	{
		alert("Usted es adulto");
	}else{
		alert("Usted es anciano");
					}								
			}*/