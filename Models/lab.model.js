// Creamos un arreglo para almacenar los laboratorios
const laboratorios = [];

// Clase Laboratorio para interactuar con la base de datos SQL
class Laboratorio {
    constructor(titulo, contenido) {
        this.titulo = titulo;
        this.contenido = contenido;
    }
    
    // Método para guardar un nuevo laboratorio en la base de datos
    save() {
        const pool = require('../util/database');
        pool.execute('INSERT INTO laboratorios SET ?', this, function (error, results, fields) {
            if (error) throw error;
            console.log('Laboratorio guardado correctamente:', results);
        });
    }

    // Método para obtener todos los laboratorios almacenados
    static fetchAll() {
        const pool = require('../util/database');
        return pool.query('SELECT * FROM labs').then(([rows, fields]) => {
            return rows;
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }
}

module.exports = Laboratorio;


