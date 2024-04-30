// labRoutes.js
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller'); // Importar el controlador
const iniciarController = require('../controllers/iniciar.controller'); // Importar el controlador
const crearController = require('../controllers/crear.controller'); // Importar el controlador
const isAuth = require('../util/is-auth');
const Usuario = require('../Models/user.model');


// Ruta para la página principal
router.get('/', mainController.get_home); // Utilizar la función get_home del controlador principal

// Ruta para la página de creación de laboratorios
router.get('/crear', (req, res) => {
    res.render('crear'); // Renderiza la vista crear.ejs para la creación de laboratorios
});

// Ruta para manejar la creación de laboratorios (POST)
router.post('/crear', isAuth, crearController.post_crear); // Utilizar la función post_crear del controlador

// Ruta para la página de inicio de sesión
router.get('/iniciar-sesion', (req, res) => {
    res.render('iniciar-sesion'); // Renderiza la vista iniciar-sesion.ejs para la creación de laboratorios
});

// Ruta para manejar el inicio de sesión (POST)
router.post('/iniciar-sesion', iniciarController.post_login);

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

// Ruta para la página de reportes
router.get('/reporte', async (req, res) => {
    const result = await Usuario.fetchAll();
    res.send({result:result});
});
router.get('/reporteRender', async (req, res) => {
    res.render('reporte'); // Renderiza la vista crear.ejs para la creación de laboratorios
});

// Ruta para visualizar reportes
router.post('/reporte'); 

// Otras rutas relacionadas con la gestión de laboratorios pueden ir aquí

module.exports = router;
