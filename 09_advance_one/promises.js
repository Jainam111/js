const promiseOne = new Promise(function(resolve, reject){
    //
    //
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
//if resolve method is not called then it will not consume thwe promise and then only it will console log "promise consumed"

// consumption of promise
// resolve ka connection hai .then k saath
promiseOne.then(function(){
    console.log('Promise consumed');
    
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise 2 resolved");
    
})

// how to pass values from the promise to then
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// the 2nd .then directly gets the first return form the 1st .then
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            console.log("Something went wrong!"); 
        }
    }, 1000)
})

// finally always gets executed its like a default case 
promiseFour
.then((user) => {
    console.log(user);
    return user.username  
})
.then(function(username){
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            console.log("js went wrong!"); 
        }
    }, 1000) 
})

// async/await handles errors but we need to use try catch block for it
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();

// we have to await while we convert in json too as it takes time . use await to wait while it completed the pending task
// async function allUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/Jainam111')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);   
//     }
// }

// allUsers();


fetch('https://api.github.com/users/Jainam111')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})

// if we see the outputs we can see that the last code that is written above ( the fetch one) 
// that code is first then the code above that is printed 
// we will learn how fetch works
// the fetch has a separate micro task queue which we can also say that is a priority queue
// that queue has higher priority than the normal task queue