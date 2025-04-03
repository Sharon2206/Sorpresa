document.addEventListener("DOMContentLoaded", function () {
    const opciones = document.getElementById("opciones");
    const btnSorpresa = document.getElementById("btnSorpresa");
    const container = document.querySelector(".container");

    const btnRooftop = document.getElementById("btnRooftop");
    const btnGlamping = document.getElementById("btnGlamping");
    const confirmacion = document.getElementById("confirmacion");
    const ultimaConfirmacion = document.getElementById("ultimaConfirmacion");

    const confirmarSi = document.getElementById("confirmarSi");
    const confirmarNo = document.getElementById("confirmarNo");
    const ultimaSi = document.getElementById("ultimaSi");
    const ultimaNo = document.getElementById("ultimaNo");

    const rooftopForm = document.getElementById("rooftopForm");
    const glampingForm = document.getElementById("glampingForm");
    const imagenFinal = document.getElementById("imagenFinal");

    const guardarRooftop = document.getElementById("guardarRooftop");
    const guardarGlamping = document.getElementById("guardarGlamping");

    let eleccion = "";

    function lanzarConfeti() {
        if (typeof confetti !== "function") {
            console.error("Confetti.js no se ha cargado correctamente.");
            return;
        }

        const duracion = 2000;
        const end = Date.now() + duracion;

        (function frame() {
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });

            confetti({
                particleCount: 7,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }

    btnSorpresa?.addEventListener("click", function () {
        console.log("Botón de sorpresa presionado");
        container.style.display = "none";
        opciones.style.display = "flex";
    });

    function seleccionarOpcion(opcion) {
        eleccion = opcion;
        console.log("Opción seleccionada:", eleccion);
        opciones.style.display = "none";
        confirmacion.style.display = "block";
    }

    btnRooftop?.addEventListener("click", () => seleccionarOpcion("Rooftop"));
    btnGlamping?.addEventListener("click", () => seleccionarOpcion("Glamping"));

    confirmarSi?.addEventListener("click", function () {
        console.log("Confirmación positiva");
        confirmacion.style.display = "none";

        if (eleccion === "Rooftop") {
            rooftopForm.style.display = "block";
        } else if (eleccion === "Glamping") {
            glampingForm.style.display = "block";
        }
    });

    confirmarNo?.addEventListener("click", function () {
        console.log("Confirmación negativa");
        confirmacion.style.display = "none";
        opciones.style.display = "flex";
    });

    function guardarFormulario(formulario, mostrarConfirmacion) {
        formulario.style.display = "none";
        mostrarConfirmacion.style.display = "block";
    }

    guardarRooftop?.addEventListener("click", () => guardarFormulario(rooftopForm, ultimaConfirmacion));
    guardarGlamping?.addEventListener("click", () => guardarFormulario(glampingForm, ultimaConfirmacion));

    ultimaSi?.addEventListener("click", function () {
        console.log("Última confirmación positiva");

        let datosFormulario = {};

        if (eleccion === "Rooftop") {
            datosFormulario = {
                opcion: "Rooftop",
                nombre: document.getElementById("nombreRooftop")?.value,
                telefono: document.getElementById("telefonoRooftop")?.value,
                fecha: document.getElementById("fechaRooftop")?.value,
                hora: document.getElementById("horaRooftop")?.value,
                invitados: document.getElementById("invitadosRooftop")?.value,
                comentarios: document.getElementById("comentariosRooftop")?.value
            };
        } else if (eleccion === "Glamping") {
            datosFormulario = {
                opcion: "Glamping",
                nombre: document.getElementById("nombreGlamping")?.value,
                telefono: document.getElementById("telefonoGlamping")?.value,
                fecha: document.getElementById("fechaGlamping")?.value,
                hora: document.getElementById("horaGlamping")?.value,
                invitados: document.getElementById("invitadosGlamping")?.value,
                comentarios: document.getElementById("comentariosGlamping")?.value
            };
        }

        console.log("Datos enviados:", datosFormulario);

        fetch("https://script.google.com/macros/s/AKfycbwpTPnup0QKh7EACkSd2GpBD_2fCR3NQnYr7zCrbOLZa6-egoGa3nUvAOmCaQePaoL8pA/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosFormulario)
        }).then(() => console.log("Datos enviados a Google Sheets"));

        ultimaConfirmacion.style.display = "none";
        imagenFinal.style.display = "block";
        lanzarConfeti(); 
    });

    ultimaNo?.addEventListener("click", function () {
        console.log("Última confirmación negativa");
        ultimaConfirmacion.style.display = "none";

        if (eleccion === "Rooftop") {
            rooftopForm.style.display = "block";
        } else if (eleccion === "Glamping") {
            glampingForm.style.display = "block";
        }
    });

    // Ocultar elementos innecesarios al inicio
    [rooftopForm, glampingForm, imagenFinal, ultimaConfirmacion].forEach(el => {
        if (el) el.style.display = "none";
    });
});

