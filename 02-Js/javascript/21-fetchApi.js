const localizacion = document.querySelector('tbody')
async function obtenerempleados(){
  const archivoLink = 'https://reqres.in/api/users';

    const resultado = await fetch(archivoLink);
    const datos = await resultado.json();

    const {data} = datos;

     let tbody = ''
    data.forEach( datas =>{
        // console.log(datos)
        tbody += `<tr> 
                  <td>${datas.id}</td>
                  <td><img src="${datas.avatar}" alt=""></td> 
                  <td>${datas.first_name}</td>
                  <td>${datas.last_name}</td>
                  <td>${datas.email}</td>
                  </tr>`
        localizacion.innerHTML = tbody
      },

    )
}

obtenerempleados()