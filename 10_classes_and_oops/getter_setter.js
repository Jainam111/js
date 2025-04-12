class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    // get pass
    get password(){
        return `${this._password}jainam`
    }
    // set pass in system
    set password(value){
        this._password = value
    }
}

const jainam = new User("j@jainam.ai", "abc")
console.log(jainam.password);
console.log(jainam.email);


