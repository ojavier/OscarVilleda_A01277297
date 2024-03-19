// Creamos un arreglo para almacenar los laboratorios
const laboratorios = [];

class Laboratorio {
    constructor(titulo, contenido) {
        this.titulo = titulo;
        this.contenido = contenido;
    }
    
    // Método para guardar un nuevo laboratorio en el arreglo
    save() {
        laboratorios.push(this);
    }

    // Método para obtener todos los laboratorios almacenados
    static fetchAll() {
        return laboratorios;
    }
}

module.exports = Laboratorio;
