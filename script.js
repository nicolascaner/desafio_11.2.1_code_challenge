document.addEventListener("DOMContentLoaded", () => {

        
        
        const boton = document.getElementById("boton");


        boton.addEventListener("click", () => {
            const name = document.getElementById("name");
            const apellido = document.getElementById("apellido");
            const fecha = document.getElementById("mesnacimiento");

            var minombre = name.value;
            var miapellido = apellido.value;
            var mifecha = fecha.value;
            
            
            
            fetch ('https://jsonplaceholder.typicode.com/users',{
                headers: { "Content-Type": "application/json; charset=utf-8" },
                method:'POST',
                body: JSON.stringify({
                    nombre: minombre,
                    apellido: miapellido,
                    fecha: mifecha
                    
                })
            })
            .then (respuesta => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo completar la solicitud');   
                }
                return respuesta.json ();
            })
                .then (datos => {
                alert ("Se envio correctamente")
            })
            .catch(error => {
                console.error('Error de fetch:', error);
            })


    })
})
