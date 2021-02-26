
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca; 
	let fabricante;
	let acumB = 0;
	let acumJ = 0;
	let acumA = 0;
	let contB = 0;
	let contJ = 0;
	let contA = 0;
	let preciomin;
	let fabricantemin;
	let cantidadmin;
	let flagalcohol = 1;
	let promedio;
	let maxtipo;

	for (let i=0; i < 5; i++){

		tipo=prompt("ingrese tipo barbijo/alcohol/jabon: ");
		while(tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon"){
		tipo = prompt("Tipo invalido. ingrese tipo barbijo/alcohol/jabon: ");
		}

		precio = parseInt(prompt("Ingrese un precio entre 100 y 300: "));
		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio = parseInt(prompt("Error. Ingrese un precio entre 100 y 300: "));
		}

		cantidad = parseInt(prompt("Ingrese cantidad de positivo hasta 1000: "));
		while(cantidad <= 0 || cantidad > 1000 || isNaN(cantidad)){
			cantidad = parseInt(prompt("Error. ingrese cantidad positivo hasta 1000: "))
		}

		marca = prompt("Ingrese marca: ");
		fabricante = prompt("Ingrese fabricante:m");
		//aca termine de ingresar los datos del producto.

		if(tipo == "alcohol"){
			//aca va todo lo que serelaciona con alcohol.
			if( flagalcohol || precio < preciomin){
				preciomin = precio;
				fabricantemin = fabricante;
				cantidadmin = cantidad;
				flagalcohol = 0;
			}
			acumA = acumA + cantidad;
			contA++;
		}
		else if(tipo == "barbijo"){
		//aca va todo lo que serelaciona con barbijo.
			acumB = acumB + cantidad;
			contB++;
		}
		else{
		//aca va todo lo que serelaciona con jabon.
			acumJ = acumJ + cantidad;
			acumJ++;
		}
		}
		if(acumA > acumB && acumA > acumJ){
			promedio = acumA / contA;
			maxtipo = "alcohol";
		}
		
		else if(acumB >= acumA && acumB > acumJ){
			promedio = acumB / contB;
			maxtipo = "barbijo";
		}
		else{
		promedio = acumJ / contJ;
		maxtipo = "jabon";
		}

		// aca muestro la informacion.
		if( flagalcohol == 1){
			alert("A- No se compraron alcooles.");
		}
		else{
			alert("A- El alcohol mas barato vale $" + preciomin + " fabricante: " + fabricantemin + " Cantidad: " + cantidad);
		}
		alert("El tipo con mas unidades es: " + maxtipo + " y el promedio de compra es " + promedio);
		alert("Se compraron " + acumJ + " jabones");
	}



//estrategia de solucion
// 1-declarar variables (tipo, precio, cantidad, marca, fabricante).
//acumulador de barbijos, alcohol, jabones.
//contador de cantidad de compras de cada tipo para sacar despues el promedio.
//2-generar bucle que itere 5 veces.
//----------aca van las tareas que tengo que hacer en cada iteracion-----------.
//3-pido el tipo del producto
//3.1-valido el tipo
//4-pido el precio
//4.1 valido el precio
//5-pido cantidad
//5.1-valido cantidad
//6-pido marca.
//7-pido fabricante.

//***cosas que tengo que hacer para responder punto A(alcoholes)***.
//me tengo que fijar si el producto es de tipo alcohol.
//si es alcohol deberia preguntar si es el primero alcohol o no.
//si es el primer alcohol, guardo el precio, guardo el fabricante y guardo la cantidad.
//si no es el primer alcohol comparo el precio con el del minimo.
//si el precio es menor actualizo los datos del alcohol barato.

//***cosas que tengo que hacer para responder el punto B***.
//actualizo el contador que corresponda a cada tipo.
//incrementar el contado que corresponde al tipo.

//***cosas que tnego que hacer para resolver el punto C***.
//ya lo tengo del punto anterior con el acumulador de jabones.


//una vez que termine el bucle hago lo siguiente:
//A-muestro lo que hay en las variables preciominimo / fabricante minimo / cantidad minima.
//B-me fijo cual es el acumulador
//
