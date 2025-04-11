// const user = {
//     username: "jainam",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         // console.log("got user details from database"); 
//         // console.log(`Username=${this.username}`);
//         console.log(this);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User (uname, loginCount, isLoggedIn){
    this.uname = uname
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this 
}

const userOne = new User("jainam", 2, true)
const userTwo = new User("Chai aur code", 2, true)


console.log(userOne);
