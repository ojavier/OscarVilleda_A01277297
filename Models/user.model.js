const db = require('../util/database');

module.exports = class Usuario {

    // Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombres, apellidos, correo, password) {
        this.correo = correo;
        this.password = password;
    }

    // Método estático para obtener todos los usuarios
    static fetchAll() {
        return db.execute('SELECT * FROM users');
    }

    // Método estático para obtener un usuario por su correo electrónico
    static fetchOne(correo) {
        return db.execute('SELECT * FROM users WHERE correo = ?', [correo])
            .then(([rows, fields]) => {
                console.log(rows); 
                return rows;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // No se proporciona la lógica para obtener privilegios y roles ya que no están definidos en la tabla de usuarios
};
