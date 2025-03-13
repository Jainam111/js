// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // toString converst to String
// console.log(balance.toFixed(1));  // toFixed gives fixed numbers after decimal

// const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3)); 
// //gives only numbers and rounds off others for example here 
// // its given as 3 so it only writes 3 digits and rounds off othes

// const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-IN'));

// +++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));  // only gives upper valus eg.:- 4.2 > 5 , 4.1 > 5 , 4.6 > 5
// console.log(Math.floor(4.7));  // only gives lower valus eg.:- 4.2 > 4 , 4.1 > 4 , 4.6 > 4
// console.log(Math.sqrt(25));
// console.log(Math.max(2, 3, 5, 9));
// console.log(Math.min(2, 3, 5, 9));
    
// console.log(Math.random());   // print a random value betweek 0 and 
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // this formula can be used
// to generate random numbers between the two valus min and max


