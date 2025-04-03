document.addEventListener("DOMContentLoaded", function () {
    console.log("Script cargado correctamente");

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

    let guardarRooftop = document.getElementById("guardarRooftop");
    let guardarGlamping = document.getElementById("guardarGlamping");

    let eleccion = "";

    // Asegurar que todos los elementos inician ocultos
    opciones.style.display = "none";
    confirmacion.style.display = "none";
    rooftopForm.style.display = "none";
    glampingForm.style.display = "none";
    ultimaConfirmacion.style.display = "none";

    function mostrarElemento(elemento) {
        if (elemento) {
            elemento.style.display = "block";
        }
    }

    function ocultarElemento(elemento) {
        if (elemento) {
            elemento.style.display = "none";
        }
    }

    btnSorpresa?.addEventListener("click", function () {
        console.log("Botón Sorpresa presionado");
        ocultarElemento(container);
        mostrarElemento(opciones);
    });

    function seleccionarOpcion(opcion) {
        eleccion = opcion;
        console.log("Opción seleccionada:", eleccion);
        ocultarElemento(opciones);
        mostrarElemento(confirmacion);
    }

    btnRooftop?.addEventListener("click", function () {
        seleccionarOpcion("Rooftop");
    });

    btnGlamping?.addEventListener("click", function () {
        seleccionarOpcion("Glamping");
    });

    confirmarSi?.addEventListener("click", function () {
        console.log("Confirmación positiva");

        ocultarElemento(confirmacion);

        if (eleccion === "Rooftop") {
            mostrarElemento(rooftopForm);
        } else if (eleccion === "Glamping") {
            mostrarElemento(glampingForm);
        }
    });

    confirmarNo?.addEventListener("click", function () {
        console.log("Confirmación negativa");
        ocultarElemento(confirmacion);
        mostrarElemento(opciones);
    });

    guardarRooftop?.addEventListener("click", function () {
        console.log("Guardando Rooftop");
        ocultarElemento(rooftopForm);
        mostrarElemento(ultimaConfirmacion);
    });

    guardarGlamping?.addEventListener("click", function () {
        console.log("Guardando Glamping");
        ocultarElemento(glampingForm);
        mostrarElemento(ultimaConfirmacion);
    });

    ultimaSi?.addEventListener("click", function () {
        console.log("Última confirmación positiva");

        ocultarElemento(ultimaConfirmacion);

        alert("¡Reserva confirmada! 🎉");
    });

    ultimaNo?.addEventListener("click", function () {
        console.log("Última confirmación negativa");
        ocultarElemento(ultimaConfirmacion);

        if (eleccion === "Rooftop") {
            mostrarElemento(rooftopForm);
        } else if (eleccion === "Glamping") {
            mostrarElemento(glampingForm);
        }
    });

    console.log("Configuración completada");
});
