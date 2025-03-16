// {} -> this is a scope
// let and const do not come out of the scope but var does
// for example in the below code a, b and c are declared in the scope if if condition
// not if we try to print all of them outside the scope and if we try on a and b it will give error 
// but in case of c it will work perfectly hence var in such cases creates trouble
// also if we dont use var or const or anything and directly declare in that case too this problem will come

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

// nested scope
// while useing nested functions the child can access parents's variables
    function one(){
        const username = "jainam"

        function two(){
            const website = "youtube"
            console.log(username);
        }
        // console.log(username);

        two()
    }
// one()

if (true) {
    const username = "jainam"
    if (username === "jainam") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // we get error here due to out of scope
}
// console.log(username);  // we get error here due to out of scope

//+++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++

// below given is a function
// if we call before its definitation it executes and does not give error
addOne(5)

function addOne(num){
    return num + 1
}


// below given is also a function but its an expression
// it gives error if we call it before its definitation 
addTwo(5)

const addTwo = function(num){
    return num + 2
}
