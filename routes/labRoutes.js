const express = require('express');
const router = express.Router();

// Ruta para la página de creación de laboratorios
router.get('/crear', (req, res) => {
    res.render('crear'); // Renderiza la vista crear.ejs para la creación de laboratorios
});

// Ruta para la página de creación (iniciar-sesion.ejs)
router.get('/iniciar-sesion', (req, res) => {
    res.render('iniciar-sesion'); // Renderiza la vista iniciar-sesion.ejs para la creación de laboratorios
});

// Ruta para la página de registro
router.get('/registrarse', (req, res) => {
    res.render('registrarse'); // Renderiza la vista registrarse.ejs para el registro de usuarios
});

// Manejador de ruta para el formulario de registro (POST)
router.post('/registrarse', (req, res) => {
    // Aquí se manejará la lógica de registro de usuarios
    // Por ejemplo, validar los datos del formulario y guardar el usuario en la base de datos
    res.send('Registro exitoso'); // Enviar respuesta al cliente después del registro
});


// Otras rutas relacionadas con la gestión de laboratorios pueden ir aquí

module.exports = router;
