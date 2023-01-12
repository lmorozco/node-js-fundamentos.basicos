var tabla = [
    {
        a: 1,
        b: "z"
    },
    {
        a: 2,
        b: "c"
    }
]

// console.log(tabla);
// console.info("Algo");
// console.error("Algo");
// console.warn("Algo");
// console.table(tabla);

// console.group("Conver");
// console.log("Hola");
// console.group("bla");
// console.log("Bla bla bla");
// console.log("Bla bla bla");
// console.log("Bla bla bla");
// console.groupEnd("bla");

// console.log("adios");
// console.groupEnd("conver");
// console.log("otra cosa");

function function1(){
    console.group("funcion1");
    console.log("Esto es de la funcion 1");
    console.log("Esto tambien");
    function2();
    console.log("He vuelto a la 1");
    console.groupEnd("funcion 1");
}

function function2(){
    console.group("funcion 2");
    console.log("Ahora estamos en la funcion 2");
    console.groupEnd("funcion 2");
}

console.log("Empezamos");
function1();


console.count("Veces");
console.count("Veces");
console.count("Veces");
console.count("Veces");
console.count("Veces");
console.countReset("Veces");
console.count("Veces");