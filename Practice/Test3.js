// let array = [45, 69, 14, 36, 74, 25]
// function longest(arr) {
//     let highest = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > highest) {
//             highest = arr[i]
//         }

//     }
//     console.log(highest)
// }
// longest(array)

// let a = array.sort(function (a, b) {
//     return a - b
// })
// console.log(a)

// let b = array.sort(function (a, b) {
//     return b - a
// })
// console.log(b)

// console.log(Math.max(...array))

// function reverse(str) {
//     let rev = ''
//     for (let i = 0; i < str.length; i++) {
//         rev = str[i] + rev
//     }
//     console.log(rev)
// }
// reverse('abhijit')

// let word = 'kaivalyArnikar'
// let count = []
// for (let i = 0; i < word.length; i++) {
//     if (count[word[i]]) {
//         count[word[i]] = count[word[i]] + 1
//     }
//     else {
//         count[word[i]] = 1
//     }

// }
// console.log(count)

// let count1=0
// for (let i = 0; i < word.length; i++) {
//     if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u'){
//         count1=count1+1
//     }
// }
// console.log(count1)

// let count2=[]

// for (let i = 0; i < word.length; i++) {
//     if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u'){
//       if(count2[word[i]]){
//         count2[word[i]]=Number(count2[word[i]])+1
//       }
//       else{
//         count2[word[i]]=1
//       }
//     }
// }
// console.log(count2)

// //let array = [45, 69, 14, 36, 74, 25]

// let aa = array.reduce(function(acc,el){
//     return acc+el
// },0)
// console.log(aa)

// let bb = array.filter(function(el,index,arr){
//     return el%2==0
// }).reduce(function(acc,el){
//     return acc+el
// },0)

// console.log(bb)

// let bc = array.filter(function(el,index,arr){
//     return el%2 !=0
// }).reduce(function(acc,el){
//     return acc+el
// },0)

// console.log(bc)

// function greet(str){
//     let palindrome= str.split('').reverse().join('')
//     console.log(palindrome===str)
// } 
// greet('madam')
// greet('abhi')

// let info = 'abhijit is name my'
// let ab= info.split(' ').reverse().join(' ')
// console.log(ab)

// let xx= [
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

// function json(obj,name){
//     let cc = obj.filter(function(el){
//         return el.name=name
//     })
//     return cc
// }
// let yy = json(xx,'abhijit')
// console.log(yy[0])

// let marks  = [45, 69, 14, 36, 74, 25]

// function leader(marks){
//     let longest = 0
//     for(let i=0;i<marks.length;i++){
//         if(marks[i]>longest){
//             longest=marks[i]
//             console.log(longest)
//         }
       
//     }
// }
// leader(marks)

// // function abhi(){
// //     console.log(name) // undefined
// //     console.log(age) // referance error

// //     let age = 21
// //     var name='kaivaly'
// // }
// // abhi()

// function abhi(){
//     name='krushna'
//     console.log(name)
//     var name
// }
// abhi()

// // *
// // **
// // ***
// // ****
// // *****

// for(let i=0;i<=5;i++){
//     let b = ''
//     for(let j=1;j<=i;j++){
//         b=b+'* '
//     }
//     console.log(b)
// }

// console.log('========================')

// for(let i=5;i>=1;i--){
//     let b = ''
//     for(let j=1;j<=i;j++){
//         b=b+'* '
//     }
//     console.log(b)
// }

// let marks1  = [45, 69, 14, 36, 74, 25]

// marks1.length=0
// console.log(marks1)

// let info1 = {
//      firstName:'abhijit',
//      lastName:'arnikar'
// }
// let info2 = {
//     firstName:'kaivaly',
//     lastName:'arnikar'
// }


// let display=function(state,city){
//     console.log(this.firstName+' '+state+' '+city)
// }

// display.call(info1,'MH','Pune')
// display.apply(info2,['Bangluru','KN'])

// let zz = display.bind(info2,'MH','Mumbai')
// console.log(zz)
// zz()

// let date = new Date()
// console.log(date)

// let daydate = date.getDate()
// let year = date.getFullYear()
// let month = date.getMonth()+1

// let format = daydate+'/'+month+'/'+year
// console.log(format)

