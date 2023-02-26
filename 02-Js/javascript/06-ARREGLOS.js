//ARREGLOS O ARRAYS

 //Primera forma para declarar un array
const grupoNomber = [1,2,5,3,6,6879,2165,15]

console.table(grupoNomber)//los arma en consola en tipo tabla de numeros visualmente

 //Segunda forma para declarar un array

 const month = new Array('enero','febrero', 'marzo', 'abril')
 console.table(month)


 //acceder a los arreglos en su posicion 
 //console.log(grupoNomber[5])

 //Saber cuantos datos estan en un arreglo
 //console.log(month.length)


 //recorrer arreglos interar
 //month.forEach( function (month){
 // console.log(month)
// })


//agregar elemento al final de la array
month.push('Marzo')


//agrega al inicio del array
month.unshift('Diciembre')
console.table(month)



//elimina el primer elemento 
  month.shift()

//elimina el ultimo elemeno
month.pop()
console.table(month)


//agrega septiembre al nuevo array, copia la tabla month y agrega al final noviembre
const nuevoarray = ['septiembre',...month, 'noviembre']

console.table(nuevoarray)