// let array = [45,69,78,77,99,14]

// console.log(Math.max(...array))

// function max(array){
//     let highest = 0
//     for(let i=0;i<array.length;i++){
//         if(array[i]>highest){
//             highest=array[i]
//         }
//     }
//     console.log(highest)
// }
// max(array)

// // Problem 2) find the second highest number of an array

// let aa = array.sort(function(a,b){
//     return a-b
// })

// console.log(aa[4])

// let bb = array.sort(function(a,b){
//     return b-a
// })
// console.log(bb[1])


// function rev(str){
//     let word = ''
//     for(let i=0;i<str.length;i++){
//         word=str[i]+word
//     }
//     console.log(word)
// }
// rev('abhijit')
// rev('krushna')

// let word = 'Kaivaly'
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

// //let array = [45,69,78,77,99,14]

// let ab = array.reduce(function(acc,el){
//         return acc+el
// },0)
// console.log(ab)


// let cc = array.filter(function(el,index,arr){
//     return el%2 != 0
// }).reduce(function(acc,el){
//     return acc+el
// },0)

// console.log(cc)

// function greet(str){
//     let palindrome = str.split('').reverse().join('')

//     console.log(str === palindrome)
// }
// greet('madam')
// greet('reviver')
// greet('abhijit')
// greet('nsvdjd')

// let info = 'i am live in Dharmpuri'

// let bb = info.split(' ').reverse().join(' ')
// console.log(bb)

// let aa = [
//     {
//         "name":'abhijit'
//     },
//     {
//         "name":'krushna'
//     },
//     {
//         "name":'Kaivaly'
//     }
// ]

// function json(obj,name){
//     let cc= obj.filter(function(el){
//         return el.name=name
//     })
//     return cc
// }
// let ap = json(aa,'krushna')
// console.log(aa[1])

// //leader element that is grater element all the element in left side

// let marks  = [2,8,7,9,12,3,78]

// function max(array){
//     let highest=0
//     for(let i=0;i<array.length;i++){
//         if(array[i]>highest){
//             highest=array[i]
//             console.log(highest)
//         }
//     }
// }
// max(marks)

// function abhi(){

//     //console.log(name)
//     console.log(age)

//     //var name='abhijit'
//     let age  =31
// }

// abhi()

// for(let i=1;i<=5;i++){
//     let a = ''
//     for(let j=1;j<=i;j++){
//         a=a+'* '
//     }
//     console.log(a)
// }

// console.log('**********************')

// for(let i=5;i>=1;i--){
//     let a = ''
//     for(let j=1;j<=i;j++){
//         a=a+'* '
//     }
//     console.log(a)
// }

// let person  = {
//     firstname:'abhijit',
//     lastname:'arnikar',
//     age:31
// }

// let display = function(city,state){
//     console.log(this.firstname+' '+'has '+'city '+city+' state '+state)
// }

// display.call(person,'Pune','MH')

// let info  ={
//     firstname:'Krushna',
//     lastname:'arnikar',
//     age:31
// }

// display.apply(info,['Mumbai','MH'])

// let aa= display.bind(info,'Mumbai','MH')
// console.log(aa)
// aa()

// let date = new Date()
// date.setDate(date.getDate()+365)
// let day = date.getDate()
// let month = date.getMonth()+1
// let year = date.getFullYear()

// let format = day+'/'+month+'/'+year
// console.log(format)

// function abhi(){
//     let a = 10
//     let b = 14

//     function addition(){
//         console.log(a+b)
//     }
//     addition()
// }
// abhi()


// function outer(){
//     let c = 10
//     return function inner(){
//         let b = 45

//         console.log(b+c)
//     }
// }
// let out = outer()
// out()

// let names  = ['abhijit','Vishwajeet','SachinTendulkar','sehwag']

// let longest = names.reduce(function(acc,el){

//     if(el.length>acc.length){
//         return el
//     }
//     else{
//         return acc
//     }
// },' ')
// console.log(longest)

// let marks  = [78,98,14,75,36,100,88,98]

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

// let count = 0

// for(let i=0;i<marks.length;i++){
//     if(marks[i]==98){
//         count=count+1
//     }
// }
// console.log(count)

// let even  = []
// let odd = []

// for(let i=0;i<marks.length;i++){
//    if(marks[i] %2 == 0){
//     even.push(marks[i])
//    }
//    else{
//     odd.push(marks[i])
//    }
// }
// console.log(even)
// console.log(odd)

// let a = '4p3q2r1s'
// let b = ''

// for(let i=0;i<a.length;i++){
//     if(Number(a[i])){
//         b=b+a[i+1].repeat(Number(a[i]))
//     }
// }
// console.log(b)

// let c = 'a4b3c2d1'
// let d = ''

// for(let i=0;i<c.length;i++){
//     if(Number(c[i+1])){
//         d=d+c[i].repeat(Number(c[i+1]))
//     }
// }
// console.log(d)

// Method overloading

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

// // method overriding

// class RBI{
//     save(){
//         console.log('save per is 10')
//     }

//     loan(){
//         console.log('loan per is 15')
//     }
// }

// class SBI extends RBI{

//     save(){
//         console.log('save per is 20')
//         super.save()
//     }

//     loan(){
//         console.log('loan per is 30')
//         super.loan()
//     }
// }

// let pune = new SBI()
// pune.save()
// pune.loan()