// let names = ['vishwajeet','AbhiArnikar','krushna','kaivaly']

// let longest1 = names.reduce(function(acc,el){
//        if(el.length>acc.length){
//         return el
//        }
//        else{
//         return acc
//        }
// }," ")
// console.log(longest1)

// let numbers = [69,41,25,78,63,98,14,96]

// let highest = numbers.reduce(function(acc,el){
//     if(el>acc){
//         return el
//     }
//     else{
//         return acc
//     }
// },numbers[0])

// console.log(highest)

// let smallest = numbers.reduce(function(acc,el){
//     if(el<acc){
//         return el
//     }
//     else{
//         return acc
//     }
// },numbers[0])

// console.log(smallest)

// let even =[]
// let odd = []
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         even.push(numbers[i])
//     }
//     else{
//         odd.push(numbers[i])
//     }
// }
// console.log(even)
// console.log(odd)

// let p = 'A3B2C1'
// let q = ''
// for(let i=0;i<p.length;i++){
//     if(Number(p[i+1])){
//         q=q+p[i].repeat(Number(p[i+1]))
//     }
// }
// console.log(q)

// let w = '3n2b1v'
// let g = ''

// for(let i=0;i<w.length;i++){
//     if(Number(w[i])){
//         g=g+w[i+1].repeat(Number(w[i]))
//     }
// }
// console.log(g)

// function addNumber(a,b,c,d){
//     console.log('method with 4 parameters')
// }

// function addNumber(a,b){
//     console.log('method with 3 parameters')
// }
// function addNumber(a,b,c){
//     console.log('method with 3 parameters')
// }

// addNumber()


// class RBI{

//     loan(){
//         console.log('loan is 10 per')
//     }
// }

// class SBI extends RBI{

//     loan(){
//         console.log('loan is 18 per')
//         super.loan()
//     }
// }

// let pune = new SBI()
// pune.loan()

// console.log(Math.random()*8)+1

// console.log(Math.floor(Math.random()*8)+1)

// function randomNo(max,min){
//     console.log(Math.floor(Math.random()*(max-min+1))+min)
// }
// randomNo(45,25)

// function greet(...array){
//     let aa = array.map(function(el){
//         return el+100
//     })
//     console.log(aa)
// }
// greet(14,25,36,74,25)

// let bb = [74,85,14,45]

// let cc = [...bb,45,69,14,25]
// console.log(cc)

// function abhi(){
//     setTimeout(()=>{
//         console.log('1st attempt')
//     },3000)

//     setTimeout(()=>{
//         console.log('2nd attempt')
//     },2000)
// }
// abhi()

// function primeNo(num){
//     let count = 0
//     for(let i=2;i<num-1;i++){
//         if(num%i==0){
//             count=count+1
//         }
//     }

//     if(count!=0){
//         console.log('number is not prime')
//     }

//     else{
//         console.log('number is prime')
//     }
// }

// primeNo(11)
// primeNo(4)

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
// sepCapSmall('KRUSHNAarnikar')

// let array =[11,22,33,44,11,22]
// let pp= []
// for(let i=0;i<array.length;i++){
//     if(!pp.includes(array[i])){
//         pp.push(array[i])
//     }
// }
// console.log(pp)

// let word  = 'devyaniarnikar'
// let cc = ''
// for(let i=0;i<word.length;i++){
//     if(i !=0&& i !=word.length-1){
//         cc=cc+word[i]
//     }
// }
// console.log(cc)

// console.log(word.length)
// console.log(word.slice(1,13))

// function separate(str){
//     let num =[]
//     let char =[]
//     for(let i=0;i<str.length;i++){
//         if(Number(str[i])){
//             num.push(str[i])
//         }
//         else{
//             char.push(str[i])
//         }
//     }
//     console.log(num)
//     console.log(char)
// }
// separate('hfjdhf455fndnf79')

// let email = 'abhiarnikar725@gmail.com'
// let result = ''

// for(let i=0;i<email.length;i++){

//     if(i==0){
//         result =result+email[0].toUpperCase()
//     }
//     else if(email[i]=='@'){
//         break
//     }
//     else{
//         result=result+email[i]
//     }
// }
// console.log(result)

