
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

let secondLarge = arr2.sort().reverse()
console.log(secondLarge[1])


