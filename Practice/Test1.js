// let info={
//     firstName:"abhijit",
//     lastName:"arnikar",
//     city:"pune"
// }

// let display=function(hometown,language){
//     console.log('welcome '+this.firstName+' '+hometown+' '+language)
// }

// display.call(info,'Dharmpuri','Marathi')

// display.apply(info,['Dharmpuri','Marathi'])

// let person={
//     firstName:'krushna',
//     lastName:'arnikar'
// }

// let bb = display.bind(person,'surat','Gujrati')
// bb()

//highest value

// let marks = [78,98,25,14,36,74,65,45]

// function max(arr){
//     let highest=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>highest){
//             highest=arr[i]
//         }
//     }
//     console.log(highest)
// }
// max(marks)

// // sort method working

// let xx = marks.sort(function(a,b){
//     return a-b
// })
// console.log(xx)

// let yy = marks.sort(function(a,b){
//     return b-a
// })
// console.log(yy)

// console.log(yy[1])

// function word(str){
//     let rev= ''
//     for(let i=0;i<str.length;i++){
//         rev=str[i]+rev
//     }
//     console.log(rev)
// }
// word('krushna')

// let word1 = 'devyani'

// let count = []
// for(let i=0;i<word1.length;i++){
//     if(count[word1[i]]){
//         count[word1[i]]=count[word1[i]]+1
//     }
//     else{
//         count[word1[i]]=1
//     }
// }
// console.log(count)

// let arr = [11, 12, 13, 14, 15]

// let aa = arr.reduce(function (acc, el) {
//     return acc + el
// }, 0)
// console.log(aa)

// let bb = arr.filter(function (el, index, arr) {
//     return el % 2 != 0
// }).reduce(function (acc, el) {
//     return acc + el
// })
// console.log(bb)

// let date = new Date()

// let day = date.getDate()
// let month = date.getMonth() + 1
// let year = date.getFullYear()

// let format = day + '-' + month + '-' + year
// console.log(format)

// let names = [
//     { "name": "abhijit" },
//     { "name": "krushna" },
//     { "name": "kaivaly" }
// ]

// function json(arr, name) {
//     let vv = arr.filter(function (el) {
//         return el.name = name
//     })
//     return vv
// }
// let rr = json(names, 'krushna')
// console.log(rr[0])

// // Problem 2

// //Given an array count the number of leader element
// //leader element that is grater element all the element in left side

// let marks = [25, 58, 41, 69, 63, 14, 70]


// let highest = 0
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > highest) {
//         highest = marks[i]
//         console.log(highest)
//     }
    
// }

// function abhi(){
//     let a = 10
//     let b = 5
//     function kaivaly(){
//         console.log(a+b)
//     }
//     kaivaly()
// }
// abhi()

// function outer(){
//     let b = 10
//     function inner(){
//         let c = 10
//         console.log(b+c)
//     }
//     return inner
// }
// let out = outer()
// out()

// let names =  ["sachin",'sehwag','rohit','tendulkar']

// let longest = names.reduce(function(acc,el){

//     if(el.length>acc.length){
//         return el
//     }
//     else{
//         return acc
//     }
// },' ')
// console.log(longest)

// let marks = [25, 58, 41, 69, 63, 14, 70]

// let highest = marks.reduce(function(acc,el){
//        if(el>acc){
//         return el
//        }
//        else{
//         return acc
//        }
// },marks[0])
// console.log(highest)

// let smallest = marks.reduce(function(acc,el){
//     if(el<acc){
//      return el
//     }
//     else{
//      return acc
//     }
// },marks[0])
// console.log(smallest)

// let info = "devyani krushna"
// let count= 0

// for(let i=0;i<info.length;i++){
//     if(info[i]=='a'||info[i]=='e'||info[i]=='i'||info[i]=='o'||info[i]=='u'){
//         count = count+1
//     }
    
// }

// console.log(count)

// let a = []

// for(let i=0;i<info.length;i++){
//     if(info[i]=='a'||info[i]=='e'||info[i]=='i'||info[i]=='o'||info[i]=='u'){
//         if(a[info[i]]){
//             a[info[i]]=Number(a[info[i]])+1
//         }
//         else{
//             a[info[i]]=1
//         }
//     }
    
// }
// console.log(a)

// let person = 'my name is abhijit arnikar'
// let cc = person.split(' ').reverse().join(' ')
// console.log(cc)


// function greet(str){
//     let palindrome = str.split('').reverse().join('')
//     console.log(palindrome===str)
// }
// greet('madam')
// greet('rotator')

// function randomNo(max,min){
//     console.log(Math.floor(Math.random()*(max-min+1))+min)
// }
// randomNo(100,50)

// // program 1
// //JavaScript Program to Check Prime Number
// function primeNo(num){
//     let count = 0
//     for(let i=2;i<num-1;i++){
//         if(num%i==0){
//             count++
//         }
//         if(count!=0){
//             console.log('number is not prime')
//         }
//         else{
//             console.log('number is prime')
//         }
//     }
// }
// primeNo(7)
// primeNo(4)

let str ='ABHijit arniKAR'

function sepCapSmall(str){
    let cap = []
    let small = []
}