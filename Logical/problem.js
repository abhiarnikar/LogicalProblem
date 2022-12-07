// // reverse the string

// function greet(str){
//     let rev = ''
//     for(let i=0;i<str.length;i++){
//         rev = str[i]+rev
//     }
//     console.log(rev)
// }
// greet('abhijit')

// // palindrome

// function abhi(str){
//     let palindrome = str.split().join()
//     console.log(str===palindrome)
// }
// abhi('madam')
// abhi('reviver')

// // date format 05-12-2022

// let date = new Date()

// let day = date.getDate()
// let month = date.getMonth()+1
// let Year = date.getFullYear()

// let format = day+'-'+month+'-'+Year
// console.log(format)

// // find the highest element of an array

// let marks = [45,65,85,71,36,154,63,74,96]
// // 1st way
// console.log(Math.max(...marks))

// // 2nd way

// function max(array){
//     let highest=0
//     for(let i=0;i<array.length;i++){
//         if(array[i]>highest){
//             highest=array[i]
//         }
//     }
//     return highest
// }
// let aa = max(marks)
// console.log(aa)

// // 3rd way

// let longest = marks.reduce(function(acc,el,index,arr){
//     if(el>acc){
//         return el
//     }
//     else{
//         return acc
//     }

// },marks[0])
// console.log(longest)

// let smallest = marks.reduce(function(acc,el,index,arr){
//     if(el<acc){
//         return el
//     }
//     else{
//         return acc
//     }
// },marks[0])
// console.log(smallest)

// let info = 'i am living in pune'

// // reverse the string but only word

// let bb = info.split(' ').reverse().join(' ')
// console.log(bb)

// let word = 'krushna kaivaly'
// let a = []
// for(let i=0;i<word.length;i++){
//     if(a[word[i]]){
//         a[word[i]]=a[word[i]]+1
//     }
//     else{
//         a[word[i]]=1
//     }
// }

// console.log(a)

// //write array of 10 to 15 numbers and perform addition of all values,
// //after that perform addition of only even numbers from this array.

// let array1 = [11,12,13,14,15]

// let total = array1.reduce(function(acc,el,index,arr){
//           return el+acc
// },0)
// console.log(total)

// let even = array1.filter(function(el,index,arr){
//     return el%2==0
// }).reduce(function(acc,el,index,arr){
//     return el+acc
// },0)
// console.log(even)

// let names = ['sachin','deshpande','sehwag','arnikar']

// let maximum = names.reduce(function(acc,el){
//     if(el.length>acc.length){
//         return el
//     }
//     else{
//         return acc
//     }
// },' ')
// console.log(maximum)

// let numbers = [69,45,78,36,45,78,96,45]
// let count= 0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]==45){
//         count = count+1
//     }
// }
// console.log(count)

// let aa1 = [5,6,7] 

// let bb1 = aa1.map(function(el,index,arr){
//     return el**2
// })
// console.log(bb1)

// even = 0
// odd = 0

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         even = even+1
//     }
//     else{
//         odd = odd+1
//     }
// }
// console.log(even)
// console.log(odd)

// let pp = 'a4b3c2d1'
// let tt = ''

// for(let i=0;i<pp.length;i++){
//     if(Number(pp[i])){
//         tt=tt+pp[i-1].repeat(Number(pp[i]))
//     }
// }
// console.log(tt)

// // count the vowel of the word

// // let word = 'krushna kaivaly'

// let vl = 0

// for(let i=0;i<word.length;i++){
//     if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u'){
//         vl= vl+1
//     }
// }
// console.log(vl)

// // count the each vowel of that string

// let vv = []

// for(let i=0;i<word.length;i++){
//     if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u'){
//         if(vv[word[i]]){
//             vv[word[i]]=Number(vv[word[i]])+1
//         }
//         else{
//             vv[word[i]]=1
//         }
//     }
// }
// console.log(vv)

// console.log(Math.random())
// console.log(Math.random()*5)
// console.log(Math.random()*5)+1
// console.log(Math.floor(Math.random()*5)+1)

// function randomNo(max,min){
//     console.log(Math.floor(Math.random()*(max - min+1))+min)
// }
// randomNo(200,150)

// // setttimeout

// // function abhi(){
// //     setTimeout(() => {
// //         console.log('hello')
// //     },2000)

// //     setTimeout(() => {
// //         console.log('hi')
// //     },1000)
// // }

// // abhi()

