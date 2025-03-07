const name = "jainam"
const repoCount = 50;

// console.log(name + repoCount + " Value");

// This is better syntax than the upper one
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('jainam-bh-vsar')

// console.log(gameName[0]);
// console.log(gameName.__proto__);  // to access methods of prototype

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));    
// console.log(gameName.indexOf('n'));    

// const newString =  gameName.substring(0 ,4) // negative value cant be included here 
// console.log(newString);   // last index is not included

// const anotherString = gameName.slice(-8 ,4)  // -8 -> 8th pos. from end & exclude 4
// console.log(anotherString);

// const newStringOne = "     jainam        "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http://jainam.com/jainam/jainam%20bhavsar"
url.replace('%20','-')    // replace %20 with -

// console.log(url.replace('%20','-') );

// console.log(url.includes('jaina'));

console.log(gameName.split('-'));

