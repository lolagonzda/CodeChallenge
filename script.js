const form = document.getElementById('user-form');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    const userData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        respuesta.innerHTML = `
            <p>Usuario registrado con éxito:</p>
            <p>ID: ${data.id}</p>
            <p>Nombre: ${data.nombre}</p>
            <p>Apellido: ${data.apellido}</p>
            <p>Fecha de Nacimiento: ${data.fechaNacimiento}</p>
        `;
    })
    .catch(error => {
        respuesta.innerHTML = `Error: ${error.message}`;
    });
});
