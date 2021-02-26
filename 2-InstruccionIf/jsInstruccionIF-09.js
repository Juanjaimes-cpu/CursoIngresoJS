function mostrar()
{
		//Genero el número RANDOM entre 1 y 10 
let min	 =	1;
let max	 =	10;
let num;

num = Math.floor	(Math.random()*(max - min +1))	+ min;
alert(num);
}//FIN DE LA FUNCIÓN