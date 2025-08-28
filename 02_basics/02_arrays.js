const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] 
// if we dont use "..." then we will see array inside array because marvel_heros is also an array.
// by using "..." we create only one array and not array in array ("[[][]]")

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5 ]]]

const real_another_array = another_array.flat(Infinity) // spreads all the data, soo we get a clean single array
console.log(real_another_array);
 
console.log(Array.isArray("Jainam")) // checks if the given value is in the array or no
console.log(Array.from("Jainam")) // converts Jainam to array with each letter as element of array
console.log(Array.from({name: "jainam"})) // interesting.... we gave object and plain object is not iterable hence returns empty array ([])

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // makes array of all three scores