// // let pro = new Promise(function(resolve,reject){

// //     let a= 10
// //     let b =5

// //     if(a>b){
// //         resolve('true')
// //     }
// //     else{
// //         reject('false')
// //     }
// // }).then(function(str){
// //     console.log('comparision is right',str)
// // },function(str){
// //     console.log('comparision is wrong',str)
// // })

// // let pro1 = new Promise(function(resolve,reject){

// //     let a= 2
// //     let b =5

// //     if(a>b){
// //         resolve('true')
// //     }
// //     else{
// //         reject('false')
// //     }
// // }).then(function(str){
// //     console.log('comparision is right',str)
// // },function(str){
// //     console.log('comparision is wrong',str)
// // })

// // oops concept

// // Encapsulation

// class person{

//     setName(name){
//         this.name=name
//     }
//     setCity(city){
//         this.city=city
//     }

//     getName(){
//         return this.name
//     }

//     getCity(){
//         return this.city
//     }
// }

// let abhi1 = new person()

// abhi1.setName('Abhijit Arnikar')
// abhi1.setCity('Pune')

// console.log(abhi1.getCity())
// console.log(abhi1.getName())

// //inheritance

// class Parent{
     
//     constructor(fn,ln){
//         this.firstName=fn
//         this.lastName=ln
//     }
//     display(){
//         console.log(this.firstName)
//     }
    
// }  

// class son extends Parent{
     
//        constructor(fn,ln,sn){
//         super(fn,ln)
//         this.Sfirstname=sn
//        }

//        displayS(){
//         console.log(this.Sfirstname)
//        }
// }

// let krushna = new son('abhijit','arnikar','krushna')

// krushna.displayS()
// krushna.display()

// console.log(krushna.firstName)
// console.log(krushna.lastName)
// console.log(krushna.Sfirstname)

// //object creation

// //object literal

// let info1={
//     firstName:'abhijit',
//     lastName:'arnikar',
//     city:'pune'
// }

// console.log(info1.firstName)
// console.log(info1.lastName)

// // class 

// class Person1{

//     constructor(fn,ln,skl){
//         this.firstName=fn
//         this.lastName=ln
//         this.skills=skl
//         this.display=function(){
//             console.log(this.skills)
//         }
//     }
// }


// let kaivaly = new Person1('kaivaly','arnikar',['python','java'])

// kaivaly.display()

// console.log(kaivaly.firstName)

// prototype

// function Vehicle(color,model){
//     this.color=color
//     this.model=model
//     // this.display=function(){
//     //     console.log(this.model)
//     // }
// }
// let maruti= new Vehicle('white','wagonR')
// console.log(maruti)


// console.log(maruti.__proto__ === Vehicle.prototype)

// Vehicle.prototype.display=function(){
//     console.log(this.model)
// }

// maruti.display()

// Vehicle.prototype.city='Pune'

// console.log(maruti)
// console.log(maruti.city)

// console.log(maruti.hasOwnProperty('model'))
// console.log(maruti.hasOwnProperty('city'))

//polymorphism

// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     eats(){
//         console.log(this.name+' eat food')
//     }
// }

// class Tiger extends Animal{

//    eats(){
//     console.log(this.name+' eat non-veg')
//     super.eats()
//    }
// }

// let AAA= new Tiger('Arjun')

// AAA.eats()


// let setA = new Set([45,69,47,85,69,45,36,25,17,85])
// console.log(setA)

// console.log(setA.size)

// let setB = new Set('abhijita')
// console.log(setB)

let setC = new Set()
console.log(setC)

//add

setC.add('abhi')
setC.add('krushna')
setC.add('kaivaly')
setC.add('abhi')

console.log(setC)

setC.forEach(function(el){
    console.log(el)
})

let info = {
    firstName:"abhijit",
    lastName:"arnikar",
    city:'pune'
}

for(let property in info){
    console.log(property,info[property])
}

// map

let mapA = new Map()

console.log(mapA)

mapA.set('abhijit','firstName')
mapA.set(30,'age')
mapA.set(true,'is married')

console.log(mapA)
console.log(mapA.size)

console.log(mapA.has('abhijit'))
console.log(mapA.has('roll'))

console.log(mapA.get(30))

// rest parameter

function array(...arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum=arr[i]+sum
    }
    console.log(sum)
}

array(96,45,78,14,36,25,36)

// spread operator

let array1 =[1,2,3]
let array2 = [4,5,6,...array1]

console.log(array2)