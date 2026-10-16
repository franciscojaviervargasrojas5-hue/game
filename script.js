// CONFIGURA AQUÍ TU CONTRASEÑA SECRETA (La fecha especial)
const PASSWORD_CORRECTA = "1102"; 

function verificarPassword() {
    const input = document.getElementById('passwordInput').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if (input === PASSWORD_CORRECTA) {
        // Ocultar pantalla de contraseña y mostrar la carta
        document.getElementById('loginContainer').classList.add('hidden');
        document.getElementById('letterContainer').classList.remove('hidden');

        // Reproducir la canción de fondo al abrir la carta
        const musica = document.getElementById('miMusica');
        if (musica) {
            musica.play().catch(error => {
                console.log("El navegador bloqueó la reproducción automática del audio:", error);
            });
        }
    } else {
        // Mostrar mensaje de error si falla
        errorMsg.classList.remove('hidden');
        document.getElementById('passwordInput').value = ""; // Limpiar campo
    }
}