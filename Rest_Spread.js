// Rest Parameter

// the rest parameter allows to represent an indefinite No of arguments as an array

// syntax 
// function function_name(...array){
//     statement
// }

// The rest operator must be the last parameter to a function


function greet(...array){
    console.log(array)
}
greet(45,36,36,8,51,63,41,79,25)


// spread operator

// spread syntax can be used when all elements from an object or array
// need to be included in a new object or array

let a = [45,36,25]
console.log(a)
let b = [...a,10,20]
console.log(b)