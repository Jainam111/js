// if

const isUserLoggedIn = true
const temperature = 41

// if ( temperature < 50 ) {
//     console.log(`Less than 50`);
// }else{
//     console.log(`greater than 50`);
// }
// console.log(`executed`);

// >, <, >=, <=, ==, !=, ===
// === not only checks value but is also checks datatypes

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); -> this is our of scope

// const balance = 1000

// if (balance > 500) console.log("test1"), console.log(test2); -> not good practice

// if (balance < 500) {
//     console.log("less then 500");
    
// } else if(balance <750) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }


const userLoggenIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false 

if (userLoggenIn && debitCard) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}