// in the below code -> the this.username refers to the username present in that scope
// this. is important because there might be another variable with same name outside 
// soo this. refers to the current context
const user = {
    username: "jainam",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // empty 


// in the below code if we try to apply the concept we learned in the above code it wont 
// work because it only works with objects
// function chai() {
//     let username = "jainam"
//     console.log(this.username)
// }


// given below is an arrow function it's declared as it is shown 
// syntax :- () => {}
const chai = () => {
    let username = "jainam"
    console.log(this.username)
}

chai()

// below given is normal arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// below given is an implicit return arrow function . we have to write return keyword if there are curly braces
// explicit return is when we use return keyword

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => {username: "jainam"} // this will give error as there is object and "()" are not used
// const addTwo = (num1, num2) => ({username: "jainam"}) // this wont give error


// console.log(addTwo(2, 4));
