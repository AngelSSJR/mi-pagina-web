// =====================
// Menú Responsive (Front07)
// =====================
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// =====================
// Validación del Formulario (Front08)
// =====================
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recarga

    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    // Expresiones regulares
    const soloLetras = /^[a-zA-ZÀ-ÿ\s]+$/; // solo letras y espacios
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // formato correo

    let valido = true;

    // Validar nombre
    if (nombre.length < 3 || !soloLetras.test(nombre)) {
        nombreInput.classList.add("input-error");
        nombreInput.classList.remove("input-success");
        valido = false;
    } else {
        nombreInput.classList.add("input-success");
        nombreInput.classList.remove("input-error");
    }

    // Validar email
    if (!emailValido.test(email)) {
        emailInput.classList.add("input-error");
        emailInput.classList.remove("input-success");
        valido = false;
    } else {
        emailInput.classList.add("input-success");
        emailInput.classList.remove("input-error");
    }

    // Validar mensaje
    if (mensaje.length < 10) {
        mensajeInput.classList.add("input-error");
        mensajeInput.classList.remove("input-success");
        valido = false;
    } else {
        mensajeInput.classList.add("input-success");
        mensajeInput.classList.remove("input-error");
    }

    // Mensaje final
    if (valido) {
        msg.textContent = "Mensaje enviado correctamente. ¡Gracias, " + nombre + "!";
        msg.style.color = "green";
        form.reset();

        // Quitar estilos tras limpiar
        nombreInput.classList.remove("input-success");
        emailInput.classList.remove("input-success");
        mensajeInput.classList.remove("input-success");
    } else {
        msg.textContent = "Por favor corrige los campos en rojo.";
        msg.style.color = "red";
    }
});

