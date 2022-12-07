// let A = [1,2,3,4,5] 
//  output ==> [14,13,12,11,10]
// let B = []
// for(let i=0; i<A.length; i++){
//     let a = 0
//     for(let j=0; j<A.length; j++){
//         if(i==j){
//             continue
//         }
//         a = a + A[j]
//     }
//      B.push(a)
// }

// console.log(B)

// 1. reverse  string
let myname = 'krishna'
// By using method
// console.log(myname.split('').reverse().join(''))
//------------------------------------
// By using Loop
//let revstr = ''
// for(let i=0; i<myname.length; i++){
//     revstr = myname[i] + revstr
// }
// console.log(revstr)

// ================================================================================================
// 2. count vowels(a,e,i,o,u) in above string
// let sent = 'my good name is krishna.'
// let count = 0
// for(let i=0; i<sent.length; i++){
//     if(sent[i]=='a' || sent[i]=='e' || sent[i]=='i' || sent[i]=='o' || sent[i]=='u'){
//         count++
//     }
// }
// console.log(count)



// ================================================================================================
// Capital only first letter  in string
// 1. one word
// let str1 = 'suraj'
// by using method
// let A = str1[0].toUpperCase() + str1.slice(1)
// console.log(A)
//------------------------------------
// by using Loop
// let A =''
// for(let i=0; i<str1.length; i++){
//    if(i==0){
//     A = A + str1[i].toUpperCase()
//    }else{
//     A = A + str1[i]
//    }
// }
// console.log(A)

// ================================================================================================
// 2.LOGICAL -- convert to upper case of each word first letter in given sentence
// let sentence = 'my good name is krishna.'
// let A = []
// let B = sentence.split(' ')
// for(let i=0; i<B.length; i++){
//     let a = B[i][0].toUpperCase() + B[i].slice(1)
//     A.push(a)
// }
// console.log(A.join(' '))

// ================================================================================================
// Q. given email first letter convert upper case and only give before @ string ( its related to nikhil project)
// let email = "krishnakachare2@gmail.com"
// let mail = ''
// for(let i=0; i<email.length; i++){
//     if(i==0){
//        mail = mail + email[i].toUpperCase()
//     }else if(email[i]=='@'){
//         break
//     }else{
//         mail = mail + email[i]
//     }
// }
// console.log(mail)

// ================================================================================================
// Q. change date format
// let date = '27/09/2021'
// console.log(date.split('/').join('-'))
// let A = date.split('/')
// let B = `${A[2]}-${A[1]}-${A[0]}`
// console.log(B)
// ================================================================================================
// Q. collect even PLACE numbers
// By for Loop
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let evenPlace = []
// for(let i=0; i<arr.length; i++){
//     if((i+1)%2==0){
//         evenPlace.push(arr[i])
//     }
// }
// console.log(evenPlace)
// --------------------------------------
// By Using Method
// function evenPlace(arr){
//     let A = arr.filter(function(el,index){
//          return (index+1)%2 ==0
//     })
//     console.log(A)
//  }
//  evenPlace([1,2,3,4,5,6,7,8,9,10])

