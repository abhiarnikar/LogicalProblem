// program 1
//JavaScript Program to Check Prime Number

function primeNo(num){
    let count = 0
    for(let i=2;i<num-1;i++){
        if(num%i==0){
            count++
        }  
    }

    if(count!=0){
        console.log('Number is not Prime')
    }
    else{
        console.log('Number is prime')
    }

}
primeNo(5)
primeNo(8)

// program 2
//Javascript Program to Check if a number is Positive, Negative, or Zero

function checkNumber(num){
    if(num==0){
        console.log('number is 0')
    }
    else if(num>0){
        console.log('number is +ve')
    }
    else{
        console.log('number is -ve')
    }
}
checkNumber(-9)
checkNumber(45)
checkNumber(0)

// program 3
// // JavaScript Program to Swap Two Variables

let A =50
let B=10
let C=A
A=B
B=C
console.log(A)
console.log(B)

//program 4
// // JavaScript Program to Find the Square Root

console.log(Math.sqrt(36))
console.log(Math.cbrt(729))

//program 5
// find age
// Using for loop
let birthYear = [2000,2002,2001]

let ages = []
for(let i=0;i<birthYear.length;i++){
    let age = 2022-birthYear[i]
    ages.push(age)
}
console.log(ages)

let aa = birthYear.map(function(el,index,arr){
    return 2022-el
})
console.log(aa)

// program 6
//sort method working

// Example 1

let ja = [1245,33,133,1453,13]
console.log(ja.sort(function(a,b){
    return a-b
}))

// Example 2

let bb = [45,69,52,78,147,36,784,254,366,45,78]

let cc = bb.sort(function(a,b){
    return a-b
})
console.log(cc)

// program 7
// // Q. seperate small and capital characters from string

let str = 'sjdhfjsdDJHDUHnsjdIRPE'

function sepCapSmall(str){
    let cap = []
    let small = []
    for(let i=0;i<str.length;i++){
        if(str[i]>='A'&&str[i]<='Z'){
            cap.push(str[i])
        }
        else{
            small.push(str[i])
        }
    }
    console.log(cap)
    console.log(small)
}
sepCapSmall(str)

