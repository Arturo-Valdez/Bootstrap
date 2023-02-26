const objeto = {
  tel: 31396514,
  nombre: 'santiago Valdez',
  email:'asdasd@gmail.com',
  taller:'Vocablo'
}

objeto.carro = 'red' //agrego el siguiente objeto en el

delete objeto.taller//elimina taller


console.log(objeto)
 
//#####################################################




//Object.freeze(objeto);//No permite modificar nada del objeto

objeto.pelota = 'red' //agrego el siguiente objeto en el

delete objeto.carro//elimina taller


console.log(objeto)


//################ UNIR DOS OBJETOS ###########
const migo = {
  tel: 31396514,
  nombre: 'santiago Valdez',
  email:'asdasd@gmail.com',
  taller:'Vocablo'
}

const mascotas = {
  perros: 2,
  gatos:  10,
}

const juntarobjetos = {...migo, ...mascotas}

console.log(juntarobjetos)
