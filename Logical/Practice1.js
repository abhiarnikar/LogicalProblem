// // program 1
// //JavaScript Program to Check Prime Number

function primeNo(num){
    let count=0
    for(let i=2;i<num-1;i++){
        if(num%i==0){
            count++
        }
    }
    if(count !=0){
        console.log('Number is not prime')
    }
    else{
        console.log('Number is prime')
    }
}
primeNo(5)
primeNo(6)

// // program 2
// //Javascript Program to Check if a number is Positive, Negative, or Zero

function checkNumber(num){
    if(num==0){
        console.log('NUmber is 0')
    }
    else if(num>0){
        console.log('NUmber is +ve')
    }
    if(num<0){
        console.log('NUmber is -ve')
    }
}
checkNumber(0)
checkNumber(121)
checkNumber(-12)

// // program 3
// // // JavaScript Program to Swap Two Variables

let a =10
let b=50
let c=a
a=b
b=c
console.log(a)
console.log(b)

// //program 4
// // // JavaScript Program to Find the Square Root

console.log(Math.sqrt(36))
///program 5
// // find age
// // Using for loop
 let birthYear = [2000,2002,2001]
let m = birthYear.map(function(el,index,arr){
    return 2022-2000
})
console.log(m)


// // program 6
// //sort method working

let marks  = [45,69,63,41,85,14,25,74,141,52]
let aa = marks.sort(function(a,b){
    return a-b
})
console.log(aa)

let bb = marks.sort(function(a,b){
    return b-a
})
console.log(bb)

// // program 7
// // // Q. seperate small and capital characters from string
let word = "fsdhfhsSBHSBsdhcOWIEJ"
function CapSmall(str){
         let cap = []
         let small=[]
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
CapSmall(word)


// // program 8
// //  expand in string

let xx = '2p3q4r'
function word1(str){
    let A = ''
    for(let i=0;i<str.length;i=i+2){
      A= A+str[i+1].repeat(str[i])
    }
    console.log(A)
}
word1(xx)
word1('3k4j5l')

function word2(str){
    let A = ''
    for(let i=1;i<str.length;i=i+1){
      A= A+str[i-1].repeat(str[i])
    }
    console.log(A)
}
word2('A2B3C4')

// // program 9
// // Problem = concate subarray in array (remove sub array and made one)
// let array =[[78,36],[25,36,41],[86,47,96]]
// let abc = array.flat()
// console.log(abc)

// // program 10
// // remove duplicate elements from the arrey

let arr =[78,52,63,74,63,52,78]
let vv = []
for(let i=0;i<arr.length;i++){
    if(!vv.includes(arr[i])){
        vv.push(arr[i])
    }
}
console.log(vv)

let numbers = [58,69,74,11,25,36,85,75]

// method 1

function max(arr){
    let highest = 0
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>highest){
            highest=numbers[i]
        }
    }
    console.log(highest)
}
max(numbers)

// method 2
let max1 = numbers.reduce(function(acc,el,indexarr){
    if(el>acc){
        return el
    }
    else{
        return acc
    }
},numbers[0])
console.log(max1)

let min = numbers.reduce(function(acc,el,indexarr){
    if(el<acc){
        return el
    }
    else{
        return acc
    }
},numbers[0])
console.log(min)

// Problem 12
// Problem = Remove first and last characters(substring) from given string

let abhi = 'KaivalyArnikar'
let zz = ''
for(let i=0;i<abhi.length;i++){
    if(i !=0 && i !=abhi.length-1){
        zz=zz+abhi[i]
    }
}
console.log(zz)

// Problem 13

// Problem = Reverse the only string elements

let info = 'i am live in pune'
console.log(info.split(' ').reverse().join(' '))

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