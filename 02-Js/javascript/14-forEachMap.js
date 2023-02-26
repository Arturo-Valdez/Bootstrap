



const carrito = [
  {tv:'samsung', pulgadas:32, precio:2500},
  {tv:'lg', pulgadas:32, precio:200},
  {tv:'atvio', pulgadas:32, precio:2700},
  {tv:'alcatel', pulgadas:32, precio:3500},
]


//FOR EACH para interar o para mostrar en consola
carrito.forEach((producto)=>{
  console.log(producto)
})




//MAP para crear un nuevo arreglo
const arreglo  =  carrito.map(producto => producto.tv)


console.log(arreglo)
