const Usuario = require('../Models/user.model');

// Renderiza la vista de inicio de sesión si el usuario no está autenticado
// Redirige al usuario a la página principal si ya está autenticado
exports.post_login = async (req, res, next) => {
    try {
        // ...

        if (usuario && usuario.length > 0 && usuario[0].password === password) {
            // Credenciales válidas
            console.log('Credenciales válidas. Iniciando sesión para el usuario:', usuario[0].correo);
            req.session.isLoggedIn = true;
            req.session.usuario = usuario[0];
            // Redirige al usuario a la página de inicio
            res.redirect('/');
        } else {
            // Credenciales inválidas
            console.log('Credenciales inválidas para el correo electrónico:', email);
            req.session.error = 'Usuario y/o contraseña incorrectos'; // Aquí estableces el error
            res.redirect('/iniciar-sesion');
        }
    } catch (error) {
        console.error('Error durante el proceso de inicio de sesión:', error);
        req.session.error = 'Error interno del servidor'; // También puedes establecer un error aquí
        res.redirect('/iniciar-sesion');
    }
};

// Recibe los datos del formulario de inicio de sesión
// Intenta buscar al usuario en la base de datos
// Establece la sesión del usuario si las credenciales son válidas
exports.post_login = async (req, res, next) => {
    try {
        const correo = req.body.correo; // Cambia email a correo
        const password = req.body.password;

        if (typeof correo !== 'undefined') {
            const usuario = await Usuario.fetchOneByEmail(correo); // Cambia email a correo

            if (usuario && usuario.length > 0 && usuario[0].password === password) {
                console.log('Credenciales válidas. Iniciando sesión para el usuario:', usuario[0].correo);
                req.session.isLoggedIn = true;
                req.session.usuario = usuario[0];
                res.redirect('/');
            } else {
                console.log('Credenciales inválidas para el correo electrónico:', correo);
                req.session.error = 'Usuario y/o contraseña incorrectos';
                res.redirect('/iniciar-sesion');
            }
        } else {
            console.log('El correo electrónico no está definido');
            req.session.error = 'Correo electrónico no proporcionado';
            res.redirect('/iniciar-sesion');
        }
    } catch (error) {
        console.error('Error durante el proceso de inicio de sesión:', error);
        req.session.error = 'Error interno del servidor';
        res.redirect('/iniciar-sesion');
    }
};


