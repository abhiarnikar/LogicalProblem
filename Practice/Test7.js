// let array = [45,68,78,15,96,45]

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

// let aa = array.sort(function(a,b){
//     return a-b
// })

// console.log(aa)

// let bb= array.sort(function(a,b){
//     return b-a
// })
// console.log(bb)

// function rev(str){
//     let reverse = ''

//     for(let i=0;i<str.length;i++){
//         reverse=str[i]+reverse
//     }
//     console.log(reverse)
// }
// rev('krushna')
// rev('devyani')


// let count= []

// let word = 'AbhijitArnikar'

// for(let i=0;i<word.length;i++){

//     if(count[word[i]]){
//         count[word[i]]=count[word[i]]+1
//     }
//     else{
//         count[word[i]]=1
//     }
// }

// console.log(count)

// let marks = [31,32,33,34,35]

// let aa1 = marks.reduce(function(acc,el){
//     return acc+el
// },0)

// console.log(aa1)

// let as = marks.filter(function(el){
//     return el%2 ==0
// }).reduce(function(acc,el){
//     return acc+el
// },0)

// console.log(as)

// function abhi(str){
//     let palindrome = str.split('').reverse().join('')
//     console.log(str===palindrome)
// }
// abhi('madam')
// abhi('reviver')
// abhi('tyre')

// let info = 'my name is abhijit arnikar'

// let aa= info.split(' ').reverse().join(' ')
// console.log(aa)

// let ab = [
//    {
//     "name":"Abhijit"
//    },
//    {
//     "name":"krushna"
//    },
//    {
//     "name":"kaivaly"
//    }
// ]

// function greet(obj,name){

//     let cc = obj.filter(function(el){
//         return el.name=name
//     })
//     return cc
// }

// let pp =  greet(ab,"krushna")
// console.log(pp[1])

// count the number of leader element

// let A = [2,6,8,7,45,15,85]

// function greet(array){
//     let highest = 0
//     for(let i=0;i<array.length;i++){
//         if(array[i]>highest){
//             highest=array[i]
//             console.log(highest)
//         }
//     }
// }
// greet(A)

// for(let i=1;i<=5;i++){
//     let a = ''
//     for(let j=1;j<=i;j++){
//         a+='* '// a=a+'* '
//     }
//     console.log(a)
// }

// console.log('=============')

// for(let i=5;i>=1;i--){
//     let a = ''
//     for(let j=1;j<=i;j++){
//         a+='* '
//     }
//     console.log(a)
// }

// console.log('=============')

// let city = "Jaipur"

// switch(city){

//     case "Pune":
//         console.log("MH")
//         break;

//     case "Indore":
//         console.log("MP")    
//         break;

//     case "Jaipur":
//         console.log("RJ")
//         break;
        
//     default:
//         console.log('incorrect city name')    
// }

// let info  = {
//     firstname:"Abhijit",
//     lastname:"Arnikar",
//     age:31
// }

// let display = function(state,city){
//     console.log(this.firstname+' from '+city+' '+state)
// }

// display.call(info,'MH','Pune')
// display.apply(info,['MP','Indore'])

// let aa = display.bind(info,'UP','Lucknow')
// console.log(aa)
// aa()

// let date =new Date()

// date.setDate(date.getDate()+365)

// let month = date.getMonth()+1
// let daydate = date.getDate()
// let year = date.getFullYear()

// let format = daydate+'/'+month+'/'+year
// console.log(format)

// lexical scope

// function add(){
//     let a = 10
//     let b = 10

//     function addition(){
//         console.log(a+b)
//     }
//     addition()
// }
// add()

// // closure

// function outer(){
//     let a = 10

//     return function inner(){
//         let b =5
//         console.log(a+b)
//     }
// }
// let out= outer()
// out()

// let names  = ["abhijit","vishwajeet","krushna","kaivaly"]

// let aa = names.reduce(function(acc,el){

//     if(el.length>acc.length){
//         return el
//     }
//     else{
//         return acc
//     }
// }," ")

// console.log(aa)

// let array = [45,68,78,15,96,45]

// let longest = array.reduce(function(acc,el){

//     if(el>acc){
//         return el
//     }
//     else{
//         return acc
//     }
// },array[0])

// console.log(longest)

// let smallest = array.reduce(function(acc,el){

//     if(el<acc){
//         return el
//     }
//     else{
//         return acc
//     }
// },array[0])

// console.log(smallest)
// let even = []
// let odd = []

// for(let i =0;i<array.length;i++){

//     if(array[i]%2==0){
//        even.push(array[i])
//     }
//     else{
//         odd.push(array[i])
//     }
// }
// console.log(even)
// console.log(odd)

// let numbers = [11,54,65,84,44,64,11,25,66,11]

