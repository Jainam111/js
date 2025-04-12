// let myName = "jainam   "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.jainam = function(){
    console.log('Jainam is present in all objects');
}

Array.prototype.heyJainam = function(){
    console.log(`Jainam says hello`);
    
}


// heroPower.jainam()
// myHeros.jainam()

// myHeros.heyJainam()
// heroPower.heyJainam()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    idAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

//In the below code the teacher can access the properties of uswer. this is called prototype inheritace
Teacher.__proto__ = User


//modern syntax

// teachingSupport accesses the properties of Teacher 
Object.setPrototypeOf(teachingSupport, Teacher)


let anotherUsername = "chaiaurcode      "

String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`); // undefined
    console.log(`The true length is ${this.trim().length}`);   
}

anotherUsername.truelength()

// in the below codes the this prints the current string . this means we are talking wrt current context
"jainam".truelength()
"ice".truelength()
