
//For Loop
// for(let i =0; i < 10; i++){
//   console.log(`numero ${i}`)
// }

// for(let i= 1; i<=10; i++){
//   if(i % 2 === 0){
//     console.log(`numero par ${i}`)
//   }else{
//     console.log(`El numero es impar ${i}`)
//   }
// }

const carrito = [
  {tv:'samsung', pulgadas:32, precio:2500},
  {tv:'lg', pulgadas:32, precio:200},
  {tv:'atvio', pulgadas:32, precio:2700},
  {tv:'alcatel', pulgadas:32, precio:3500},
]


// for(let i=0; i<=carrito.length;i++){
// console.log(carrito[i])
// console.log(carrito[i].tv)
// console.log(carrito[i].pulgadas)
//   console.log(carrito[i].precio)
// }


//While loop


// while(i<=50){
//   if(i % 2 === 0){
//   console.log(`el numero ${i} es par`)
//   }else{console.log(`el numero ${i} es impar`)}
//   i++;//incremeno
// }

// while(i <= carrito.length){
//   console.log(carrito[i])
//   i++;//incremento
// }

//Do Wile loop

//si el valor de i esta fuera del alcanse de while
//el do lo imprimi por su valor inicial y luego finaliza en 
//while
let i = 100;
do{
  console.log(i);
  i++;
}while(i<=10)