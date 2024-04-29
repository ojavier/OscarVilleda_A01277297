const db = require('../util/database');

module.exports = class Usuario {

    constructor(nombres, apellidos, correo, password) {
        this.correo = correo;
        this.password = password;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM users');
    }

    static fetchOneByEmail(email) {
        return db.execute('SELECT * FROM users WHERE correo = ?', [email])
            .then(([rows, fields]) => {
                return rows;
            })
            .catch((error) => {
                console.log(error);
                throw error; // Re-lanza el error para manejarlo en el controlador
            });
    }

    static fetchByEmail(email) {
        return this.fetchOneByEmail(email);
    }

    static getPrivilegios(Email) {
        return db.execute(`
            SELECT p.NombrePrivilegio
            FROM usuario u
            JOIN roldeusuarios ru ON u.Email = ru.Email
            JOIN permisosrol pr ON ru.IdRol = pr.IdRol
            JOIN permisos p ON pr.IdPermisos = p.IdPermisos
            WHERE u.Email = ?
        `, [Email]);
    }
    
    static getUserRole(Email) {
        return db.execute(`
            SELECT r.Nombre
            FROM usuario u
            JOIN roldeusuarios ru ON u.Email = ru.Email
            JOIN rol r ON ru.IdRol = r.IdRol
            WHERE u.Email = ?
        `, [Email]);
    }    

};
