// singleton -> gets created in constructor method
// Object.create -> constructor method 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    "name": "Jainam",
    "full name": "Jainam Bhavsar",
    [mySym]: "mykey1",              // use square brackets for symbols
    age: 19,
    location: "Mumbai",
    email: "bhavsarjainam33@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);   
// console.log(JsUser[mySym]);   

JsUser.email = "jainam@google.com"  // rewrite the variables
// Object.freeze(JsUser)   // freezes object and does not make any changes 
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}` );
}

console.log(JsUser.greetings());
console.log(JsUser.greetingTwo());


