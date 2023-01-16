function otraFuncion() {
   serompre(); 
}

function serompre() {
return 3+z;
}

function seRompeAsincrona(cb) {
    setTimeout(function(){
        try{
            return 3+z;    
        }catch (err){
            console.error("Error en mi función asíncrona");
            cb(err);
        }
    })
}

try{
    //otraFuncion();
    seRompeAsincrona(function(err){
        console.log(err.mensaje);
    });
} catch(err){
    console.error("Vaya, algo se ha roto... ");
console.error(err);
    console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("esto de aqui está al final");

