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

const videoBlackjack = document.getElementById("video-blackjack");

videoBlackjack.addEventListener("mouseenter", () => {
    videoBlackjack.play();
});

videoBlackjack.addEventListener("mouseleave", () => {
    videoBlackjack.pause();
    videoBlackjack.currentTime = 0;
});

const imagenInformativa = document.getElementById("imagen-informativa");

const imagenesInformativa = [
    "static/images/páginainformativa.PNG",
    "static/images/seccion2.PNG",
    "static/images/seccion3.PNG",
    "static/images/seccion4.PNG"
];

let indiceImagen = 0;
let intervaloImagen;


imagenInformativa.addEventListener("mouseenter", () => {

    intervaloImagen = setInterval(() => {

        indiceImagen++;

        if (indiceImagen >= imagenesInformativa.length) {
            indiceImagen = 0;
        }

        imagenInformativa.src = imagenesInformativa[indiceImagen];

    }, 1000);

});


imagenInformativa.addEventListener("mouseleave", () => {

    clearInterval(intervaloImagen);

    indiceImagen = 0;

    imagenInformativa.src = imagenesInformativa[0];

});