// let count = 0

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]===11){
//         count=count+1
//     }
// }
// console.log(count)


// let aa = "a".repeat(6)
// console.log(aa)

// let a = '3p2r1a'
// let b = ''

// for(let i=0;i<a.length;i++){

//     if(Number(a[i])){
//         b=b+a[i+1].repeat(Number(a[i]))
//     }
// }
// console.log(b)

// let c = 'w3f2y1'
// let d = ''

// for(let i=0;i<c.length;i++){

//     if(Number(c[i+1])){
//         d=d+c[i].repeat(Number(c[i+1]))
//     }
// }
// console.log(d)

// let word  = 'Abhijitdevyooanikrushna'

// let count = []

// for(let i=0;i<word.length;i++){

//     if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u'){
//         if(count[word[i]]){
//             count[word[i]]=Number(count[word[i]])+1
//         }
//         else{
//             count[word[i]]=1
//         }
//     }
// }
// console.log(count)

// class RBI{
//     save(){
//         console.log('save per is 10')
//     }

//     loan(){
//         console.log('save per is 15')
//     }
// }

// class SBI extends RBI{

//     save(){
//         console.log('save per is 20')
//         super.save()
//     }

//     loan(){
//         console.log('save per is 25')
//         super.loan()
//     }
// }

// let pune = new SBI()

// pune.save()
// pune.loan()

// console.log(Math.random()*7)

// console.log(Math.floor(Math.random()*7)+1)

// function randomNo(max,min){
//     console.log(Math.floor(Math.random()*(max - min+1))+min)
// }
// randomNo(50,40)

// function greet(...array){
//     let aa = array.map(function(el){
//         return el+20
//     })
//     console.log(aa)
// }

// greet(45,36,85,96)

// let a = [56,96,78]

// let b= [98,78,52]

// let c = [...b,...a]
// console.log(c)

// function abhi(){
//     setTimeout(()=>{
//         console.log('first')
//     },1000)
//     setTimeout(()=>{
//         console.log('second')
//     })

// }

// abhi()

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
//     console.log('comparision is right '+str)
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
//     console.log('comparision is right '+str)
// },function(str){
//     console.log('comparision is wrong '+str)
// })

// class father{
//     constructor(fn,ln){
//         this.firstname=fn
//         this.lastname=ln
//     }

//     display(){
//         console.log(this.firstname+' '+this.lastname)
//     }
// }

// class son extends father{
//     constructor(fn,ln,sfn){
//         super(fn,ln)
//         this.sfirstname=sfn
//     }

//     displaysname(){
//         console.log(this.sfirstname)
//     }
// }

// let abhi = new son("Ashok","Arnikar","Abhijit")

// abhi.display()
// abhi.displaysname()

// function info(fn,ln,ag){
//     this.firstname=fn
//     this.lastname=ln
//     this.age
// }

// let krushna = new info("krushna","Arnikar",5)

// console.log(krushna)

// console.log(krushna.firstname)

// info.prototype.language="Marathi"

// info.prototype.display =function() {
//     console.log(this.firstname+' '+this.lastname)
// }

// krushna.display()

// console.log(krushna.language)

// Setting the value using method

// class info{

//     setFname(fn){
//         this.firstname=fn
//     }

//     getFname(){
//         return this.firstname
//     }

//     setAge(ag){
//         this.age=ag
//     }

//     getAge(){
//         return this.age
//     }
// }

// let abhi= new info()

// // abhi.setFname="Abhijit"
// // abhi.setAge=12

// abhi.setFname('Abhijit')
// abhi.setAge(25)

// console.log(abhi)

// console.log(abhi.getAge())
// console.log(abhi.getFname())

// // Setting the value using function


// class person{

//     set fname(fn){
//         this.firstname=fn
//     }

//     set rollNo(rn){
//         this.rollNumber=rn
//     }

//     get fname(){
//         return this.firstname
//     }

//     get rollNo(){
//         return this.rollNumber
//     }
// }

// let kaivaly = new person()

// kaivaly.fname="Kaivaly"
// kaivaly.rollNo=12

// console.log(kaivaly)

// console.log(kaivaly.fname)
// console.log(kaivaly.rollNo)

let info = new Map()

console.log(info)

info.set(31,"Age")
info.set(true,"is graduate")
info.set('Abhijit','firstname')

console.log(info)

let name = new Set(['Abhijit','krushna','krushna'])

console.log(name)

name.add("kaivaly")

console.log(name)

function primeNo(num){
    let count = 0

    for(let i=2;i<num-1;i++){
        if(num%2==0){
            count++
        }     
    }
    if(count!=0){
        console.log('Number is not prime')
    }

    else{
        console.log('Number is prime')
    }
}

primeNo(5)
primeNo(6)

//Q. seperate small and capital characters from string

function sepCapSmall(str){
    let cap = []
    let small =[]

    for(let i=0;i<str.length;i++){
        if(str[i]>='A'&& str[i]<='Z'){
            cap.push(str[i])
        }

        else{
            small.push(str[i])
        }
    }

    console.log(cap)
    console.log(small)
}

sepCapSmall('AbhijitaRNIKAR')

let array = [45,69,63,78,14,45,69]

let vv = []

for(let i=0;i<array.length;i++){
    if(!vv.includes(array[i])){
        vv.push(array[i])
    }
}
console.log(vv)

let cc = new Set(array)

console.log(cc)

