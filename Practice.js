// // program 1
// //JavaScript Program to Check Prime Number

// function primeNo(num){
//     let count = 0
//     for(let i=2;i<num-1;i++){
//         if(num%i==0){
//             count++
//         }  
//     }

//     if(count!=0){
//         console.log('Number is not Prime')
//     }
//     else{
//         console.log('Number is prime')
//     }

// }
// primeNo(5)
// primeNo(8)

// // program 2
// //Javascript Program to Check if a number is Positive, Negative, or Zero

// function checkNumber(num){
//     if(num==0){
//         console.log('number is 0')
//     }
//     else if(num>0){
//         console.log('number is +ve')
//     }
//     else{
//         console.log('number is -ve')
//     }
// }
// checkNumber(-9)
// checkNumber(45)
// checkNumber(0)

// // program 3
// // // JavaScript Program to Swap Two Variables

// let A =50
// let B=10
// let C=A
// A=B
// B=C
// console.log(A)
// console.log(B)

// //program 4
// // // JavaScript Program to Find the Square Root

// console.log(Math.sqrt(36))
// console.log(Math.cbrt(729))

// //program 5
// // find age
// // Using for loop
// let birthYear = [2000,2002,2001]

// let ages = []
// for(let i=0;i<birthYear.length;i++){
//     let age = 2022-birthYear[i]
//     ages.push(age)
// }
// console.log(ages)

// let aa = birthYear.map(function(el,index,arr){
//     return 2022-el
// })
// console.log(aa)

// // program 6
// //sort method working

// // Example 1

// let ja = [1245,33,133,1453,13]
// console.log(ja.sort(function(a,b){
//     return a-b
// }))

// // Example 2

// let bb = [45,69,52,78,147,36,784,254,366,45,78]

// let cc = bb.sort(function(a,b){
//     return a-b
// })
// console.log(cc)

// // program 7
// // // Q. seperate small and capital characters from string

// let str = 'sjdhfjsdDJHDUHnsjdIRPE'

// function sepCapSmall(str){
//     let cap = []
//     let small = []
//     for(let i=0;i<str.length;i++){
//         if(str[i]>='A'&&str[i]<='Z'){
//             cap.push(str[i])
//         }
//         else{
//             small.push(str[i])
//         }
//     }
//     console.log(cap)
//     console.log(small)
// }
// sepCapSmall(str)

// // program 8
// //  expand in string
// // let stri = '2z3x2c'
// function expand(str){
//     let A = ''
//     for(let i=0; i<str.length; i=i+2){
//         A = A + str[i+1].repeat(str[i])
//     }
//     console.log(A)
// }
// expand('2z3x2c')
// expand('4a2z6v')

// function expand1(str){
//     let B = ''
//     for(let i=1;i<str.length;i=i+1){
//         B=B+str[i-1].repeat(str[i])
//     }
//     console.log(B)
// }
// expand1('a2b3c4')

// // program 9
// // Problem = concate subarray in array (remove sub array and made one)
// let array =[[78,36],[25,36,41],[86,47,96]]
// let abc = array.flat()
// console.log(abc)


// // program 10
// // remove duplicate elements from the arrey

// let arr = [15, 66, 88, 12, 66, 57, 88, 15]

// // 1st method
// let set = new Set(arr)
// console.log(set)

// // 2nd Method
// let vv = []

// function doublValue(arr){
// for(let i=0;i<arr.length;i++){
//     if(!vv.includes(arr[i])){
//         vv.push(arr[i])
//     }
// }
// console.log(vv)
// }
// doublValue(arr)

// Problem 11
// Problem = Peackup max  value from array
let arr1 = [10, 52, 47, 96, 36, 14, 2, 63, 15]
let max = 0

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i]
    }

}
console.log(max)

// find min value in array

let min = arr1.reduce(function (acc, el, index, arr) {
    if (el < acc) {
        return el
    }
    else {
        return acc
    }
}, arr1[0])

console.log(min)

// Problem 12
// Problem = Remove first and last characters(substring) from given string

let str = 'abhijitarnikar'
let aa = ''
console.log(str.length)
// 1st Method
for (let i = 0; i < str.length; i++) {
    if (i != 0 && i != str.length - 1) {
        aa = aa + str[i]
    }
}
console.log(aa)

// 2nd Method

console.log(str.slice(1, 13))
console.log(str.slice(1, str.length - 1))

// Problem 13

// Problem = Reverse the only string elements

let info = 'my name is abhijit arnikar'
let ww = info.split(' ').reverse().join(' ')
console.log(ww)

// Problem 14
function separate(str){
    let num = ''
    let char =''
    for(let i=0;i<str.length;i++){
        if(Number(str[i])){
            num=num+str[i]
        }
        else{
            char=char+str[i]
        }
    }
    console.log(num)
    console.log(char)
}
separate('abhijit725@gmail.com')

// Problem 15
// separate out the even and odd numbers from the arrey

let marks = [45,65,74,56,85,26]
let even = []
let odd = []

for(let i=0;i<marks.length;i++){
    if(marks[i]%2==0){
      even.push(marks[i])
        
    }
    else{
        odd.push(marks[i])
    }
}
console.log(even)
console.log(odd)

// Problem 16
// Q. given email first letter convert upper case and only give before @ string

let email = "krishnakachare2@gmail.com"
let mail = ''
for(let i=0; i<email.length; i++){
    if(i==0){
       mail = mail + email[i].toUpperCase()
    }else if(email[i]=='@'){
        break
    }else{
        mail = mail + email[i]
    }
}
console.log(mail)

// problem 17
// Capital only first letter  in string
let word = 'abhijit'
let vv = word[0].toUpperCase()+word.slice(1)
console.log(vv)

// Problem 18
// 2.LOGICAL -- convert to upper case of each word first letter in given sentence
// let info = 'my name is abhijit arnikar'
let xx = []
let yy = info.split(' ')
for(let i=0;i<yy.length;i++){
    let z = yy[i][0].toUpperCase()+yy[i].slice(1)
    xx.push(z)
}
console.log(xx.join(' '))

