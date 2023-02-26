const dato = {
  Salida: ''
}


const Salida = document.querySelector('#Salida');
const puntero = document.querySelector('.form #entrada');

const objetooo = dato.Salida

Salida.addEventListener('input', leertexto)


function leertexto(e){

  dato[e.target.id] = e.target.value

  console.log(dato)

  puntero.innerHTML = dato.Salida

}



function click() {
  objetooo.value = "";
}

