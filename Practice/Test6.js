// let word  = 'abhijitabhijit'
// let aa = ''

// for(let i=0;i<word.length;i++){
//     if(! aa.includes(word[i])){
//         aa=aa+word[i]
//     }
// }
// console.log(aa)

// let array = [36,41,25,98,47,53,45]

// console.log(Math.max(...array))

// function greet(array){
//     let highest = 0
//     for(let i=0;i<array.length;i++){
//         if(array[i]>highest){
//             highest=array[i]
//         }
//     }
//     console.log(highest)
// }
// greet(array)
// greet([78,39,78,45,97,84])

// function greet1(array){
//     let highest = 0
//     for(let i=0;i<array.length;i++){
//         if(array[i]>highest){
//             highest=array[i]
//             console.log(highest)
//         }
//     }

// }
// greet1(array)

// let ab = array.sort(function(a,b){
//     return a-b
// })
// console.log(ab)

// let ac = array.sort(function(a,b){
//     return b-a
// })
// console.log(ac)

// function reverse(str){
//     let rev = ''
//     for(let i=0;i<str.length;i++){
//           rev= str[i]+rev
//     }
//     console.log(rev)
// }
// reverse('kaivaly')
// reverse('krushna')

// let word  = 'devyanikrushnao'

// let count = []
// let vowel = 0

// for(let i=0;i<word.length;i++){
//     if(count[word[i]]){
//         count[word[i]]=count[word[i]]+1
//     }
//     else{
//         count[word[i]]=1
//     }
// }
// console.log(count)

// for(let i=0;i<word.length;i++){
//     if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u'){
//         vowel=vowel+1
//     }
// }
// console.log(vowel)

// let k = []

// for(let i=0;i<word.length;i++){
//     if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u'){
//         if(k[word[i]]){
//             k[word[i]]=Number(k[word[i]])+1
//         }
//         else{
//             k[word[i]]=1
//         }
//     }
// }
// console.log(k)

// let marks = [77, 96, 41, 58, 63]

// let aa = marks.reduce(function (acc, el) {
//     return acc + el
// }, 0)
// console.log(aa)

// let bb = marks.filter(function (el, index) {
//     return el % 2 == 0
// }).reduce(function (acc, el) {
//     return acc + el
// }, 0)

// console.log(bb)


// function word(str) {
//     let palindrome = str.split('').reverse().join('')
//     console.log(str === palindrome)
// }
// word('abhijit')
// word('madam')
// word('reviver')

// let info = 'my name is abhijit arnikar'

// let ab = info.split(' ').reverse().join(' ')
// console.log(ab)

// let names = [
//     {
//         'name': 'Abhijit'
//     },
//     {
//         'name': 'Krushna'
//     },
//     {
//         'name': 'Kaivaly'
//     }

// ]

// function json(obj, name) {
//     let cc = obj.filter(function (el) {
//         return el.name = name
//     })

//     return cc
// }
// let ac = json(names, 'Kaivaly')
// console.log(ac[2])

// let A = [2, 8, 7, 9, 6, 10, 4, 15]

// function greet(array) {
//     let highest = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > highest) {
//             highest = array[i]
//             console.log(highest)
//         }
//     }
// }
// greet(A)

// for (let i = 1; i <= 5; i++) {
//     let a = ''
//     for (let j = 1; j <= i; j++) {
//         a = a + '* '
//     }
//     console.log(a)
// }

// console.log('==================================')
// for (let i = 5; i >= 1; i--) {
//     let a = ''
//     for (let j = 1; j <= i; j++) {
//         a = a + '* '
//     }
//     console.log(a)
// }

// let info = {
//     firstname:'abhijit',
//     lastname:'arnikar',
//     age:31
// }

// let display= function(city,state){
//     console.log(this.firstname+' live in '+city+' and '+state)
// }

// display.call(info,'Pune','MH')

// display.apply(info,['Mumbai','MH'])

// let aa = display.bind(info,'Indore','MP')
// aa()

