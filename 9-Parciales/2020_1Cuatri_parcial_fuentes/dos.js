function mostrar()
{
  let nombre;
let edad;
let sexo;
let estadocivil;
let temperatura;
let maxtemp;
let flag = 1;
let nombremaxtemp;
let contmv = 0;//contador mayor viudo.
let conthsv = 0;//contador hombre solteros y viudos.
let contmcf = 0;//contador mayor con fiebre.
let conths = 0;
let acumedadhs = 0;
let promedadhd = 0;
let seguir;

do{
	nombre = prompt("Ingrese nombre: ");
	edad = parsInt(prompt("Ingrese edad: "));
	sexo = prompt("Ingrese sexo: ");
	while(sexo != "f" || sexo != "m"){
		sexo = prompt("Error. Ingrese sexo: ");
	}
	estadocivil = prompt("Ingrese estado civil, casado/soltero/viudo: ");
	while(estadocivil != "casado" && estadocivil != "soltero" && estadocivil != "viudo"){
		estadocivil = prompt("Error. Ingrese estado civil casado/soltero/viudo: ");
	}
	temperatura = parseFloat(prompt("Ingrese temperatura corporal: "));
	while(temperatura != 0){
		temperatura = prompt("Error. Ingrese temperatura: ")
	}
	

	if(flag || temperatura > maxtemp){
		maxtemp = temperatura;
		nombremaxtemp = nombre;
		flag = 0;
	}
	if(edad >= 18 && estadocivil == "viudo"){
		contmv++;
	}
	if(sexo == "m" && estadocivil != "casado"){
		contmhs;
	}
	if(sexo == "m" && estadocivil != "soltero"){
		contmsf++;
		acumedadhs += edad;
	}

	seguir = prompt("Quiere ingresar otro pasajero?: ");
}while(seguir == "s");

if(conths != 0){
	promedadhd = acumedadhs + conths;
}
	alert("El nombre de la persona con la mayor temperatura es : " + nombremaxtemp);
	alert("							");
	alert("							");
	alert("							");
	alert("							");
	alert("							");
	alert("							");
	alert("							");
	alert("							");
	alert("							");

}
