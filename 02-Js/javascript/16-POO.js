//POO

/*Un objeto literal*/
const producto={
  nombre:'tablet',
  precio:500
}




//Object constructor (NOMBRE DE LAS CLASES DEBEN SER EN MAYUSCULAS)
function Producto(nombre, precio, disponible){
  this.nombre = nombre;/*en producto toma nombre, que sera igual a nombre*/
  this.precio = precio;
  this.disponible = disponible;
} 
//Prototype SIMEPRE USAR 
//crear funciones que solo se utiliuzan en un objeto en especifico
Producto.prototype.formatiarproducto = function(){
  return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

//instancia de una clase
const producto2 = new Producto('Monitor curbo de 49""', 800, true);
const producto3 = new Producto('laptop', 8000, true);
const producto4 = new Producto('PC', 80000, false);

// console.log(producto2)
// console.log(producto3)
// console.log(producto4)

console.log(producto2.formatiarproducto())





