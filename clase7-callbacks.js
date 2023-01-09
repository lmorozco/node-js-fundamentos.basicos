function hola(nombre, miCallback) {
    // console.log("Hola, soy una función asíncrona");
    setTimeout(function(){
        console.log("Hola, " + nombre);
        miCallback(nombre);
    },  1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Adios", nombre);
        otroCallback();
    },  1000);
}

console.log("Iniciando proceso...");
hola("Luis", function(nombre){
    adios(nombre, function(){
        console.log("Terminando proceso...");    
    });
});

// hola("Luis", function(){});
// adios("Luis", function(){});