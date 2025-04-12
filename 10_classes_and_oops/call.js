function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called"); 
}

function createUser(username, email, password){
    // setUserName(username) // just referance i sgiven no call happens
    // setUserName.call(username)  // use .call for calling object but change in object does not hapen
    setUserName.call(this, username) // now the process is completed
     
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);



