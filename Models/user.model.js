// iniciar.controller.js

// Objeto para almacenar temporalmente los usuarios registrados
const users = {
    "usuario1": "password1",
    "usuario2": "password2"
};

document.getElementById('loginBtn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar si las credenciales son válidas
    if (users[username] && users[username] === password) {
        console.log("Inicio de sesión exitoso para el usuario:", username);

        // Redirigir al usuario a la página de inicio
        window.location.href = '/';
    } else {
        console.log("Nombre de usuario o contraseña incorrectos");
        // Aquí podrías mostrar un mensaje de error al usuario en tu interfaz de usuario
    }
});
