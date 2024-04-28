const Usuario = require('../Models/user.model');

// Renderiza la vista de inicio de sesión si el usuario no está autenticado
// Redirige al usuario a la página principal si ya está autenticado
exports.get_login = (req, res, next) => {
    const isLoggedIn = req.session.isLoggedIn || false;
    if (!isLoggedIn) {
        res.render('iniciar-sesion', {
            pagePrimaryTitle: 'Iniciar sesión',
            isLoggedIn: isLoggedIn,
            error: req.session.error || null
        });
    } else {
        res.redirect('/');
    }
};

// Recibe los datos del formulario de inicio de sesión
// Intenta buscar al usuario en la base de datos
// Establece la sesión del usuario si las credenciales son válidas
exports.post_login = async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // Busca al usuario en la base de datos
        const [usuario] = await Usuario.fetchOne(email);

        if (usuario && usuario[0].password === password) {
            // Credenciales válidas
            req.session.isLoggedIn = true;
            req.session.usuario = usuario[0];
            // Redirige al usuario a la página de inicio
            res.redirect('/index');
        } else {
            // Credenciales inválidas
            req.session.error = 'Usuario y/o contraseña incorrectos';
            res.redirect('/iniciar-sesion');
        }
    } catch (error) {
        console.error('Error durante el proceso de inicio de sesión:', error);
        res.redirect('/iniciar-sesion');
    }
};