// =======================================================================================================
// Q. collect even numbers
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
// let evenNo = []
// ================================================================================================
// By for loop
// for(let i=0; i<arr.length; i++){
//    if(arr[i]%2==0){
//     evenNo.push(arr[i])
//    }
// }
// console.log(evenNo)
// ================================================================================================
// By Using Method
// let A = arr.filter(function(el,index){
//         return el%2 ==0
// })
// console.log(A)
// ===========================================================================================================
// separate out the even and odd numbers from the arrey
// function seperatoutNumbers(arr){
//     let even = []
//     let odd = []
//      for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//            even.push(arr[i])
//         }else{
//             odd.push(arr[i])
//         }
//      }
//      console.log(even)
//      console.log(odd)
// }
// seperatoutNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// ================================================================================================
// separate out  alphabets and numbers 
// function seperatoutNumberandalphabets(str){
//     let Num = ''
//     let alpha = ''
//     for(let i=0; i<str.length; i++){
//         if(Number(str[i])){
//             Num = Num + str[i]
//         }else{
//             alpha = alpha + str[i]
//         }
//     }
//     console.log(Num)
//     console.log(alpha)
// }
// seperatoutNumberandalphabets('suraj123dadas')
// =======================================================================================================
// find the length of the number
// let kk = 1234567890
// console.log(String(kk).length)
// ========================================================================================================
// count the characters from given string
// Using method
// let n = 'swapnil'
// console.log(n.length)
// ----------------------------------------
// For loop
// let count = 0
// for(let i=0;i<n.length; i++){
//    count++
// }
// console.log(count)
// ===========================================================================
// Problem = Reverse the only string elements
let str = "Hello! Hi, i am 'krishna'."
let str1 = str.split(' ')
// let revstr = ''
// for(let i=0; i<str1.length; i++){
//     revstr = revstr +' '+ str1[i]
// }
// console.log(revstr)
// -------------------------------------
// console.log(str1.reverse().join(' '))
// ================================================================================================
// Problem = Seperate the string where we required
// seperate string from . and print elements
// let x ='python.py' 
// console.log(x.split('.'))
// ================================================================================================
// Printing string elements by there index value
// let Y= "Script.js"
// console.log(Y.charAt(0))
// ================================================================================================
// Problem = Remove string first and last characters(substring) from given string
let kk = 'shrikrishnak'
let A = ''
// for(let i=0; i<kk.length; i++){
//     if(i!=0 && i!=kk.length-1){
//         A = A + kk[i]
//     }
// }
// console.log(A)
// ------------------------------
// console.log(kk.slice(1,11))
// ================================================================================================
// Problem = Peackup max and min values from array
// let arr = [1,2,3,66,22,34,78,45,-3,0,88]
// let max = 0
// let min = 0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// console.log(max)
// console.log(min)
// ================================================================================================
// Q. remove duplicate elements from the arrey
// let arr = [12, 34, 12, 44, 34, 12, 45, 34, 57]
// let unarr = [];
// for(let i=0; i< arr.length; i++){
//     if(!unarr.includes(arr[i])){
//         unarr.push(arr[i])
//     }
// }
// console.log(unarr)

// ================================================================================================
// remove duplicate elements from the arrey
// let arr = [15, 66, 88, 12, 66, 57, 88, 15]
// let AA = []
// for(let i=0; i<arr.length; i++){
//     if(!AA.includes(arr[i])){
//         AA.push(arr[i])
//     }
// }
// console.log(AA)
// ==============================================================================================================
// multiple occurance of index of method
// let k1 = [1,1,1,1,2,2,2]
// By default index of method find the first occurance of element and return its index no.
// console.log(k1.lastIndexOf(2))   // Last Index
// console.log(k1.indexOf(2))       // First Index
// =================================================================================================================
// Problem = concate subarray in array (remove sub array and made one)
// let arr = [ [20,30],[40,50,60],[70,80,90]]
// let [a,b,c] = arr
// console.log([...a,...b,...c])
// console.log(arr.join())
// ================================================================================================
// find no. of characters in string
// let k2 = 'Shrikrishna G Kachare'
// console.log(k2.length)
// //---------------------------------------
// let count = 0
// for(let i=0; i<k2.length; i++){
//     count++
// }
// console.log(count)
// ================================================================================================
// compress given string
// Using for loop  
function compress(str){
    let count = 1
    let compstr = ''
    for(let i=0; i<str.length; i++){
        if(str[i]==str[i+1]){

            count++
        }else{
            compstr = compstr + count + str[i]
            count = 1
        }
    }
    console.log(compstr)
}
// compress('abbcccddddeeeeeffffff')
// compress('aaaaaacccccccvvvvvvnnnnyyyyyy')  
// compress("aaaabbbccd");
// compress("aaaabbbccd");
// ================================================================================================
//  expand in string
// let stri = '2z3x2c'
function expand(str){
    let A = ''
    for(let i=0; i<str.length; i=i+2){
        A = A + str[i+1].repeat(str[i])
    }
    console.log(A)
}
// expand('2z3x2c')
// expand('4a2z6v')
// ================================================================================================
// expanding string by using repeat method
// comp('4a2z6v')

