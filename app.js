const express = require('express');
const app = express();
const path = require('path');

// Middleware de registro
app.use((req, res, next) => {
    console.log('Middleware ejecutado');
    next();
});

// Configuración de las vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta para la página de inicio (index.ejs)
app.get('/', (req, res) => {
    res.render('index'); // Renderiza la vista index.ejs para la página de inicio
});

// Ruta para la página de creación (crear.ejs)
app.get('/crear', (req, res) => {
    res.render('crear'); // Renderiza la vista crear.ejs para la creación de laboratorios
});

// Montar el enrutador labRoutes para manejar la ruta '/labs'
const labRoutes = require('./routes/labRoutes');
app.use('/labs', labRoutes);

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
