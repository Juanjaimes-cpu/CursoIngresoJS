/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    let largo;
    let ancho;
    let total;
          largo = parseInt(document.getElementById("txtIdLargo").value);
          ancho = parseInt(document.getElementById("txtIdAncho").value);
          total = largo * 6 + ancho * 6;
          alert("se debe alambrar con " + total + " metros de alambre en total para tres hilos");
  }
  function Circulo () 
  {
      let radio;
    let total;
          radio = parseInt(document.getElementById("txtIdRadio").value);
          total = (radio + radio) * 3 ;
          alert("se debe alambrar con " + total + " metros de alambre en total para tres hilos");
  }
  function Materiales () 
  {
    let largo;
    let ancho;
    let total;
    let cemento;
    let cal;
          largo = parseInt(document.getElementById("txtIdLargo").value);
          ancho = parseInt(document.getElementById("txtIdAncho").value);
          total = largo * 2 + ancho * 2;
          cemento = total * 2;
          cal = total * 3;
          alert("se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
  
  }