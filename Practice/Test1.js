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

// let str ='ABHijit arniKAR'

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

// function expand(strA){
//     let A = ''
//     for(let i=1;i<strA.length;i=i+1){
//         A=A+strA[i-1].repeat(strA[i])
//     }
//     console.log(A)
// }
// expand('A3B2C1')

// function expand(strA){
//     let A = ''
//     for(let i=0;i<strA.length;i=i+2){
//         A=A+strA[i+1].repeat(strA[i])
//     }
//     console.log(A)
// }
// expand('3P2Q1R')

// // // remove duplicate elements from the arrey

// let arr = [11,22,33,44,22,11]

// let set = new Set(arr)
// console.log(set)

// let aa = []

// for(let i=0;i<arr.length;i++){
//     if(! aa.includes(arr[i])){
//         aa.push(arr[i])
//     }
// }
// console.log(aa)

// let word = 'AbhijitArnikar'
// let cc = ''
// for(let i=0;i<word.length;i++){
//     if(i !=0&& i !=word.length-1){
//         cc=cc+word[i]
//     }
// }
// console.log(cc)

// console.log(word.slice(1,13))

// function seperate(str){
//     let num =''
//     let char = ''
//     for(let i=0;i<str.length;i++){
//         if(Number(str[i])){
//             num=num+str[i]
//         }
//         else{
//             char=char+str[i]
//         }
//     }
// console.log(num)
// console.log(char)

// }
// seperate('devarnikar725@gmail.com')

// let mail = 'abhiarnikar725@gmail.com'
// let aaa = ''
// for(let i=0;i<mail.length;i++){
//     if(i==0){
//         aaa=aaa+mail[i].toUpperCase()
//     }
//     else if(mail[i]=='@'){
//         break
//     }
//     else{
//         aaa=aaa+mail[i]
//     }
// }
// console.log(aaa)

// Capital only first letter  in string

// let word = 'abhijit'
// let zz = word[0].toUpperCase()+word.slice(1)
// console.log(zz)

// // 2.LOGICAL -- convert to upper case of each word first letter in given sentence

// let info = 'i am living in pune'
// let aa = info.split(' ')
// console.log(aa)
// let bb = []

// for(let i=0;i<aa.length;i++){
//     let A = aa[i][0].toUpperCase()+aa[i].slice(1)
//     bb.push(A)
// }
// console.log(bb.join())

// promises

// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5
//     if(a>b){
//         resolve('true')
//     }
//     else{
//         reject('false')
//     }
// }).then(function(str){
//     console.log('comparision is correct',str)
// },function(str){
//     console.log('comparision is wrong',str)
// })

// destructure

// let names  = [['abhijit','kaivaly'],['ram','krushna'],['devayni','vaishnavi']]

// let [[a1,a2],[a3,a4],[a5,a6]]=names
// console.log(a2)
// console.log(a4)

// let info = {
//     firstName:'abhijit',
//     lastName:'arnikar',
//     city:'pune',
//     language:'marathi'
// }
// let {firstName:fn,lastName:ln,city:ct,language:lg}=info
// console.log(fn)
// console.log(ln)

// let info = new Map()
// console.log(info)

// info.set(31,'age')
// info.set('lastName','arnikar')
// info.set(true,'is married')
// console.log(info)

// console.log(info.size)
// console.log(info.has('lastName'))

// console.log(info.get(true))

// let names = new Set()
// console.log(names)
// names.add('abhi')
// names.add('vishwa')
// names.add('ram')
// names.add('abhi')

// console.log(names)

// function greet(...array){
//     console.log(array)
// }
// greet(45,36,85,74,69,12)

// let a = [11,22,33]
// console.log(...a,78,45,69)


// // creating objects

// let info = {
//     firstName:"abhijit",
//     lastName:'arnikar',
//     city:'pune'
// }

// function Person(fn,ln,ct){
//     this.firstName=fn
//     this.lastName=ln
//     this.city=ct
//     // this.display=function(){
//     //     console.log(this.city)
//     // }
// }

// let abhi = new Person('krushna','arnikar','Pune')
// console.log(abhi)
// // abhi.display()

// abhi.language= 'marathi'
// console.log(abhi)

// console.log(abhi.__proto__==Person.prototype)
// Person.prototype.state="MH"

// console.log(abhi.state)

// console.log(abhi.hasOwnProperty('state'))

// Person.prototype.display=function(){
//     console.log(this.city)
// }

// abhi.display()

// class Person{

//     setFirstname(fn){
//         this.firstName=fn
//     }

//     getFirstname(){
//         return this.firstName
//     }

//     setCity(ct){
//         this.city=ct
//     }

//     getCity(){
//         return this.city
//     }
// }

// let kaivaly = new Person()
// console.log(kaivaly)

// kaivaly.setFirstname('Kaivaly')
// kaivaly.setCity('pune')
// console.log(kaivaly)

// console.log(kaivaly.getFirstname())
// console.log(kaivaly.getCity())

// class father{
//     constructor(fn,ln){
//         this.firstName=fn
//         this.lastName=ln
//     }
//     display=function(){
//         console.log(this.firstName)
//     }
// }

// class son extends father{
//     constructor(sfn,fn,ln){
//         super(fn,ln)
        
//         this.sfirstName=sfn
//     }
//     display=function(){ 
//         console.log(this.sfirstName)
       
//     }
// }

// let abhi = new son('Abhijit','Ashok','Arnikar')
// console.log(abhi)
// console.log(abhi.sfirstName)
// //console.log(abhi.firstName)

// abhi.display()

// let ashok = new father('Ashok','Arnikar')
// ashok.display()

class Animal{
    constructor(nm){
        this.name=nm
    }
    color(){
        console.log(this.name+' brown')
    }
}

class chitta extends Animal{

    color(){
        console.log(this.name+' red')
        super.color()
        
    }
}

let AAA = new chitta('greet')
AAA.color()