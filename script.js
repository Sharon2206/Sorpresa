document.addEventListener("DOMContentLoaded", function () {
    let opciones = document.getElementById("opciones");
    let btnSorpresa = document.getElementById("btnSorpresa");
    let container = document.querySelector(".container");

    let btnRooftop = document.getElementById("btnRooftop");
    let btnGlamping = document.getElementById("btnGlamping");
    let confirmacion = document.getElementById("confirmacion");
    let ultimaConfirmacion = document.getElementById("ultimaConfirmacion");

    let rooftopForm = document.getElementById("rooftopForm");
    let glampingForm = document.getElementById("glampingForm");
    let imagenFinal = document.getElementById("imagenFinal");

    let confirmarSi = document.getElementById("confirmarSi");
    let confirmarNo = document.getElementById("confirmarNo");
    let ultimaSi = document.getElementById("ultimaSi");
    let ultimaNo = document.getElementById("ultimaNo");

    let guardarRooftop = document.getElementById("guardarRooftop");
    let guardarGlamping = document.getElementById("guardarGlamping");

    let eleccion = ""; 

    function lanzarConfeti() {
        if (typeof confetti !== "function") {
            console.error("Confetti.js no se ha cargado correctamente.");
            return;
        }

        var duracion = 2 * 1000; 
        var end = Date.now() + duracion;

        (function frame() {
            confetti({
                particleCount: 10,
                spread: 60,
                origin: { x: Math.random(), y: Math.random() }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }

    btnSorpresa?.addEventListener("click", function () {
        container.style.display = "none";
        opciones.style.display = "flex";
    });

    function seleccionarOpcion(opcion) {
        eleccion = opcion; 
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
        confirmacion.style.display = "none";
        if (eleccion === "Rooftop") {
            rooftopForm.style.display = "block";
        } else {
            glampingForm.style.display = "block";
        }
    });

    confirmarNo?.addEventListener("click", function () {
        confirmacion.style.display = "none";
        opciones.style.display = "flex";
    });

    guardarRooftop?.addEventListener("click", function () {
        rooftopForm.style.display = "none";
        ultimaConfirmacion.style.display = "block";
    });

    guardarGlamping?.addEventListener("click", function () {
        glampingForm.style.display = "none";
        ultimaConfirmacion.style.display = "block";
    });

    ultimaSi?.addEventListener("click", function () {
        ultimaConfirmacion.style.display = "none";
        imagenFinal.style.display = "block";
        lanzarConfeti();  
    });

    ultimaNo?.addEventListener("click", function () {
        ultimaConfirmacion.style.display = "none";
        if (eleccion === "Rooftop") {
            rooftopForm.style.display = "block";
        } else {
            glampingForm.style.display = "block";
        }
    });

    opciones.style.display = "none";
    confirmacion.style.display = "none";
    rooftopForm.style.display = "none";
    glampingForm.style.display = "none";
    ultimaConfirmacion.style.display = "none";
    imagenFinal.style.display = "none";
});