// let a = 'devyani'
// let x = a[0].toUpperCase()+a.slice(1)

// console.log(x)

// let info  = 'i am living in dharmpuri'
// let ww = info.split(' ')
// console.log(ww)
// let bb = []
// for(let i=0;i<ww.length;i++){
//    let ss = ww[i][0].toUpperCase()+ww[i].slice(1)
//    bb.push(ss)
// }
// console.log(bb.join(' '))
//           0  1  2  3  4  5  6
// let array = [45,36,85,45,89,25,63]

// let aa = array.slice(2,5)
// console.log(aa)
// console.log(array)


// let bb = array.splice(1,3)
// console.log(bb)
// console.log(array)

// let names  = ['kaivaly','krushna','devyani','abhijit']

// console.log(names.sort())

// console.log(names.join(' '))

// let person = {
//     firstname:'abhijit',
//     lastName:'arnikar',
//     age:30
// }

// console.log(person.lastName)

// person.language = 'marathi'

// person.firstname = 'kaivaly'

// console.log(person)

// delete person['language']

// console.log(person)

// for(let key in person){
//     console.log(key)
// }

// for(let key in person){
//     console.log(key,person[key])
// }


// let pro  = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5
//     if(a>b){
//         resolve('true')
//     }
//     else{
//         reject('false')
//     }
// }).then(function(str){
//     console.log('comparision is correct '+str)
// },function(str){
//     console.log('comparision is wrong '+str)
// })

// let pro1  = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5
//     if(a<b){
//         resolve('true')
//     }
//     else{
//         reject('false')
//     }
// }).then(function(str){
//     console.log('comparision is correct '+str)
// },function(str){
//     console.log('comparision is wrong '+str)
// })

// function person(fn,ln,ag){
//     this.firstname =fn
//     this.lastname=ln
//     this.age=ag
// }

// let abhi = new person('Abhijit','Arnikar',30)
// console.log(abhi)

// person.prototype.display=function(city){
//     console.log(this.firstname+' '+city)
// }

// abhi.display('pune')

// person.prototype.language = 'Marathi'

// console.log(abhi.language)

// console.log(abhi.__proto__==person.prototype)

// class info {
//     constructor(fn,ln,ct){
//         this.firstname=fn
//         this.lastname=ln
//         this.city=ct
//     }

//     display(){
//         console.log(this.city)
//     }
// }

// let kaivaly= new info('Kaivaly','Arnikar','Mumbai')
// kaivaly.display()

// console.log(kaivaly.firstname)

// class father{
//     constructor(fn,ln){
//         this.firstname=fn
//         this.lastname=ln
//     }
//     displayF(){
//         console.log(this.firstname)
//     }
// }

// class son extends father{
//     constructor(fn,ln,sfn){
//         super(fn,ln)
//         this.sfirstname=sfn
//     }
//     displayS(){
//         console.log(this.sfirstname)
//     }
// }

// let abhi = new son('Ashok','Arnikar','Abhijit')

// abhi.displayS()
// abhi.displayF()
// console.log(abhi.firstname)
// console.log(abhi.sfirstname)

// let ashok = new father('Ashok','Arnikar')
// ashok.displayF()

// let names  = [['Abhijit','Devyani'],['Ashok','Sunanda'],['Vishwajeet','Vaishnavi']]

// let [[a1,a2],[b1,b2],[c1,c2]]=names
// console.log(a1)

// console.log(b2)

// let info = {
//     firstname:'Kaivaly',
//     lastname:'Arnikar',
//     city:'Pune'
// }

// let {firstname:fn,lastname:ln,city:ct}=info
// console.log(fn)

// console.log(ln)

let info = new Map()
console.log(info)

info.set(31,'age')
info.set('arnikar','firstname')
info.set(true,'is married')

console.log(info)

console.log(info.size)

console.log(info.has(31))

console.log(info.get(true))

info.delete(true)

console.log(info)

let marks = new Set()

console.log(marks)
marks.add(30)
marks.add(45)
marks.add(56)
marks.add(30)
marks.add(47)
marks.add(45)

console.log(marks)

console.log(marks.has(30))

console.log(marks.size)

marks.forEach((el)=>{
    console.log(el)
})

