// Importar el pool de la base de datos
const db = require('../util/database');

// Controlador para procesar la creación de un nuevo laboratorio
exports.post_crear = (req, res, next) => {
    // Recuperar los datos del formulario
    const titulo = req.body.titulo; // Asegúrate de que este campo existe en el formulario
    const contenido = req.body.contenido; // Asegúrate de que este campo existe en el formulario

    // Ejecutar la consulta SQL para insertar un nuevo laboratorio
    db.execute('INSERT INTO labs (titulo, contenido) VALUES (?, ?)', [titulo, contenido])
        .then(result => {
            console.log("Creación de laboratorio exitosa.");
            // Configurar una cookie con el título del nuevo laboratorio
            res.cookie('nuevoLaboratorioTitulo', titulo);
            // Redirigir al usuario a la ruta raíz
            console.log("Redirigiendo a la ruta raíz...");
            res.redirect('/');
        })
        .catch(err => {
            console.log("Error al crear el laboratorio:", err);
            // Manejar el error aquí
            res.status(500).send("Error interno del servidor");
        });
};
