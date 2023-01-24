let buffer1 = Buffer.alloc(4);
let buffer2 = Buffer.from([1,2,5]);
let buffer3 = Buffer.from("Hola");

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);
console.log(buffer3.toString());

// --

let abc = Buffer.alloc(26);
console.log(abc);

for (let i=0; i<26; i++){
    abc[i] = i+97;
}
console.log(abc.toString());