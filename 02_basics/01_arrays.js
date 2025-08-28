 // array

 const myArr = [0, 1, 2, 3, 4, 5]
 const myHeros = ["shaktiman", "Ironman", "Batman"] 

 const myArr2 = new Array(1, 2, 3, 4)

//  console.log(myArr[1]);
 
 // in js whenever we do operation on arrays ir creates shallow copies
 // shallow copy is a copy of an object whose properties share the 
 // same referance point while deep copies do not share same ref. point

// Array methods

// myArr.push(6) // add at end
// myArr.push(7)
// myArr.pop() // remove from end

// myArr.unshift(9) // add at start
// myArr.shift() // remove from start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // join all elements of string into a string soo type of newArr is string

// console.log(myArr);
// console.log(typeof newArr);

// slice and splice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3) // slice takes the 1st index and goes till 2nd-1 th index and copies it. It does not change the original array

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1, 3) // same as slice but this changes the original array 
console.log(myn2);
console.log("C ",myArr);
  


