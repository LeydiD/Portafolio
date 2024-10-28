document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".contacto__formulario");
    
    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        
        // Obtener los valores de los campos
        const nombre = formulario.querySelector("input[type='text']").value.trim();
        const correo = formulario.querySelector("input[type='email']").value.trim();
        const asunto = formulario.querySelector("input[type='text'][placeholder='Asunto']").value.trim();
        const mensaje = formulario.querySelector("textarea").value.trim();

        // Validar los campos
        if (!nombre) {
            alert("Por favor, ingrese su nombre.");
            return;
        }
        
        if (!correo) {
            alert("Por favor, ingrese su correo electrónico.");
            return;
        }

        if (!validateEmail(correo)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        if (!asunto) {
            alert("Por favor, ingrese el asunto.");
            return;
        }

        if (!mensaje) {
            alert("Por favor, ingrese su mensaje.");
            return;
        }

        // Si todo es válido, puedes enviar el formulario
        alert("Formulario enviado exitosamente!");
        formulario.reset(); // Limpiar el formulario
    });

    function validateEmail(email) {
        // Expresión regular para validar el formato del correo electrónico
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
