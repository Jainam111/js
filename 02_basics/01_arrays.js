 // array

 const myArr = [0, 1, 2, 3, 4, 5]
 const myHeros = ["shaktiman", "Ironman", "Batman"] 

 const myArr2 = new Array(1, 2, 3, 4)

//  console.log(myArr[1]);
 
 // in js whenever we do operation on arrays ir creates shallow copies
 // shallow copy is a copy of an object whose properties share the 
 // same referance point while deep copies do not share same ref. point

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice and splice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ",myArr);
  


