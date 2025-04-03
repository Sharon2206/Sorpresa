document.addEventListener("DOMContentLoaded", function () {
    let opciones = document.getElementById("opciones");
    let btnSorpresa = document.getElementById("btnSorpresa");
    let container = document.querySelector(".container");

    let btnRooftop = document.getElementById("btnRooftop");
    let btnGlamping = document.getElementById("btnGlamping");
    let confirmacion = document.getElementById("confirmacion");
    let ultimaConfirmacion = document.getElementById("ultimaConfirmacion");

    let confirmarSi = document.getElementById("confirmarSi");
    let confirmarNo = document.getElementById("confirmarNo");
    let ultimaSi = document.getElementById("ultimaSi");
    let ultimaNo = document.getElementById("ultimaNo");

    let rooftopForm = document.getElementById("rooftopForm");
    let glampingForm = document.getElementById("glampingForm");
    let imagenFinal = document.getElementById("imagenFinal");

    let guardarRooftop = document.getElementById("guardarRooftop");
    let guardarGlamping = document.getElementById("guardarGlamping");

    let eleccion = ""; 

    function lanzarConfeti() {
        console.log("Lanzando confeti");
        if (typeof confetti !== "function") {
            console.error("Confetti.js no se ha cargado correctamente.");
            return;
        }

        var duracion = 2 * 1000; 
        var end = Date.now() + duracion;

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

    lanzarConfeti();

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

    btnRooftop?.addEventListener("click", function () {
        seleccionarOpcion("Rooftop");
    });

    btnGlamping?.addEventListener("click", function () {
        seleccionarOpcion("Glamping");
    });

    confirmarSi?.addEventListener("click", function () {
        console.log("Confirmación positiva");
        confirmacion.style.display = "none";

        // Mostrar formulario correspondiente en lugar de la última confirmación
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

    // Cuando el usuario completa el formulario, mostrar la última confirmación
    guardarRooftop?.addEventListener("click", function () {
        rooftopForm.style.display = "none";
        ultimaConfirmacion.style.display = "block";
    });

    guardarGlamping?.addEventListener("click", function () {
        glampingForm.style.display = "none";
        ultimaConfirmacion.style.display = "block";
    });

    ultimaSi?.addEventListener("click", function () {
        console.log("Última confirmación positiva");

        fetch("https://script.google.com/macros/s/AKfycbwpTPnup0QKh7EACkSd2GpBD_2fCR3NQnYr7zCrbOLZa6-egoGa3nUvAOmCaQePaoL8pA/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ opcion: eleccion })
        }).then(() => console.log("Datos enviados a Google Sheets"));

        ultimaConfirmacion.style.display = "none";
        imagenFinal.style.display = "block"; 
    });

    ultimaNo?.addEventListener("click", function () {
        console.log("Última confirmación negativa");
        ultimaConfirmacion.style.display = "none";
        
        // Volver a mostrar el formulario en caso de que el usuario quiera cambiar algo
        if (eleccion === "Rooftop") {
            rooftopForm.style.display = "block";
        } else if (eleccion === "Glamping") {
            glampingForm.style.display = "block";
        }
    });

    // Asegurar que todo está oculto al inicio
    rooftopForm.style.display = "none";
    glampingForm.style.display = "none";
    imagenFinal.style.display = "none";  
});
