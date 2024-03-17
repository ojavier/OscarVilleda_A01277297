// Función para calcular el promedio de un arreglo de números
function calcularPromedio(numeros) {
    // Verifica si el arreglo está vacío
    if (numeros.length === 0) {
        return 0; // Devuelve 0 si el arreglo está vacío
    }

    // Suma todos los elementos del arreglo
    const suma = numeros.reduce((total, num) => total + num, 0);
    
    // Calcula el promedio dividiendo la suma entre la cantidad de elementos
    const promedio = suma / numeros.length;

    return promedio; // Devuelve el promedio
}

// Arreglo de números de ejemplo
const numeros = [10, 20, 30, 40, 50];

// Calcula el promedio de los números en el arreglo
const promedio = calcularPromedio(numeros);

// Muestra el resultado en la consola
console.log('El promedio de los números es:', promedio);




// Función para escribir un string en un archivo utilizando la API File System del navegador
function escribirStringEnArchivo(string, nombreArchivo) {
    const blob = new Blob([string], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = nombreArchivo;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Ejemplo de uso: escribir un string en un archivo llamado "ejemplo.txt"
const texto = 'Este es un texto de ejemplo.';
const archivo = 'ejemplo.txt';

escribirStringEnArchivo(texto, archivo);

