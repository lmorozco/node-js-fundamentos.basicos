// const { exec } = require("child_process");
// //Esto es lo mismo que:
// //const exec = require("child_process").exec;
//  exec ("node clase13-console.js", (err, stdout, sterr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
//  })

const { exec, spawn } = require("child_process");

let proceso = spawn("dir");
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (dato) {
    console.log("Está muerto?");
    console.log(process.killed);
    console.log(dato.toString());
});

proceso.on("exit", function () {
    console.log("El proceso terminó");
    console.log(proceso.killed);
})
