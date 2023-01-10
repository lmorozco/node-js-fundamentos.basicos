function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 1500); 
    });
    // console.log("Hola, soy una función asíncrona");
    
}

function hablar(nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout(function () {
            console.log("bla bla...");
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log("Adios", nombre);
            resolve();
        }, 1000);
    });
}

// ---
console.log("Iniciando el proceso");

hola("Luis")
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Terminado el proceso");
    })

    //Siempre que hagamos una promesa, poner un catch para los errores..  Un then y un catch siempre con las promesas.
    .catch(error =>{
        console.error("Ha habido un error");
        console.error(error);
    })