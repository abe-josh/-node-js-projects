// GLOBALS - NO WINDOW!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(`path of current directory ::::: ${__dirname}`);
console.log(`file name ::::: ${__filename}`);
console.log(`require ::::: ${require}`);
console.log(`module ::::: ${module}`);
console.log(`process ::::: ${process}`);

setInterval(() => {
    console.log("hello world");
},  1000);