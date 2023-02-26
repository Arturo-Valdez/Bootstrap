

const reproductor = { 
  reproducir: function(id){
    console.log(`Reproduciendo cancion con el id: ${id}`)
  },
  pausar: function(){
    console.log('Pausando....')
  },
  crearplaylist:function(nombre){
    console.log(`Creando play list: ${nombre}`)
  },
  reproduciendoplaylist:function(nombre){
    console.log(`Reproduciendo play list: ${nombre}`)
  }
}


reproductor.Eliminarcancion = function(id){
  console.log(`Elminando cancion: ${id}`)
}

reproductor.reproducir(6854);
reproductor.pausar();
reproductor.Eliminarcancion(875);
reproductor.crearplaylist('banda')
reproductor.reproduciendoplaylist('rock')