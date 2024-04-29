// main.controller.js

// Importa el modelo necesario
const Laboratorio = require('../Models/lab.model');
const Usuario = require('../Models/user.model');

// Controlador para manejar la página principal
exports.get_home = async (req, res) => {
    try {
        // Obtener todos los laboratorios de la base de datos u otras acciones necesarias para la página de inicio
        // ...

        // Redirigir a la ruta "/index"
        res.redirect('/index');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
};
// Otras funciones de controlador para gestionar otras páginas de la aplicación de laboratorios pueden ir aquí
