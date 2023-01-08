// // highest number
// let marks = [45, 36, 85, 41, 25, 74, 66]

// let max = 0
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > max) {
//         max = marks[i]
//     }
// }
// console.log(max)

// console.log(Math.max(...marks))

// let aa = marks.sort(function (a, b) {
//     return a - b
// })
// console.log(aa)

// let aa1 = marks.sort(function (a, b) {
//     return b - a
// })
// console.log(aa1)

// function reverse(str) {
//     let rev = ''
//     for (let i = 0; i < str.length; i++) {
//         rev = str[i] + rev
//     }
//     console.log(rev)
// }
// reverse('abhijit')


// let word = 'reviraj'
// let xx = []

// for (let i = 0; i < word.length; i++) {
//     if (xx[word[i]]) {
//         xx[word[i]] = xx[word[i]] + 1
//     }
//     else {
//         xx[word[i]] = 1
//     }
// }
// console.log(xx)

// let count = 0

// let count1 = []

// for (let i = 0; i < word.length; i++) {
//     if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
//         count = count + 1
//     }
// }
// console.log(count)

// for (let i = 0; i < word.length; i++) {
//     if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
//         if (count1[word[i]]) {
//             count1[word[i]] = Number(count1[word[i]]) + 1
//         }
//         else {
//             count1[word[i]] = 1
//         }
//     }
// }
// console.log(count1)

// //let marks = [45, 36, 85, 41, 25, 74, 66]

// let bb = marks.reduce(function(acc,el){
//     return acc+el
// },0)
// console.log(bb)

// let cc = marks.filter(function(el){
//     return el%2 !=0
// }).reduce(function(acc,el){
//     return acc+el
// },0)

// console.log(cc)


// function greet(str){
//     let palindrome = str.split(' ').reverse().join(' ')
//     console.log(palindrome===str)
// }
// greet('madam')
// greet('reviver')

// let info = 'my name is abhijit'

// let ee = info.split(' ').reverse().join(' ')
// console.log(ee)

// let names = [
//     {
//         "name":'abhijit'
//     },
//     {
//         "name":'krushna'
//     },
//     {
//         "name":'kaivaly'
//     }
// ]

// function abhi(json,nm){
//     let aa = json.filter(function(el){
//        return el.name=nm
//     })
//     return aa
// }

// let pp = abhi(names,'krushna')
// console.log(pp[0])

// let numbers = [14,65,96,47,12,78]
// let leader = 0

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>leader){
//         leader=numbers[i]
//         console.log(leader)
//     }
// }


// let info  ={
//     firstName:"abhijit",
//     lastName:'arnikar',
//     age:30
// }
// let info1  ={
//     firstName:"krushna",
//     lastName:'arnikar',
//     age:5
// }
// let display=function(city,state){
//     console.log('hi '+this.firstName+' '+city+' '+state)
// }

// display.call(info,'pune','MH')
// display.call(info1,'mumbai','MH')

// display.apply(info1,['chennai','TN'])

// let xx = display.bind(info,'bangluru','Karnatak')
// xx()

// let date = new Date()

// let day = date.getDate()
// let month = date.getMonth()+1
// let year = date.getFullYear()

// let format = day+'/'+month+'/'+year
// console.log(format)

// // hoising

// x=10
// console.log(x)
// var x

// //lexical scope
// function add(){
//     let a =10
//     let b =2
//     function add1(){
//         console.log(a+b)
//     }
//     add1()
// }
// add()

// function greet(){
//     let x = 45
//     function mult(){
//         let b = 2
//         console.log(x*b)
//     }
//    return mult
// }
// let ww = greet()
// ww()

// let names = ['abhijit','kaivaly','krushna','ram']

// let longest= names.reduce((acc,el)=>{
//     if(el.length>acc.length){
//         return el
//     }
//     else{
//         return acc
//     }
// }," ")
// console.log(longest)

// let marks = [78,65,41,25,39,98,25,39]

// let max = marks.reduce(function(acc,el){
//       if(el>acc){
//         return el
//       }
//       else{
//         return acc
//       }
// },marks[0])
// console.log(max)

// let min = marks.reduce(function(acc,el){
//      if(el<acc){
//         return el
//      }
//      else{
//         return acc
//      }
// },marks[0])
// console.log(min)

// let count = 0
// for(let i=0;i<marks.length;i++){
//     if(marks[i]==25){
//         count=count+1
//     }
// }
// console.log(count)

// let even = []
// let odd = []
// for(let i=0;i<marks.length;i++){
//    if(marks[i]%2==0){
//     even.push(marks[i])
//    }
//    else{
//     odd.push(marks[i])
//    }
// }

// console.log(even)
// console.log(odd)

// let pp = 'j4k5l6'
// let  q =''
// for(let i=0;i<pp.length;i++){
//     if(Number(pp[i+1])){
//        q=q+pp[i].repeat(Number(pp[i+1]))
//     }
// }
// console.log(q)

// function addNumber(a,b,c,d){
//     console.log('method with 4 parameters')
// }
// function addNumber(a,b){
//     console.log('method with 2 parameters')
// }
// function addNumber(a,b,c){
//     console.log('method with 3 parameters')
// }
// addNumber()

// class father{
//     constructor(nm){
//         this.name=nm
//     }
//     play(){
//         console.log(this.name+' play cricket')
//     }
// }

// class son extends father{

//     play(){
//         console.log(this.name+' play hocky')
//         super.play()
//     }
// }
// let ashok = new father('Ashok')
// let abhi = new son('Abhijit')
// console.log(abhi)
// abhi.play()

// console.log(Math.random()*6)
// console.log(Math.floor(Math.random()*7)+1)

// function randomNo(max,min){
//     console.log(Math.floor(Math.random()*(max-min+1))+min)
// }
// randomNo(30,20)

// function greet(...array){
//     let aa=array.filter((el)=>{
//         return el>60
//     })
//     console.log(aa)
// }
// greet(45,69,63,14,78,96,41,25)

// let marks  = [12,02,30]
// let aa = [41,25,63,...marks]
// console.log(aa)

// setTimeout(()=>{
//     console.log('1st attempt')
// },4000)

// setTimeout(()=>{
//     console.log('2nd attempt')
// },1000)

// function primeNo(num){
//     let count = 0
//     for(let i=2;i<num-1;i++){
//         if(num%i==0){
//             count=count+1
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
// primeNo(5)

// function checkNumber(num){
//     if(num>0){
//         console.log('number is +ve')
//     }
//     else if(num<0){
//         console.log('number is -ve')
//     }
//     else{
//         console.log('number is 0')
//     }
// }
// checkNumber(0)
// checkNumber(12)
// checkNumber(-45)

// let a=10
// let b = 5
// let c=a
// a=b
// b=c
// console.log(b)
// console.log(a)

// let birthYear=[1991,1995,1997,1994]
// let ages = []
// for(let i=0;i<birthYear.length;i++){
//     let age = 2022-birthYear[i]
//     ages.push(age)
// }
// console.log(ages)

// let str = 'devYANIARNIkar'
// function sepCapSmall(str){
//     let cap = []
//     let small=[]
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

// function expand(str){
//     let A = ''
//     for(let i=0;i<str.length;i=i+2){
//         A=A+str[i+1].repeat(str[i])
//     }
//     console.log(A)
// }
// expand('4p5s2c')

// function expand(str){
//     let A = ''
//     for(let i=1;i<str.length;i=i+1){
//         A=A+str[i-1].repeat(str[i])
//     }
//     console.log(A)
// }
// expand('l5p1j3')


// let marks = [11,22,33,55,22,33,44]
// let aa = new Set(marks)
// console.log(aa)

// let cc = []
// for(let i=0;i<marks.length;i++){
//     if(!cc.includes(marks[i])){
//         cc.push(marks[i])
//     }
// }
// console.log(cc)

// let str = 'devyaniarnikar'
// let xx =''
// console.log(str.length)

// for(let i=0;i<str.length;i++){
//     if(i !=0&& i !=str.length-1){
//         xx=xx+str[i]
//     }
// }
// console.log(xx)

// console.log(str.slice(1,13))

// function seperate(str){
//     let char = ''
//     let num = ''
//     for(let i=0;i<str.length;i++){
//         if(Number(str[i])){
//             num=num+str[i]
//         }
//         else{
//             char=char+str[i]
//         }
//     }
//     console.log(char)
//     console.log(num)
// }
// seperate('dhfiuhci4546nbchsd5656')
// // Q. given email first letter convert upper case and only give before @ string

// let email = 'devarnikar725@gmail.com'
// let mail =''
// for(let i=0;i<email.length;i++){
//     if(i==0){
//         mail=mail+email[i].toUpperCase()
//     }
//     else if(email[i]=='@'){
//         break
//     }
//     else{
//        mail=mail+email[i]
//     }
// }

// console.log(mail)

// let word = 'devyani'
// let zz = word[0].toUpperCase()+word.slice(1)
// console.log(zz)

// let info = 'abhijit ashok arnikar'
// let ww = info.split(' ')
// console.log(ww)

// let vv = []
// for(let i=0;i<ww.length;i++){
//     let a = ww[i][0].toUpperCase()+ww[i].slice(1)
//     vv.push(a)
// }
// console.log(vv.join(' '))

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

// let pro1 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
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

// class person{
//     setName(nm){
//         this.name=nm
//     }

//     getName(){
//         return this.name
//     }

//     setCity(ct){
//         this.city = ct
//     }

//     getCity(){
//         return this.city
//     }
// }

// let abhi = new person()
// console.log(abhi)

// abhi.setName('Abhijit')
// abhi.setCity('Pune')
// console.log(abhi)

// console.log(abhi.getName()+' '+abhi.getCity())

// class father{
//     firstname='ashok'
//     lastname='arnikar'
//     display(){
//         console.log(this.firstname+this.lastname)
//     }
// }

// class son extends father{
//     sfirstname='abhijit'
//     display1(){
//         console.log(this.sfirstname+this.lastname)
//     }
// }

// let abhi = new son()
// console.log(abhi.firstname)
// console.log(abhi.lastname)
// console.log(abhi.sfirstname)

// abhi.display()
// abhi.display1()


// function info(fn,ln,ct){
//     this.firstName=fn
//     this.lastName=ln
//     this.city =ct

// }

// let abhi = new info('Abhijit','Arnikar','city')
// console.log(abhi)

// info.prototype.display=function(){
//     console.log(this.firstName+' '+this.city)
// }

// abhi.display()

// info.prototype.language='Marathi'
// console.log(abhi.language)

// console.log(abhi.__proto__===info.prototype)

// console.log(abhi.hasOwnProperty('language'))

// let names =['abhijit','kaivaly','krushna','devyani']
// let [ab,kv,kr,dy]=names
// console.log(kr)

// console.log(dy)

// let person = {
//     firstname:'kaivaly',
//     lastname:'arnikar',
//     city:'pune'
// }

// let {firstname:fn,lastname:ln,city:ct}=person

// console.log(fn)
// console.log(ct)

let info = new Map

console.log(info)

info.set(31,'age')
info.set('abhijit','firstname')
info.set(true,'is married')

console.log(info)

console.log(info.size)

console.log(info.has(31))

console.log(info.get(true))

info.delete(true)

console.log(info)

let cities = new Set()
console.log(cities)

cities.add('abhi')
cities.add('sachin')
cities.add('sehwag')
cities.add('abhi')

console.log(cities)

console.log(cities.size)