// let date = new Date()
// date.setDate(date.getDate()+365)
// let daydate=date.getDate()
// let month= date.getMonth()+1
// let year = date.getFullYear()

// let format = daydate+'/'+month+'/'+year
// console.log(format)

// function add(){
//     let a = 10
//     let b = 5

//     function addition(){
//         console.log(a+b)
//     }
//     addition()
// }
// add()

// function outer(){
//     let a = 10

//     return function inner(){
//         let b = 10
//         console.log(a+b)
//     }
// }
// let out  = outer()
// out()

// let names = ['abhijit','Vishwajeet','krushna','shriram']

// let longest = names.reduce(function(acc,el){
//     if(el.length>acc.length){
//         return el
//     }
//     else{
//         return acc
//     }
// }," ")
// console.log(longest)

// let marks  = [78,98,14,68,26,101,55,26]

// let highest = marks.reduce(function(acc,el){
//     if(el>acc){
//         return el
//     }
//     else{

//         return acc
//     }
// },marks[0])
// console.log(highest)

// let smallest = marks.reduce(function(acc,el){
//     if(el<acc){
//         return el
//     }
//     else{

//         return acc
//     }
// },marks[0])
// console.log(smallest)

// //let marks  = [78,98,14,68,26,101,55,26]

// function greet(array){
//     let even  = []
//     let odd = []
//     for(let i=0;i<array.length;i++){
//         if(array[i] %2==0){
//             even.push(array[i])
//         }
//         else{
//             odd.push(array[i])
//         }
//     }
//     console.log(even)
//     console.log(odd)
// }
// greet(marks)

// let A  = '4g3t2h1c'
// let c = ''
// for(let i=0;i<A.length;i++){
//     if(Number(A[i])){
//         c=c+A[i+1].repeat(Number(A[i]))
//     }
// }
// console.log(c)

// let B = 'A4B3C2D1'
// let v = ''

// for(let i=0;i<B.length;i++){
//     if(Number(B[i+1])){
//         v=v+B[i].repeat(Number(B[i+1]))
//     }
// }
// console.log(v)

// function addNumber(a,b,c,d){
//     console.log('method with 4 parameters')
// }
// function addNumber(a,b){
//     console.log('method with 2 parameters')
// }
// function addNumber(a,b,c){
//     console.log('method with 3 parameters')
// }
// addNumber(4,5,6,4)

// class RBI{

//     save(){
//         console.log('saving per is 10')
//     }

//     loan(){
//         console.log('loan per is 15')
//     }
// }

// class SBI extends RBI{

//     save(){
//         console.log('saving per is 20')
//         super.save()
//     }
//     loan(){
//         console.log('loan per is 25')
//         super.loan()
//     }
// }

// let Pune = new SBI()

// Pune.save()
// Pune.loan()

// function randomNo(max,min){
//     console.log(Math.floor(Math.random()*(max - min+1))+min)
// }
// randomNo(30,20)

// function greet(...array){
//    let aa = array.reduce(function(acc,el){
//     return acc+el
//    },0)
//    console.log(aa)
// }
// greet(45,69,36,78,14,66,25)

// let a = [45,36,78,14]

// let b = [...a,65,96]
// console.log(b)

// let pro  = new Promise(function(resolve,reject){

//     let a = 10
//     let b = 5

//     if(a>b){
//         resolve('true')
//     }
//     else{
//         reject('false')
//     }
// })
// .then(function(str){
//     console.log('comparision is correct '+str)
// },function(str){
//     console.log('comparision is wrong '+str)
// })

// let pro1  = new Promise(function(resolve,reject){

//     let a = 10
//     let b = 50

//     if(a>b){
//         resolve('true')
//     }
//     else{
//         reject('false')
//     }
// })
// .then(function(str){
//     console.log('comparision is correct '+str)
// },function(str){
//     console.log('comparision is wrong '+str)
// })

// Encapsulation

// class Person{

//     setFname(fn){
//         this.fullName=fn
//     }

//     getFname(){
//         return this.fullName
//     }

