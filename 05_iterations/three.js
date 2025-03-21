// for of
// iterates over whole array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Maps
// maps hold unique values and they maintain order
const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map); 

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
    
// }

// if we try to do same for the object
// we cannot do as it can't iterate objects with this method
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }