const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObj) {
//     console.log(`${key} shortcut is ${myObj[key]}`);
    
// }

// arrays also have keys and it always starts from 0
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// maps can't be iterated throght this