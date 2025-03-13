// Dates

// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);  // type of date is object 

// let myCreatedDate = new Date(2023, 0, 23)   // month starts from 0 in js 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)   
// let myCreatedDate = new Date("2023-01-14")   
let myCreatedDate = new Date("01-14-2023")   
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
 
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getHours());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// ${newDate.getDay()} and the time is

newDate.toLocaleString('default',{
    weekday: "long"                                         
})                      
// Many properties like this can be used to costumize the dates more 
// to see all of them press ctrl + space     
 