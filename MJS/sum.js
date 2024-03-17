// Función para calcular el promedio de un arreglo de números
export function calcularPromedio(numeros) {
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
