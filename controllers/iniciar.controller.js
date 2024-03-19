// iniciar.controller.js
document.getElementById('loginBtn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Aquí puedes realizar cualquier acción que necesites con el nombre de usuario y la contraseña,
    // como enviarlos a un servidor para autenticar al usuario.
    // Por simplicidad, aquí solo mostraremos los valores en la consola.
    console.log("Nombre de usuario:", username);
    console.log("Contraseña:", password);
  
    // Luego de realizar la acción correspondiente, podrías redirigir al usuario a otra página si es necesario.

    // Ruta para la página de inicio (index.ejs)
    app.get('/', (req, res) => {
    res.render('index'); // Renderiza la vista index.ejs para la página de inicio
});

});
