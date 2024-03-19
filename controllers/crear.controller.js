const Laboratorio = require('../Models/lab.model');
const cookieParser = require('cookie-parser');

// Controlador para procesar la creación de un nuevo laboratorio
exports.post_crear = (req, res, next) => {
    // Recuperar los datos del formulario
    const titulo = req.body.titulo; // Asegúrate de que este campo existe en el formulario
    const contenido = req.body.contenido; // Asegúrate de que este campo existe en el formulario

    // Crear un nuevo objeto de laboratorio con los datos recibidos
    const nuevoLaboratorio = new Laboratorio(titulo, contenido);

    // Guardar el nuevo laboratorio
    nuevoLaboratorio.save();

    // Configurar una cookie con el título del nuevo laboratorio
    res.cookie('nuevoLaboratorioTitulo', nuevoLaboratorio.titulo);

    // Redirigir al usuario a la ruta raíz
    console.log("Creación de laboratorio exitosa. Redirigiendo a la ruta raíz...");
    res.redirect('/');
};
