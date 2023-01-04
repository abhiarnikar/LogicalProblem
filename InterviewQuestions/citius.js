//write array of 1 to 5 numbers and perform addition of all values,
//after that perform addition of only even numbers from this array.

let array = [1,2,3,4,5]

// perform addition of all values,
let aa = array.reduce(function(acc,el){
    return acc+el
},0)
console.log(aa)

//after that perform addition of only even numbers from this array.

let bb = array.filter(function(el,index){
    return el%2 ==0
}).reduce(function(acc,el){
    return acc+el
},0)
console.log(bb)