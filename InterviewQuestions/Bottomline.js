
// Problem 1) find the highest value of an array
let array = [11,45,36,22,14]

// 1st way
console.log(Math.max(...array))

// 2nd way with function

function maxNumber(array){
    let highest =0;
    for(let i=0;i<array.length;i++){
        if(array[i]>highest){
            highest=array[i]
        }
    }
    return highest
}

let aa = maxNumber([78,25,63,98,14,36])
console.log(aa)
let bb = maxNumber([78,98,147,25,36,454])
console.log(bb)

// Problem 2) find the second highest number of an array

// 1st way
let arr2 = [14,57,96,36,45,25]

// program 6
//sort method working

// Example 1

let ja = [1245,33,133,1453,13]
console.log(ja.sort(function(a,b){
    return a-b
}))

// Example 2

let bb1 = [45,69,52,78,147,36,784,254,366,45,78]

let cc = bb1.sort(function(a,b){
    return b-a
})
console.log(cc)

