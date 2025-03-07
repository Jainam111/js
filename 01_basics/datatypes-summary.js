// Primitive

// 7 types :- String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100 // dynamically typed

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// Referance or Non-primitive type 

// Arrays, Objects, Functions  
// all non-primitive have typeof = object and function has object function
// 

const heros = ["shaktiman" , "ironman"];
    let myObj = {
        name: "jainam",
        age : 19,
    }
// typeof of heros is object

// const myFunction = function(){
//     console.log("Hello, world");
    
// }

// console.log(typeof heros);


// +++++++++++++++++++++++++++++++++++++++++++++++++

// Memories => Stack , Heap
// Stack -> Primitive 
// Heap -> Non - Primitive


// Stack -> We get copy of a variable when "=" used eg:- let a=2; a=b;
// Heap -> calls original value and not copy

// Stack memory example

let myYoutubename = "Jainam"
anotherName = myYoutubename
anotherName = "Jay"

console.log(myYoutubename);
console.log(anotherName);

// Heap memory example

let userOne = {
    email: "user@google.com",
    upi: "user@oksbi"
}

let userTwo = userOne

userTwo.email = "jainam@gogle.com"

console.log(userOne.email);
console.log(userTwo.email);
