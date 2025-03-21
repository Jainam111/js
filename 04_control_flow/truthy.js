const userEmail = "jainam@gmail.com"

// if(userEmail){
//     console.log("Got user email");
    
// }else{
//     console.log("Don't have user email");
    
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}
// all the others except falsy values are truthy values

// how to check if array is empty?

// const arr = []
// if (arr.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// false == 0  ->  true 
// false == ''  -> true
// 0 == ''  -> true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = undefined ?? 10 ?? 15

// console.log(val1);

// Ternary operator (if else shortcut)

// condition ? true : false

const iceTeaPrice = 100
// iceTeaPrice<=80 ? console.log("Less than 80") : console.log("More than 80");