// console.log(Math.floor(12.6))
// console.log(Math.floor(13.9))

// console.log(Math.ceil(25.4))
// console.log(Math.ceil(16.9))

// console.log(Math.round(14.6))
// console.log(Math.round(16.1))

// console.log(Math.random())

// console.log(Math.random()*7)

// console.log(Math.floor(Math.random()*9))

// console.log(Math.floor(Math.random()*8)+1)

// function randomNo(max,min){
//     console.log(Math.floor(Math.random()*(max-min+1))+min)
// }
// randomNo(40,30)

// function greet(...array){
//     let pp = array.filter(function(el){
//         return el>20
//     })
//     console.log(pp)
// }
// greet(45,69,85,11,45,13,41,1)

// let a = [45,36,55,14]

// let b = [...a,78,69,12]
// console.log(b)

// setTimeout(function(){
//     console.log('abhijit')
// },1000)

// setTimeout(function(){
//     console.log('arnikar')
// },)

// function primeNo(num){
//     let count = 0
//     for(let i=2;i<num-1;i++){
//         if(num%i==0){
//             count++
//         }     
//     }
//     if(count==0){
//         console.log('number is prime')
//     }
//     else{
//         console.log('number is not prime')
//     }
// }
// primeNo(5)
// primeNo(8)

// let birthYear = [1991,1998,1995,1995]
// let ages = []

// for(let i=0;i<birthYear.length;i++){
//     let age  = 2022-birthYear[i]
//     ages.push(age)
// }
// console.log(ages)

// let aa = birthYear.map(function(el,index,arr){
//     return 2022-el
// })
// console.log(aa)


// function sepCapSmall(str){
//     let cap  = []
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
// sepCapSmall('abhijitARNIKAR')

// function expand(str){
//     let a = ''
//     for(let i=0;i<str.length;i++){
//         if(Number(str[i])){
//             a=a+str[i+1].repeat(Number(str[i]))
//         }
//     }
//     console.log(a)
// }
// expand('3A2B1C')

// let marks = [36, 14, 25, 78, 36, 14, 25]

// let arr = new Set(marks)
// console.log(arr)

// function doublValue(array) {
//     let vv = []
//     for (let i = 0; i < array.length; i++) {
//            if(! vv.includes(array[i])){
//             vv.push(array[i])
//            }
//     }
//     console.log(vv)
// }
// doublValue(marks)

// let word  = 'KrushnaArniakr'
// let aa = ''

// for(let i=0;i<word.length;i++){
//     if(i !=0 && i !=word.length-1){
//         aa=aa+word[i]
//     }
// }
// console.log(aa)

// function separate(str){
//     let num  = ''
//     let char  = ''
//     for(let i=0;i<str.length;i++){
//         if(Number(str[i])){
//             num=num+str[i]
//         }
//         else{
//             char=char+str[i]
//         }
//     }
//     console.log(num)
//     console.log(char)

// }
// separate('abhi1991arnikar725')

// let email  = 'abhiarnikar725@gmail.com'
// let mail = ''

// for(let i=0;i<email.length;i++){
//     if(i == 0){
//         mail=mail+email[0].toUpperCase()
//     }
//     else if(email[i]=='@'){
//         break
//     }
//     else{
//         mail=mail+email[i]
//     }
// }

// console.log(mail)

// let word = 'abhijit'
// let aa = word[0].toUpperCase()+word.slice(1)
// console.log(aa)

// let info = 'i am live in pune'
// let tt = info.split(' ')
// console.log(tt)
// let xx = []

// for(let i=0;i<tt.length;i++){
//     let z = tt[i][0].toUpperCase()+tt[i].slice(1)
//     xx.push(z)
// }
// console.log(xx.join(' '))

// let pro = new Promise(function(resolve,reject){
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


// let pro1 = new Promise(function(resolve,reject){
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

// function person(fn,ln,ag){
//     this.firstname=fn
//     this.lastname=ln
//     this.age=ag
//     // this.display=function(){
//     //     console.log(this.firstname)
//     // }
// }

// let abhi = new person('Abhijit','Arnikar',30)
// console.log(abhi)

// console.log(abhi.__proto__==person.prototype)

// person.prototype.display=function(){
//     console.log(this.firstname+' '+this.lastname)
// }

// abhi.display()

// person.prototype.city='Pune'
// console.log(abhi)
// console.log(abhi.city)

// Setting the value using method

// class info{
//     setFname(fn){
//         this.firstname=fn
//     }

//     getFname(){
//         return this.firstname
//     }

//     setCity(ct){
//         this.city=ct
//     }

//     getCity(){
//         return this.city
//     }
// }

// let abhi = new info()
// console.log(abhi)

// abhi.setFname('Abhijit Arnikar')
// abhi.setCity('Pune')
// console.log(abhi)

// // Setting the value using function

// class Person{

//     set FullName(fn){
//         this.fullname=fn
//     }

//     get FullName(){
//         return this.fullname
//     }

//     set City(ct){
//         this.city=ct
//     }

//     get City(){
//         return this.city
//     }
// }

// let krushna = new Person()
// console.log(krushna)

// krushna.FullName='Krushna Arnikar'
// krushna.City='Pune'
// console.log(krushna)

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
// console.log(abhi.sfirstname)
// console.log(abhi.lastname)

