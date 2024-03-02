//consola log, info, warn, error, assert

/*console.log("hola");
console.info("info");
console.warn("Esta es una advertencia");
console.error("Esto es un error");
console.assert(1=="1");*/


// Mostrar un alert con una entrada de texto solicitando al usuario que ingrese un número para generar la tabla
var numero = prompt("Por favor, ingrese un número para generar la tabla:");

// Convertir la entrada del usuario en un número entero
numero = parseInt(numero);

// Verificar si el número ingresado es válido utilizando console.assert()
console.assert(!isNaN(numero), "El número ingresado no es válido.");

// Si el número ingresado es válido
if (!isNaN(numero)) {
    // Generar la tabla HTML
    var tabla = "<table><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
    
    // Generar filas de la tabla con los números, cuadrados y cubos
    for (var i = 1; i <= numero; i++) {
        tabla += "<tr><td>" + i + "</td><td>" + (i * i) + "</td><td>" + (i * i * i) + "</td></tr>";
    }
    
    // Cerrar la tabla HTML
    tabla += "</table>";
    
    // Crear un elemento div para contener la nueva tabla
    var nuevaTablaDiv = document.createElement("div");
    nuevaTablaDiv.innerHTML = tabla;
    
    // Agregar la nueva tabla al final de la página
    document.body.appendChild(nuevaTablaDiv);
} else {
    // Si el número ingresado no es válido, mostrar un mensaje de alerta
    alert("Por favor, ingrese un número válido.");
}


// Generar dos números aleatorios entre 1 y 10
var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;

// Calcular la respuesta correcta
var respuestaCorrecta = num1 + num2;

// Registrar el tiempo de inicio
var tiempoInicio = Date.now();

// Mostrar un alert solicitando al usuario la suma de los dos números
alert("Por favor, calcule la suma de " + num1 + " y " + num2);

// Solicitar al usuario la suma de los dos números mediante un prompt
var respuestaUsuario = parseInt(prompt("Ingrese la suma:"));

// Registrar el tiempo de finalización
var tiempoFinal = Date.now();

// Calcular el tiempo transcurrido en segundos
var tiempoTranscurrido = (tiempoFinal - tiempoInicio) / 1000;

// Verificar si la respuesta del usuario es correcta
if (respuestaUsuario === respuestaCorrecta) {
    alert("¡Respuesta correcta! Has tardado " + tiempoTranscurrido + " segundos.");
} else {
    alert("Respuesta incorrecta. La respuesta correcta es " + respuestaCorrecta + ". Has tardado " + tiempoTranscurrido + " segundos.");
}


function contador(numeros) {
    // Inicializar contadores
    var negativos = 0;
    var ceros = 0;
    var mayoresCero = 0;

    // Iterar sobre el arreglo de números
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            // Incrementar el contador de números negativos
            negativos++;
        } else if (numeros[i] === 0) {
            // Incrementar el contador de ceros
            ceros++;
        } else {
            // Incrementar el contador de valores mayores que cero
            mayoresCero++;
        }
    }

    // Devolver los resultados como un objeto
    return {
        negativos: negativos,
        ceros: ceros,
        mayoresCero: mayoresCero
    };
}

// Solicitar al usuario un arreglo de números mediante un prompt dentro de un alert
var input = prompt("Por favor, ingrese una lista de números separados por comas:");

// Convertir el input en un arreglo de números
var numeros = input.split(',').map(function(item) {
    return parseInt(item);
});

// Llamar a la función contador con el arreglo de números como argumento
var resultado = contador(numeros);

// Mostrar los resultados en un alert
alert("Cantidad de números negativos: " + resultado.negativos + "\nCantidad de ceros: " + resultado.ceros + "\nCantidad de valores mayores a cero: " + resultado.mayoresCero);


