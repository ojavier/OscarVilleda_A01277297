//consola log, info, warn, error, assert

console.log("hola");
console.info("info");
console.warn("Esta es una advertencia");
console.error("Esto es un error");
console.assert(1=="1");

//declara variables de manera antigua
var luchadores = 20;

//declara una variable de manera moderna
let arqueras = 20;

//declarar constante
const precio = 20;

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
document.write("hola");