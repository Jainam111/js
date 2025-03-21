// immediately Invoked Function Expression

// Normal
// function chai() {
//     console.log('BD CONNECTED');
// }

// chai()

// iife
(function chai() {
    console.log('BD CONNECTED');
})();

// we use iife to reduce the pollution from the global scope
// use semicolon ";" to end the code in iife