function promedios(matriz) {
    // Inicializar un arreglo para almacenar los promedios
    var promediosArray = [];

    // Iterar sobre cada arreglo dentro de la matriz
    for (var i = 0; i < matriz.length; i++) {
        // Calcular el promedio del arreglo actual
        var suma = 0;
        for (var j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
        var promedio = suma / matriz[i].length;

        // Agregar el promedio al arreglo de promedios
        promediosArray.push(promedio);
    }

    // Devolver el arreglo de promedios
    return promediosArray;
}

// Solicitar al usuario una matriz de números mediante un prompt dentro de un alert
var input = prompt("Por favor, ingrese una matriz de números separados por comas y cada fila separada por un punto y coma (;):");

// Dividir el input en filas y luego en números
var filas = input.split(';');
var matriz = [];
for (var i = 0; i < filas.length; i++) {
    var numeros = filas[i].split(',').map(function(item) {
        return parseInt(item);
    });
    matriz.push(numeros);
}

// Llamar a la función promedios con la matriz como argumento
var resultado = promedios(matriz);

// Mostrar los resultados en un alert
alert("Los promedios de cada fila son: " + resultado.join(', '));


function inverso(numero) {
    // Convertir el número a cadena y luego dividirlo en un arreglo de caracteres
    var digitos = numero.toString().split('');

    // Invertir el arreglo de caracteres
    var inversoArray = digitos.reverse();

    // Unir los caracteres invertidos en una cadena y convertirla de nuevo a número
    var resultado = parseInt(inversoArray.join(''));

    // Devolver el número con los dígitos en orden inverso
    return resultado;
}

// Solicitar al usuario un número mediante un prompt dentro de un alert
var numero = parseInt(prompt("Por favor, ingrese un número:"));

// Llamar a la función inverso con el número como argumento
var resultado = inverso(numero);

// Mostrar el resultado en un alert
alert("El número con sus dígitos en orden inverso es: " + resultado);


// Definición del objeto Tarea
function Tarea(titulo, descripcion) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = "pendiente"; // Por defecto, el estado es pendiente
}

// Métodos del objeto Tarea
Tarea.prototype.marcarComoCompletada = function() {
    this.estado = "completada";
}

// Función para agregar una nueva tarea a la lista
function agregarTarea() {
    // Solicitar al usuario el título y la descripción de la tarea mediante un prompt dentro de un alert
    var titulo = prompt("Por favor, ingrese el título de la tarea:");
    var descripcion = prompt("Por favor, ingrese la descripción de la tarea:");

    // Crear una nueva tarea con los datos ingresados por el usuario
    var nuevaTarea = new Tarea(titulo, descripcion);

    // Agregar la nueva tarea a la lista
    listaTareas.push(nuevaTarea);

    // Mostrar todas las tareas actualizadas
    mostrarTareas();
}

// Función para mostrar todas las tareas en la lista
function mostrarTareas() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores
    
    // Crear la tabla HTML
    var tablaHTML = "<table><tr><th>Título</th><th>Descripción</th><th>Estado</th></tr>";

    listaTareas.forEach(function(tarea, index) {
        // Agregar una fila para cada tarea
        tablaHTML += "<tr><td>" + tarea.titulo + "</td><td>" + tarea.descripcion + "</td><td>" + tarea.estado + "</td></tr>";
    });

    // Cerrar la tabla HTML
    tablaHTML += "</table>";

    // Agregar la tabla al resultado
    resultado.innerHTML = tablaHTML;
}

// Lista de tareas (inicialmente vacía)
var listaTareas = [];

// Agregar algunas tareas de ejemplo
agregarTarea("Hacer ejercicio", "Ir al gimnasio");
agregarTarea("Comprar víveres", "Leche, huevos, pan");
agregarTarea("Estudiar para el examen", "Revisar apuntes");

// Marcar la primera tarea como completada
listaTareas[0].marcarComoCompletada();



//declara variables de manera antigua
//var luchadores = 20;

//declara una variable de manera moderna
//let arqueras = 20;

//declarar constante
/*const precio = 20;

alert("hola");
const nombre = prompt("¿Cómo te llamas?");
console.log("Hola" + nombre);

const hambre = confirm("¿Tienes hambre?");

if(hambre){
    console.log("Es hora de comer");
} else {
    console.log("Continuemos programando");
}

//Funciones tradicionales
function atacar() {
    console.log("atacar a los goblins");
}

//funciones modernas
let accion = (construccion) => {
    console.log("construir");
}

accion();

//arreglos

const arreglo = ["Elemento"];
const arreglo2 = new Array();

arreglo.push("Otro elemento");

console.log(arreglo);

for (let i = 0; i < arreglo.length; i++){
    console.assert(arreglo[i]);
}

for (let valor of arreglo){
    console.log(valor);
}

for (let valor in arreglo){
    console.log(indice);
}


//objetos
const objeto = {atributo1: "valor 1", atributo2: "valor 2"};
objeto.atributo3 = 3;
console.log(objeto);


//modificar html
document.write("hola");*/