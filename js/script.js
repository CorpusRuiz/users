const listaUsuarios = document.getElementById('listaUsuarios')


function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  if (!response.ok) {
    throw new Error('la solicitud ha fallado');
  }
  return response.json();
})
.then(data => {
  console.log(data);
  const usuarios = data
  usuarios.forEach(element => {
    const usuariosConEdad = {
        ...element,
        age:getRandomInt(),
    }
    const {id, name, age, username, phone, email, company, address } = usuariosConEdad
    console.log(usuariosConEdad)
      listaUsuarios.innerHTML +=`
      <li>
         <figure class="contenedorUno">
             <figcaption>
                 <div class="cuadrado">
                     <p><span>Nombre: </span>${name}.</p>
                     <p><span>Edad: </span>${age}.</p>
                     <p><span>Username: </span>${username}.</p>
                     <p><span>Teléfono: </span>${phone}.</p>
                     <p><span>Email: </span>${email}.</p>
                 </div>
                 <p><span>Compañía: </span>${company.name}.</p>
                 <p><span>Dirección: </span>${address.street}, ${address.suite}, ${address.city}.</p>
             </figcaption>
             <img class="img" src="./assets/img/${id}.jpeg" alt="Picture of ${name}">
         </figure>
      </li>
      `
    
  });

})
.catch(Error => {
  listaUsuarios.innerText = 'Error: algo ha fallado.';
});