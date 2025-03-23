// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

// first the accumulator will take its first value with the initialValue
// then it will return what its said to do . in the above case its accumulator + currentValue
// current value is the current value in the array
// now to iterate 2nd time for the 2nd element of the array the accumulator will take its value what it is returned . for eg th the case rwturn value is 1 now soo accumulator will be one
// and in next case accumulator will be 3 and soo on


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 ) 

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 3 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999 
    },
    {
        itemName: "py course",
        price: 999 
    },
    {
        itemName: "mobile dev",
        price: 5999 
    },
    {
        itemName: "data science",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => item.price + acc,0 )

console.log(priceToPay);
