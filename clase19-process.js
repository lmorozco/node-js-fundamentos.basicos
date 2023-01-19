//const p = require("process");

process.on("beforeExit", () => {
    console.log("El proceso va a terminar");
});

process.on("exit", () => {
    console.log("El proceso acabó");
});

process.on("uncaughtException", (err, origen) => {
    console.log("Vaya, se nos ha olvidado capturar un error");
    console.log(err);
    setTimeout(() => {
        console.log("Esto no se va a ver nunca");
    }, 0);
});

setTimeout(() => {
    console.log("Esto si se va a ver");
}, 0);
//process.on("uncaughtRejection")

// funcionX();

console.log("No sale si no se recoge el error");