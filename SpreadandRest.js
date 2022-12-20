// rest parameter

function array(...arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum=arr[i]+sum
    }
    console.log(sum)
}

// Rest Parameter allows (...) a function to treat an indefinite number of arguments as an array

// spread operator

let array1 =[1,2,3]
let array2 = [4,5,6,...array1]

console.log(array2)

// spread Operator syntax can be used when all elements from an object or array need to be included in 
// a new array or object