// ================================================================================================
//Problem 10---->Compresing the string
// print output is ans=123 from given input is [123]
// let input = [123]
// console.log(`ans=${input[0]}`)
// ==================================================================================================================
//Q. find out count of word(substring) in given string
// let statementA ="I am new to javascript and i wish to learn every concept of javascript . javascript is great";
// console.log(statementA.split(' ').length)
// ==============================================================================================================
// Problem  = Seperate Alphabets,Numbers and Symbols(Special Chara) from given string
// Example 1.
// let str2 = 'AAAAAC2345@#$&6CCCDD%Z'
function separateoutchar(str2){
    let num = []
    let alpha = []
    let spcl = []
    for(let i=0; i<str2.length; i++){
        if(Number(str2[i])){
            num.push(str2[i])
        }else if((str2[i]>='A' && str2[i]<='Z') || (str2[i]>='a' && str2[i]<='z')){
            alpha.push(str2[i])
        }else{
            spcl.push(str2[i])
        }
    }
    console.log(num)
    console.log(alpha)
    console.log(spcl)
}
// separateoutchar('AAAAAC2345@#$&6CCCDD%Z')
// separateoutchar('123AAAAbaca3435354@@2222!!!&&&&3534535354sca')

// ================================================================================================
// Prob = seperate the numbers and strings from given array
// FIRST APPROACH
// let arr = [-6, 'krishna', 2, 'swapnil', 0, 'vishwajit',22,78]
// let number = [];
// let char = [];









// ================================================================================================
// SECOND APPROACH ( USING FOREACH METHOD)
// let arr = [-6, 'krishna', 2, 'swapnil', 0, 'vishwajit',22,78]
// let number = [];
// let char = [];
// arr.forEach(function(el,index){
//     if(Number(arr[index]) || arr[index]==0){
//         number.push(arr[index])
//     }else{
//         char.push(arr[index])
//     }
// })
// console.log(number)
// console.log(char)

// ********************************************  REGULAR EXPRESSION  *************************************************/
// Q. seperate small and capital characters
// Example1. 
// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"
function sepCapSmall(str){
    let Cap = []
    let Small = []
    for(let i=0; i<str.length; i++){
        if(str[i]>='A'&& str[i]<='Z'){
           Cap.push(str[i])
        }else{
            Small.push(str[i])
        }
    }
    console.log(Cap)
    console.log(Small)
}
// sepCapSmall('QFGZHhghjgjhghjgQFdghfhjgjgjAADD')
// sepCapSmall('QFGZHhghjgjhghjgQFdghfhjgjgjAADD')
// ================================================================================================
// rest operator
// let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(...abc)
// ================================================================================================
// NOTE = By using destructuring  we can access STARTING, MIDDLE (anywhere) , LAST values of array and also object
// let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]









// ================================================================================================
// Q. count elements
// let str = '123456789'







// ================================================================================================
// sort method working
// let ja = [1245,33,133,1453,13]
// console.log(ja.sort(function(a,b){
//     return a-b
// }))







// ================================================================================================
// find age
// Using for loop
let birthYear = [2000,2002,2001]
// let age = []
// for(let i=0 ;i<birthYear.length; i++){
//     let a = 2022 - birthYear[i]
//     age.push(a)
// }
// console.log(age)
// -------------------------------------
//Using Method
// let AC = []
// birthYear.forEach(function(el,index){     // By using forEach Method
//     let A = 2022 - el
//     AC.push(A)
// })
// console.log(AC)
// // ------------------------------------
// let AD= birthYear.map(function(el){       // By using Map Method
//     return 2022- el
// })
// console.log(AD)

// ================================================================================================
// JavaScript Program To Print Hello World
// console.log('Hello World')
// ================================================================================================
// JavaScript Program to Add Two Numbers
// console.log(10+10)
// ================================================================================================
// JavaScript Program to Find the Square Root
// console.log(Math.sqrt(25))
// console.log(Math.cbrt(27))
// ================================================================================================
// JavaScript Program to Calculate the Area of a Triangle






// ================================================================================================
// JavaScript Program to Swap Two Variables
let AAA = 20
let BB = 50
let C = AAA
AAA = BB
BB = C

console.log(AAA)
console.log(BB)

// ================================================================================================
// Javascript Program to Solve Quadratic Equation 






// ================================================================================================
// JavaScript Program to Convert Kilometers to Miles







// ================================================================================================
// Javascript Program to Convert Celsius to Fahrenheit
//  (Celsius °C × 9/5) + 32 = Fahrenheit  °F
// let Celsius = 20






