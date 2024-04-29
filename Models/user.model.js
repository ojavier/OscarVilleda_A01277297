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

};
