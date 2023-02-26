
const tweet = 'HOLA MUNDO BRO CONTINUA'
const producto = 'Television'
const email = 'ejemplo@gmail.com'


//cantidad de datos
console.log(tweet.length)
console.log(producto.length)

//INDEXOF TE MARCA DONDE SE LOCALIZA
console.log(tweet.indexOf('BRO'))//cuando el dato se encuentra marca cuantos espacios hay antes de esa palabra
console.log(producto.indexOf('pedro')) //cuando el dato no se encuentra marca -1

//include
console.log(tweet.includes('BRO'))//cuando el dato se encuentra marca true
console.log(producto.includes('pedro')) //cuando el dato no se encuentra marca false
console.log(email.includes('@'))