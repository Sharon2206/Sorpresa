document.addEventListener("DOMContentLoaded", function() {
    const btnSorpresa = document.getElementById("btnSorpresa");
    const opciones = document.getElementById("opciones");
    const btnRooftop = document.getElementById("btnRooftop");
    const btnGlamping = document.getElementById("btnGlamping");
    const confirmacion = document.getElementById("confirmacion");
    const confirmarSi = document.getElementById("confirmarSi");
    const confirmarNo = document.getElementById("confirmarNo");
    const rooftopForm = document.getElementById("rooftopForm");
    const glampingForm = document.getElementById("glampingForm");
    const ultimaConfirmacion = document.getElementById("ultimaConfirmacion");
    const ultimaSi = document.getElementById("ultimaSi");
    const ultimaNo = document.getElementById("ultimaNo");

    let opcionSeleccionada = "";

    // 🎉 Función para lanzar confeti al abrir la sorpresa
    function lanzarConfeti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // Paso 1: Mostrar opciones al abrir la sorpresa
    btnSorpresa.addEventListener("click", function() {
        lanzarConfeti();
        btnSorpresa.style.display = "none";
        opciones.classList.remove("hidden");
    });

    // Paso 2: Selección entre Rooftop o Glamping
    btnRooftop.addEventListener("click", function() {
        opcionSeleccionada = "rooftop";
        opciones.classList.add("hidden");
        confirmacion.classList.remove("hidden");
    });

    btnGlamping.addEventListener("click", function() {
        opcionSeleccionada = "glamping";
        opciones.classList.add("hidden");
        confirmacion.classList.remove("hidden");
    });

    // Paso 3: Confirmar elección
    confirmarSi.addEventListener("click", function() {
        confirmacion.classList.add("hidden");
        
        if (opcionSeleccionada === "rooftop") {
            rooftopForm.classList.remove("hidden");
        } else if (opcionSeleccionada === "glamping") {
            glampingForm.classList.remove("hidden");
        }
    });

    confirmarNo.addEventListener("click", function() {
        confirmacion.classList.add("hidden");
        opciones.classList.remove("hidden");
    });

    // Paso 4: Mostrar última pregunta antes de confirmar elección
    document.getElementById("guardarRooftop").addEventListener("click", function() {
        rooftopForm.classList.add("hidden");
        ultimaConfirmacion.classList.remove("hidden");
    });

    document.getElementById("guardarGlamping").addEventListener("click", function() {
        glampingForm.classList.add("hidden");
        ultimaConfirmacion.classList.remove("hidden");
    });

    // Paso 5: Confirmar la última decisión
    ultimaSi.addEventListener("click", function() {
        ultimaConfirmacion.classList.add("hidden");
        alert("¡Reserva confirmada! 🎉");
    });

    ultimaNo.addEventListener("click", function() {
        ultimaConfirmacion.classList.add("hidden");
        opciones.classList.remove("hidden");
    });
});