// ================================================================================================
// Javascript Program to Generate a Random Number
// console.log(Math.ceil(Math.random()*10))
// console.log(Math.floor(Math.random()*10))

// ================================================================================================
// Javascript Program to Check if a number is Positive, Negative, or Zero
// function checkNumber(num){
//     if(num==0){
//         console.log(`Number is Zero`)
//     }else if(num > 0){
//         console.log(`Number is Positive`)
//     }else{
//         console.log(`Number is Negative`)
//     }
// }
// checkNumber(-0)
// checkNumber(-125)
// checkNumber(-25)

// ================================================================================================
// Javascript Program to Check if a Number is Odd or Even








// ================================================================================================
// JavaScript Program to Find the Largest Among Three Numbers







// ================================================================================================
// JavaScript Program to Check Prime Number
// 1,2,3,5,7,11,13,17,23
// function PrimeNumber(num){
//     let count = 0
//     for(let i=2; i<num-1; i++){
//         if(num%i==0){
//             count++
//         }
//     }
//     if(count!=0){
//         console.log(`Number is not a Prime Number`)
//     }else{
//         console.log(`Number is Prime Number`)
//     }
// }
// PrimeNumber(5)
// PrimeNumber(9)
// ================================================================================================
// JavaScript Program to Print All Prime Numbers in an Interval
// function Prime(num){
//     let count = 0
//     for(let i=2; i<num-1; i++){
//         if(num%i==0){
//             count++
//         }
//     }
//     if(count!=0){
//         return false
//     }else{
//         return true
//     }
// }
// let Num = 100
// let primeNum = []
// for(let i=2; i<Num; i++){
//     if(Prime(i)){
//         primeNum.push(i)
//     }
// }
// console.log(primeNum)
// ================================================================================================
// JavaScript Program to Find the Numbers Divisible of a Number








// ================================================================================================
// JavaScript Program to Display the Multiplication Table








// ================================================================================================
// JavaScript Program to Print the Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...








// ================================================================================================
// JavaScript Program to Make a Simple Calculator






// ================================================================================================
// JavaScript Program to Find the Sum of Natural Numbers







// ================================================================================================
//  all the positive integers from 1 till infinity 1,2,3,4,5,6,7,........






// ================================================================================================
// JavaScript Program to Check if the Numbers Have Same Last Digit







// ================================================================================================
// JavaScript Program to Find HCF or GCD








// ================================================================================================
// JavaScript Program to Find LCM







// ================================================================================================
// JavaScript Program to Find the Factors of a Number








// ================================================================================================
// JavaScript Program to Find Sum of Natural Numbers Using Recursion







// ================================================================================================
// JavaScript Program to Guess a Random Number






// ================================================================================================
// JavaScript Program to Shuffle Deck of Cards





// ================================================================================================
// JavaScript Program to Display Fibonacci Sequence Using Recursion





// ================================================================================================
// JavaScript Program to Find Factorial of Number Using Recursion






// ================================================================================================
// JavaScript Program to Convert Decimal to Binary







// ================================================================================================
// JavaScript Program to Find ASCII Value of Character







// ================================================================================================
// JavaScript Program to Check Whether a String is Palindrome or Not









// ================================================================================================
// JavaScript Program to Sort Words in Alphabetical Order








// ================================================================================================
// JavaScript Program to Replace Characters of a String








// ================================================================================================
// JavaScript Program to Reverse a String







// ================================================================================================
// JavaScript Program to Create Objects in Different Ways
// 1. Object Literal

// 2. Function Constructor

// ES6 Class
// 1. Defining The Properties Outside The Class

// 2. Defining the properties inside The Class

//set Method

// Object Creation










// ================================================================================================
// JavaScript Program to Check the Number of Occurrences of a Character in the String








// ================================================================================================
// JavaScript Program to Convert the First Letter of a String into UpperCase









// ================================================================================================
// JavaScript Program to Count the Number of Vowels in a String








// ================================================================================================
// JavaScript Program to Remove a Property from an Object








// ================================================================================================
// JavaScript Program to Check Whether a String Starts and Ends With Certain Characters









// ================================================================================================
// JavaScript Program to Check if a Key Exists in an Object









// ================================================================================================
// JavaScript Program to Clone a JS Object








// ================================================================================================
// JavaScript Program to Loop Through an Object












// ================================================================================================
// JavaScript Program to Merge Property of Two Objects









