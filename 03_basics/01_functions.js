function sayMyName(){

    console.log("J");
    console.log("A");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
}
// after we write the functions ends and no code below it is executed 

const result =  addTwoNumbers(3, 5)

// console.log("Result:",result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// to give a default value write while giving in func :- (username = sam)

// console.log(loginUserMessage("hitesh"));

console.log(loginUserMessage()); // if we dont pass any value then it gives undefined

// in the below function the "..." before num1 is the redt operator , it makes 
// a bundle of all the things passed and stored in array
// function calculateCartPrice(...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500));


// below given func has val1, val2 and num1 with a rest operator soo now
// 200 gets stored into val1, 400 into val2 and 500 and 2000 with rest operator as array

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "jainam",
    price: 199
}

// func how to handle object . parameter is always object
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// we can either pass directly object or declare while calling function itself like done in 2nd one
handleObject(user)

handleObject({
    username: "jack",
    price: 399
})

// how to do this thing with array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));
