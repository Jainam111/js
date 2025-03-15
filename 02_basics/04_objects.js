// const tinderUser = new Object() -> for singleton object
const tinderUser = {} // for non simgleton object

tinderUser.id = "123abc"
tinderUser.name = "zzz"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jainam@google.com",
    fullname: {
        userfullname: {
            fisrtname: "jainam",
            lastname: "bhavsar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fisrtname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} // created object inside object hence not that useful

// const obj3 = Object.assign({}, obj1, obj2, obj4) // where {} is the target and obj1,obj2 are the source

// const obj3 = {...obj1, ...obj2} // spread method - this one is better then the above two
// console.log(obj3);

// below given is th array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // run keys method on the object tinderUser
console.log(Object.values(tinderUser));  
console.log(Object.entries(tinderUser));  
// keys are:- keys_name: its_value,

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  
// check if the specific peoperty is persent on a specific object or not

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "jainam"
}

// course.courseInstructor

// here is a better syntax to do the above thing 
const {courseInstructor: instructor} = course  // const {name of key(coursename,price,etc,etc.): the name we want to give} = name of object
// It extracts courseInstructor from course and stores it in a variable of the same name.

// { courseInstructor: instructor } = course;
// Left Side: courseInstructor: instructor means:
// Extract courseInstructor
// Store it in a variable named instructor
// Right Side: = course means take values from course object.

console.log(courseInstructor);

// below given is json api

// {
//     "name": "jainam",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// below given is api in form of array

[
    {},
    {},
    {}
]