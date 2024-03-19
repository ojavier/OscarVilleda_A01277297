const express = require('express');
const app = express();
const path = require('path');
const labRoutes = require('./routes/labRoutes');
const session = require('express-session');

// Middleware de registro
app.use((req, res, next) => {
    console.log('Middleware ejecutado');
    next();
});

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de las vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta para la página de inicio (index.ejs)
app.get('/', (req, res) => {
    res.render('index'); // Renderiza la vista index.ejs para la página de inicio
});

// Montar el enrutador labRoutes directamente
app.use(labRoutes);

// Configurar middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// La carpeta 'public' contiene los archivos estáticos como CSS, JS, imágenes, etc.

// Manejo de solicitudes no encontradas
app.use((req, res, next) => {
    res.status(404).send('Página no encontrada'); // Envía un mensaje de error 404
});

module.exports = app;

app.listen(3000);
console.log('Server on port 3000');