const express = require('express');
const router = express.Router();

// Ruta para la página de creación de laboratorios
router.get('/crear', (req, res) => {
    res.render('crear'); // Renderiza la vista crear.ejs para la creación de laboratorios
});

// Otras rutas relacionadas con la gestión de laboratorios pueden ir aquí

module.exports = router;