// ================================================================================================
// JavaScript Program to Count the Number of Keys/Properties in an Object









// ================================================================================================
// JavaScript Program to Add Key/Value Pair to an Object








// ================================================================================================
// JavaScript Program to Replace All Occurrences of a String









// ================================================================================================
// JavaScript Program to Create Multiline Strings









// ================================================================================================
// JavaScript Program to Format Numbers as Currency Strings









// ================================================================================================
// JavaScript Program to Generate Random String








// ================================================================================================
// JavaScript Program to Check if a String Starts With Another String








// ================================================================================================
// JavaScript Program to Trim a String








// ================================================================================================
// JavaScript Program to Convert Objects to Strings








// ================================================================================================
// JavaScript Program to Check Whether a String Contains a Substring








// ================================================================================================
// JavaScript Program to Compare Two Strings








// ================================================================================================
// JavaScript Program to Encode a String to Base64








// ================================================================================================
// JavaScript Program to Replace all Instances of a Character in a String








// ================================================================================================
// JavaScript Program to Replace All Line Breaks with









// ================================================================================================
// JavaScript Program to Display Date and Time








// ================================================================================================
// JavaScript Program to Check Leap Year








// ================================================================================================
// JavaScript Program to Format the Date








// ================================================================================================
// Javascript Program to Display Current Date









// ================================================================================================
// JavaScript Program to Compare The Value of Two Dates









// ================================================================================================
// JavaScript Program to Create Countdown Timer








// ================================================================================================
// JavaScript Program to Remove Specific Item From an Array









// ================================================================================================
// JavaScript Program to Check if An Array Contains a Specified Value







// ================================================================================================
// JavaScript Program to Insert Item in an Array








// ================================================================================================
// JavaScript Program to Append an Object to An Array







// ================================================================================================
// JavaScript Program to Check if An Object is An Array








// ================================================================================================
// JavaScript Program to Empty an Array









// ================================================================================================
// JavaScript Program to Add Element to Start of an Array








// ================================================================================================
// JavaScript Program to Remove Duplicates From Array











// ================================================================================================
// JavaScript Program to Merge Two Arrays and Remove Duplicate Items










// ================================================================================================
// JavaScript Program to Sort Array of Objects by Property Values









// ================================================================================================
// JavaScript Program to Create Two Dimensional Array








// ================================================================================================
// JavaScript Program to Extract Given Property Values from Objects as Array









// ================================================================================================
// JavaScript Program to Compare Elements of Two Arrays









// ================================================================================================
// JavaScript Program to Get Random Item From an Array









// ================================================================================================
// JavaScript Program To Perform Intersection Between Two Arrays









// ================================================================================================
// JavaScript Program to Split Array into Smaller Chunks










// ================================================================================================
// JavaScript Program to Include a JS file in Another JS file










// ================================================================================================
// JavaScript Program to Get File Extension









// ================================================================================================
// JavaScript Program To Check If A Variable Is undefined or null









// ================================================================================================
// JavaScript Program to Set a Default Parameter Value For a Function






// ================================================================================================
// JavaScript Program to Illustrate Different Set Operations








// ================================================================================================
// Javascript Program to Generate a Random Number Between Two Numbers







// ================================================================================================
// JavaScript Program To Get The Current URL









// ================================================================================================
// JavaScript Program to Validate An Email Address







// ================================================================================================
// JavaScript Program to Check If a Variable is of Function Type








// ================================================================================================
// JavaScript Program To Work With Constants







// ================================================================================================
// JavaScript Program to Pass Parameter to a setTimeout() Function







// ================================================================================================
// JavaScript Program to Generate a Range of Numbers and Characters








// ================================================================================================
// JavaScript Program to Perform Function Overloading








// ================================================================================================
// JavaScript Program to Implement a Stack







// ================================================================================================
// JavaScript Program to Implement a Queue









// ================================================================================================
// JavaScript Program to Check if a Number is Float or Integer









// ================================================================================================
// JavaScript Program to Pass a Function as Parameter








// ================================================================================================
// JavaScript Program to Get the Dimensions of an Image









// ================================================================================================
// JavaScript Program to Remove All Whitespaces From a Text









// ================================================================================================
// JavaScript Program to Write to Console










// ================================================================================================
// JavaScript Program to Convert Date to Number
















