const express = require('express');
const path = require('path');
const labRoutes = require('./routes/labRoutes');
const session = require('express-session');
const Laboratorio = require('./Models/lab.model');
const Usuario = require('./Models/user.model');

// Creación de la aplicación Express
const app = express();

// Configuración de las vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware de registro
app.use((req, res, next) => {
    console.log('Middleware ejecutado');
    next();
});

// Configuración de sesiones
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
    resave: false,
    saveUninitialized: false
}));

// Configuración de bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para imprimir datos de solicitud entrantes
app.use((req, res, next) => {
    console.log('Datos de la solicitud entrante:', req.method, req.url, req.body);
    next();
});

// Ruta para la página de inicio (index.ejs)
app.get('/', async (req, res) => {
    try {
        // Obtener todos los laboratorios de la base de datos
        const laboratorios = await Laboratorio.fetchAll();
        console.log('Laboratorios obtenidos:', laboratorios); // Agregar esta línea para verificar los laboratorios obtenidos
        // Renderizar la vista index.ejs y pasar los laboratorios como variable
        res.render('index', { laboratorios });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
});

// Rutas de laboratorio
app.use('/', labRoutes); // Usa las rutas de laboratorio en la ruta raíz

// Configuración de middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Agrega esta línea para servir archivos estáticos
app.use('/Models', express.static(path.join(__dirname, 'Models')));

// Manejo de solicitudes no encontradas
app.use((req, res, next) => {
    res.status(404).send('Página no encontrada'); // Envía un mensaje de error 404
});

// Ruta para devolver datos de usuario
app.get('/reporteRender', (req, res) => {
    const userData = [
        { id: 1, name: 'Usuario 1', age: 30 },
        { id: 2, name: 'Usuario 2', age: 25 },
        { id: 3, name: 'Usuario 3', age: 40 }
    ];
    res.json(userData);
});


module.exports = app;

app.listen(3000);
console.log('Server on port 3000');
