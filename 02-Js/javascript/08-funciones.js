
//DECLARACION DE FUNCIONES

let total = 0;


//funcion carrito total que tiene el valor de precio, regresar el valor del total y sumale el precio nuevo
function carritototal (precio){
  return total += precio;
}

//funcion calcular impuesto, captura el total final y regresa la multiplicacion del 16% por el total
function calcularimpuesto(total){
  return 0.16 * total
}

//total es igual a la funcion donde total es igual a 0 + 200
total = carritototal(200)
//total es igual a la funcion donde total es igual a 200 + 205
total = carritototal(205)
//total es igual a la funcion donde total es igual a 405 + 280
total = carritototal(280)

//imprime en la consola el valor final de total 685
console.log(total);

//constante totalimpuesto es igual a la funcion calcular impuesto, toma el valor del total igual a 685 y multiplicalo por
//0.16
const totalimpuesto = calcularimpuesto(total)

//imprime en la consola el retorno de total de impuesto
console.log(totalimpuesto)