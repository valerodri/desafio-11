   document.addEventListener("DOMContentLoaded", function () {   
   const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // hace que la pagina no se recargue al mandar

        // valores del form
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const birthDate = document.getElementById("dob").value;

        // objeto con los datos del form
        let datos = {
            nombre: nombre,
            apellido: apellido,
            fecha_nacimiento: birthDate,
        }; 

        // envio de datos al servidor en formato json

   fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(datos),
    })
    .then(response => response.json())
    .then(data=>{
        console.log("Repuesta desde el servidor:", data)
    })
    .catch (error => {
            console.log(error.message);
        });
    });
});
