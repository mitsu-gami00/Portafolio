    const formulario = document.getElementById("formulario-contacto");
    const mensaje = document.getElementById("mensaje-formulario");
    const boton = document.getElementById("boton-enviar");

    formulario.addEventListener("submit", async (e) => {

        // Evita que la página se recargue
        e.preventDefault();

        // Cambiamos el estado del botón
        boton.disabled = true;
        boton.textContent = "Enviando...";

        // Obtenemos los datos del formulario
        const datos = new FormData(formulario);

        try {

            const respuesta = await fetch(formulario.action, {
                method: "POST",
                body: datos,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (respuesta.ok) {

                // Mensaje de éxito
                mensaje.textContent = "✓ Mensaje enviado correctamente";
                mensaje.className = "mensaje-exito";

                // Limpiar formulario
                formulario.reset();

            } else {

                // Mensaje de error
                mensaje.textContent = "✕ No se pudo enviar el mensaje. Inténtalo nuevamente.";
                mensaje.className = "mensaje-error";

            }

        } catch (error) {

            mensaje.textContent = "✕ Ocurrió un error de conexión.";
            mensaje.className = "mensaje-error";

        }

        // Restaurar botón
        boton.disabled = false;
        boton.textContent = "Enviar mensaje";

    });


