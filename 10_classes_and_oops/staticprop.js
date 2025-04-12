class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
    // if we dont want to give access to the classes that are instance of this class we use static
    static createId(){
        return `123`
    }
}

const jainam = new User("jainam")

// dosent work coz its static
// console.log(jainam.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("phone", "i@phone.com")
iPhone.logMe()
// console.log(iPhone.createId());  // static hence does not give id