//     setCity(ct){
//         this.city=ct
//     }

//     getCity(){
//         return this.city
//     }
// }

// let abhi = new Person()
// console.log(abhi)

// abhi.setFname('Abhijit')
// abhi.setCity('Pune')
// console.log(abhi)

// console.log(abhi.getCity())
// console.log(abhi.getFname())

// function info(fn,ln,skl){
//     this.firstname=fn
//     this.lastname=ln
//     this.skills=skl
// }

// let krushna = new info('Krushna','Arnikar',['java','Python','CSS'])
// console.log(krushna)

// console.log(krushna.skills)

// console.log(krushna.__proto__===info.prototype)

// info.prototype.display=function(){
//     console.log(this.skills)
// }

// info.prototype.language = 'Marathi'
// console.log(krushna)

// krushna.display()
// console.log(krushna.language)

// class father{
//     constructor(fn,ln){
//         this.firstname=fn
//         this.lastname=ln
//     }

//     display(){
//         console.log(this.firstname)
//     }
// }

// class son extends father{

//     constructor(fn,ln,sfn){
//         super(fn,ln)
//         this.sfirstname=sfn
//     }

//     displaySon(){
//         console.log(this.sfirstname)
//     }
// }

// let abhi = new son('Ashok','Arnikar','Abhijit')
// console.log(abhi)

// abhi.display()
// abhi.displaySon()

// console.log(abhi.firstname)
// console.log(abhi.lastname)
// console.log(abhi.sfirstname)

// function primeNo(num){
//     let count = 0
//     for(let i=2;i<num-1;i++){
//         if(num %2 == 0){
//             count++
//         }
//     }

//     if(count !=0){
//         console.log('number is not prime')
//     }

//     else{
//         console.log('number is prime')
//     }
// }
// primeNo(7)
// primeNo(10)

// function sepCapSmall(str){
//     let cap = []
//     let small = []

//     for(let i=0;i<str.length;i++){
//         if(str[i]>='A'&& str[i]<='Z'){
//             cap.push(str[i])
//         }
//         else{
//             small.push(str[i])
//         }
//     }
//     console.log(cap)
//     console.log(small)
// }
// sepCapSmall('abhiJITARNIkar')

// let marks = [34,65,74,85,69,45,69,34,65]

// let aa = new Set(marks)
// console.log(aa)

// let vv = []

// for(let i=0;i<marks.length;i++){
//     if(! vv.includes(marks[i])){
//         vv.push(marks[i])
//     }
// }
// console.log(vv)

// let str = 'AbhijitArnikar'
// let aa =''

// for(let i=0;i<str.length;i++){
//     if(i != 0 && i !=str.length-1){
//         aa=aa+str[i]
//     }
// }
// console.log(aa)

// console.log(str.slice(1,13))

// let email = 'abhiarnikar725@gmail.com'
// let mail = ''

// for(let i=0;i<email.length;i++){
//     if(i==0){
//         mail=mail+email[i].toUpperCase()
//     }

//     else if(email[i]=='@'){
//         break
//     }
//     else{
//         mail=mail+email[i]
//     }
// }
// console.log(mail)

// let info = 'my name is abhijit arnikar'

// let ab = info.split(' ')
// console.log(ab)

// let xx = []

// for(let i=0;i<ab.length;i++){
//     let z = ab[i][0].toUpperCase()+ab[i].slice(1)
//     xx.push(z)
// }
// console.log(xx.join(' '))

let city = 'Pune'
switch(city){
    case "Pune":
        console.log("MH")
    
    case "Indore":
        console.log('MP')  
    
    case "Delhi":
        console.log('Delhi')    
    
    default:
        console.log('Incorrect city name')    
}

console.log('*******************************')

switch(city){
    case "Pune":
        console.log("MH")
        break
    
    case "Indore":
        console.log('MP')  
        break
    
    case "Delhi":
        console.log('Delhi')  
        break  
    
    default:
        console.log('Incorrect city name')    
}
