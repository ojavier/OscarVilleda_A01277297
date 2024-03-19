// crear.controller.js

const Laboratorio = require('../Models/lab.model');

// Controlador para procesar la creación de un nuevo laboratorio
exports.post_crear = (req, res, next) => {
    // Recuperar los datos del formulario
    const titulo = req.body.titulo; // Asegúrate de que este campo existe en el formulario
    const contenido = req.body.contenido; // Asegúrate de que este campo existe en el formulario

    // Crear un nuevo objeto de laboratorio con los datos recibidos
    const nuevoLaboratorio = new Laboratorio(titulo, contenido);

    // Guardar el nuevo laboratorio
    nuevoLaboratorio.save();

    // Recuperar todos los laboratorios después de guardar el nuevo laboratorio
    const laboratorios = Laboratorio.fetchAll();

    // Renderizar index.ejs y pasar los laboratorios como datos
    console.log("Creación de laboratorio exitosa. Renderizando index con los laboratorios...");
    res.render('index', { laboratorios });
};
