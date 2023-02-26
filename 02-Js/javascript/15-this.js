//THIS
//this hace referencia a cada uno de los objetos que se encuentran
//en reservacion

const reservacion ={
  nombre:'carlos',
  apellido:'magaña',
  total:500,
  pagado:false,
  //las funcion de flecha  informacion: ()=> muestras lo de windos, da falso y es error
  informacion:function(){
    console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de  ${this.total}`)
  }
}

reservacion.informacion()