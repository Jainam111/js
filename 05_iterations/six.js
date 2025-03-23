// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item)=> {
//     // console.log(item);
//     return item;
// } )

// console.log(values);

//forEach doe not return any thing 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num)=>num>4 )
// console.log(myNums);

// the filter function returns the values
// in filter there is a call back function and each value is 
// is accessed and we have to give the condition.
// who all will satisfy the condition will be returned
// if we dont add curly brackets like in the above given example there is no need to write return keyword
// but if we makr a scope( {} ) we need to write return keyword shown below
// this concept is discussed in 03_basics in arrow.js

// const newNums = myNums.filter( (num)=>{
//     return num>4;
// } )
// console.log(myNums);

// how to use forEach for the same thing as done above

const newNum = []

myNums.forEach( (num)=>{
     if(num>4){
        newNum.push(num);
     }
} )

// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter( (bk)=> bk.publish > 1995 && bk.genre === 'History')
console.log(userBooks);



 
