// let array = [45,65,85,69,71,98,52]

// console.log(Math.max(...array))

// function max(arr){
//     let highest = 0

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>highest){
//             highest=arr[i]
//         }
//     }
//     console.log(highest)
// }
// max(array)

// let aa = array.sort(function(a,b){
//     return a-b
// })

// console.log(aa)

// let bb = array.sort(function(a,b){
//     return b-a
// })

// console.log(bb)

// let word  ='abhijit'

// let rev= ''

// for(let i=0;i<word.length;i++){
//     rev= word[i]+rev
// }
// console.log(rev)

// let count = []

// for(let i=0;i<word.length;i++){
//   if(count[word[i]]){
//     count[word[i]]=count[word[i]]+1
//   }
//   else{
//     count[word[i]]=1
//   }
// }
// console.log(count)

// let marks = [78,69,13,25,36,18]

// let cc = marks.reduce(function(acc,el){
//     return acc+el
// },0)

// console.log(cc)

// let ww = marks.filter(function(el,index,arr){
//     return el%2 !=0
// }).reduce(function(acc,el){
//       return acc+el
// },0)

// console.log(ww)

// function greet(str){
//     let palindrome = str.split().reverse().join()
//     console.log(str===palindrome)
// }
// greet('madam')

// let quote = 'i love my india'

// let pp = quote.split(' ').reverse().join(' ')
// console.log(pp)

// let names = [
//     {
//         'name':'abhijit'
//     },
//     {
//         'name':'kaivaly'
//     },
//     {
//         'name':'krushna'
//     }
// ]

// function abhi(obj,name){
//     let vv = obj.filter(function(el){
//         return el.name=name
//     })
//     return vv
// }

// let xx = abhi(names,'kaivaly')
// console.log(xx[0])

// let marks1 = [7,9,13,25,36,18]

// function max1(marks){
//     let highest = 0
//     for(let i=0;i<marks.length;i++){
//         if(marks[i]>highest){
//             highest=marks[i]
//             console.log(highest)
//         }
//     }
// }
// max1(marks1)

// // * 
// // * * 
// // * * * 
// // * * * * 
// // * * * * * 

// for(let i=0;i<=5;i++){
//     let a = ''
//     for(let j=1;j<=i;j++){
//         a=a+'* '
//     }
//     console.log(a)
// }

// console.log('=================================')

// // *****
// // ****
// // ***
// // **
// // *

// for(let i=5;i>=1;i--){
//     let a = ''
//     for(let j=1;j<=i;j++){
//         a=a+'* '
//     }
//     console.log(a)
// }

// let info = {
//     firstname:'Devyani',
//     lastname:'Arnikar'
// }
// let display = function(state,city){
//     console.log(this.firstname+' '+state+' '+city)
// }

// display.call(info,'MH','Pune')

// display.apply(info,['MP','indore'])

// let zz = display.bind(info,'UP','Lucknow')
// console.log(zz)
// zz()

// let date = new Date()
// date.setDate(date.getDate()+365)
// let day = date.getDate()
// let month = date.getMonth()+1
// let year = date.getFullYear()

// let format = day+'/'+month+'/'+year
// console.log(format)

// let names  = ['abhijit','devyani','kaivalyarnikar','krushna']

// let longest = names.reduce(function(acc,el){
//     if(el.length>acc.length){
//         return el
//     }
//     else{
//         return acc
//     }
// },' ')

// console.log(longest)


// let numbers = [73,98,47,25,96,411,65]

// let max = numbers.reduce((acc,el)=>{
//     if(el>acc){
//         return el
//     }
//     else{
//         return acc
//     }
// },numbers[0])

// console.log(max)

// let min = numbers.reduce((acc,el)=>{
//     if(el<acc){
//         return el
//     }
//     else{
//         return acc
//     }
// },numbers[0])
// console.log(min)

// let odd = []
// let even  = []

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

// let word  ='a4b3c2d1'

// let a = ''

// for(let i=0;i<word.length;i++){
//     if(Number(word[i+1])){
//         a=a+word[i].repeat(Number(word[i+1]))
//     }
// }
// console.log(a)

// let word2 = '4p3q2r1s'
// let b = ''

// for(let i=0;i<word2.length;i++){
//     if(Number(word2[i])){
//         b=b+word2[i+1].repeat(Number(word2[i]))
//     }
// }
// console.log(b)

// let info = 'i live in pune i have oniun'

// let count = 0

// for(let i=0;i<info.length;i++){
//     if(info[i]=='a'||info[i]=='e'||info[i]=='i'||info[i]=='o'||info[i]=='u'){
//         count=count+1
//     }
// }
// console.log(count)

// let vowel = []

// for(let i=0;i<info.length;i++){
//     if(info[i]=='a'||info[i]=='e'||info[i]=='i'||info[i]=='o'||info[i]=='u'){
//         vowel.push(info[i])
//     }
// }
// console.log(vowel)

// let k = []

// for(let i=0;i<info.length;i++){
//     if(info[i]=='a'||info[i]=='e'||info[i]=='i'||info[i]=='o'||info[i]=='u'){
//         if(k[info[i]]){
//             k[info[i]]=Number(k[info[i]])+1
//         }
//         else{
//             k[info[i]]=1
//         }
//     }
// }
// console.log(k)

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

// class RBI{
//     save(){
//         console.log('saving is 45per')
//     }
//     loan(){
//         console.log('loan is 14per')
//     }

// }

// class SBI extends RBI{

//     save(){
//         console.log('saving is 69 per')
//         super.save()
//     }

//     loan(){
//         console.log('loan is 42 per')
//         super.loan()
//     }
// }

// let Pune = new SBI()
// Pune.save()
// Pune.loan()

//console.log(Math.random()*7)+1
// console.log(Math.floor(Math.random()*8)+1)

// function randomNo(max,min){
//     console.log(Math.floor(Math.random()*(max - min+1))+min)
// }
// randomNo(70,60)

// function greet(...array){
//     let aa = array.map(function(el){
//         return el*3
//     })
//     console.log(aa)
// }
// greet(1,2,3,4,5,6,7)

// let aa= [45,65,85]
// let bb = [...aa,41,15,64]

// console.log(bb)

// class info {

//     setFname(fn){
//         this.fullname=fn
//     }

//     setAge(ag){
//         this.Age=ag
//     }

//     getFname(fn){
//         return this.fullname
//     }

//     getAge(ag){
//         return this.Age
//     }
// }

// let Abhi = new info()
// console.log(Abhi)
// Abhi.setFname('Abhijit Arnikar')
// Abhi.setAge(31)

// console.log(Abhi.getAge())
// console.log(Abhi.getFname())

// class Person{
//     set Fname(fn){
//        this.firstname=fn
//     }

//     set City(ct){
//         this.city=ct
//     }

//     get Fname(){
//         return this.firstname
//     }

//     get City(){
//         return this.city
//     }
// }

// let krushna = new Person()

// krushna.Fname='Krushna Arnikar'
// krushna.City='Pune'

// console.log(krushna.Fname)
// console.log(krushna.City)

// function Student(fn,ln,ct){
//     this.firstname=fn
//     this.lastname=ln
//     this.city=ct

//     // this.display=function(){
//     //     console.log(this.firstname)
//     // }
// }

// let abhi = new Student('Abhijit','Arnikar','Pune')
// console.log(abhi)

// console.log(abhi.__proto__===Student.prototype)

// Student.prototype.Language='Marathi'

// Student.prototype.display=function(){
//     console.log(this.firstname+' '+this.lastname)
// }

// console.log(abhi.Language)
// abhi.display()

// console.log(abhi.hasOwnProperty('Language'))

// let names = ['Sachin','Sehwag','Yuvraj','Gambhir']

// let [sa,viru,yuvi,gg]= names
// console.log(sa)
// console.log(viru)
// console.log(yuvi)
// console.log(gg)

// let abhi = new Map()

// console.log(abhi)

// //adding the property and values in map

// abhi.set(31,'age')
// abhi.set('Abhijit','firstname')
// abhi.set(true,'is married')

// console.log(abhi)

// console.log(abhi.size)

// console.log(abhi.has('Abhijit'))

// console.log(abhi.get(true))

// abhi.delete(31)

// console.log(abhi)

// console.log(abhi.size)

// let marks = new Set([45,65,85,69,47,45,65])
// console.log(marks)

// let abhi = new Set("AbhijitA","Abhi")
// console.log(abhi)

// let names = new Set()
// console.log(names)

// names.add('Abhijit')
// names.add('Ram')
// names.add('Vishwajeet')
// names.add('kaivaly')
// names.add('Ram')

// console.log(names)

// console.log(names.size)

// console.log(names.has('Abhijit'))

// names.delete('Abhijit')

// console.log(names)

// console.log(names.size)

// // names.clear()

// names.forEach(function(el){
//     console.log('Welcome '+el)
// })

// let pro = new Promise(function(resolve,reject){

//     let a = 10
//     let b =5
//     if(a>b){
//         resolve('true')
//     }
//     else{
//         reject('false')
//     }
// }).then(function(str){
//     console.log('comparision is correct '+str)
// },function(str){
//     console.log('comparision is false '+str)
// })

// let pro1 = new Promise(function(resolve,reject){

//     let a = 10
//     let b =5
//     if(a<b){
//         resolve('true')
//     }
//     else{
//         reject('false')
//     }
// }).then(function(str){
//     console.log('comparision is correct '+str)
// },function(str){
//     console.log('comparision is false '+str)
// })

// function primeNo(num){
//     let count = 0
//     for(let i=2;i<num-1;i++){
//         if(num%i==0){
//             count=count+1
//         }
//     }
//     if(count!=0){
//         console.log('Number is not prime')
//     }
//     else{
//         console.log('Number is prime')
//     }
// }
// primeNo(7)
// primeNo(9)
// primeNo(3)

// function sepCapSmall(str){
//     let cap= []
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
// sepCapSmall('KrushNAARnikar')

// let array = [11,22,33,44,11,22]

// let aa = []

// for(let i=0;i<array.length;i++){
//     if(!aa.includes(array[i])){
//         aa.push(array[i])
//     }
// }
// console.log(aa)

// let str = 'DevyaniArnikar'
// let bb = ''
// for(let i=0;i<str.length;i++){
//     if(i !=0 && i != str.length-1){
//         bb = bb+str[i]
//     }
// }
// console.log(bb)

// let email = 'abhiarnikar725@gmail.com'
// let mail = ''

// for(let i=0;i<email.length;i++){
//     if(i==0){
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

// let word  = 'devyani'

// let bb = word[0].toUpperCase()+word.slice(1)
// console.log(bb)

// let info = 'my name abhijit arnikar'

// let aa = info.split(' ')
// console.log(aa)

// let xx = []

// for(let i =0;i<aa.length;i++){
//     let z = aa[i][0].toUpperCase()+aa[i].slice(1)
//     xx.push(z)
// }
// console.log(xx.join(' '))

function separate(str){
    let num  = ''
    let char  = ''
    for(let i=0;i<str.length;i++){
        if(Number(str[i])){
            num = num+str[i]
        }
        else{
            char = char+str[i]
        }
    }
    console.log(num)
    console.log(char)
}
separate('Abhijit2541991Arnikar')