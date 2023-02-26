//ARRAYS METHOTS



const month = ['enero','febrero', 'marzo', 'abril']

const carrito = [
  {tv:'samsung', pulgadas:32, precio:2500},
  {tv:'lg', pulgadas:32, precio:2500},
  {tv:'atvio', pulgadas:32, precio:2500},
  {tv:'alcatel', pulgadas:32, precio:2500},
]

console.log(carrito)

//for each
month.forEach(function(month){
  console.log(month)
})

//INCLUDE
const resultado = month.includes('abril')
console.log(resultado)


//some ideal para arreglo de objetos
//resultado es igual a carrito sobre la funcion producto entonses
//regresa si boolean si el producto (desructurado) tv es igual a 'lg'
const resultado2 = carrito.some(function(producto){
  return producto.tv === 'lg'
})
console.log(resultado2)

//METODO REDUCE, que nos ayuda a capturar todos los datos
//sumatotal es igual a carrito que reduce a la funcion que debe tener dos valores
//total y producto, entonses regresa total mas producto (destructurado) precio y sumalo
const sumatotal = carrito.reduce(function(total, producto){
  return total + producto.precio
  //valor inicial es igual a 0
}, 0)
console.log(sumatotal)



//METODO MAS UTILIZADO FILTER
//filrar es igual a carrito filtrado a la funcion de producto, entonses
//regresa el producto (destructurado) tv indiferentes a 'lg'
const filtrar = carrito.filter(function(producto){
  return producto.tv !== 'lg'
})

console.log(filtrar)