// labRoutes.js
const express = require('express');
const router = express.Router();
const crearController = require('../controllers/crear.controller'); // Importar el controlador

// Ruta para la página de creación de laboratorios
router.get('/crear', (req, res) => {
    res.render('crear'); // Renderiza la vista crear.ejs para la creación de laboratorios
});

// Ruta para manejar la creación de laboratorios (POST)
router.post('/crear', crearController.post_crear); // Utilizar la función post_crear del controlador

// Ruta para la página de inicio de sesión
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
