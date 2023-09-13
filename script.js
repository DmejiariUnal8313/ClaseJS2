// Función para mostrar el nombre en mayúscula sostenida
function mostrarMayuscula() {
    const nombreInput = document.getElementById("nombre");
    alert(nombreInput.value.toUpperCase());
}

// Función para activar el botón de enviar
function activarBoton() {
    const apellidoInput = document.getElementById("apellido");
    const enviarButton = document.getElementById("enviar");
    enviarButton.disabled = !apellidoInput.value;
}

// Función para mostrar/ocultar 

function mostrarCheckboxes() {
    const siSelect = document.getElementById("si");
    const checkboxesDiv = document.getElementById("checkboxes");

    if (siSelect.value === "si") {
        checkboxesDiv.style.display = "block";
    } else {
        checkboxesDiv.style.display = "none";
    }
}

// Función para verificar contraseñas y resaltar según corresponda
function verificarContraseñas() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    if (passwordInput.value === confirmPasswordInput.value) {
        passwordInput.style.backgroundColor = "green";
        confirmPasswordInput.style.backgroundColor = "green";
    } else {
        passwordInput.style.backgroundColor = "red";
        confirmPasswordInput.style.backgroundColor = "red";
    }
}