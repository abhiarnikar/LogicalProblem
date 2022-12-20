// // reverse the string

// function greet(str){
//     let rev = ''
//     for(let i=0;i<str.length;i++){
//         rev= str[i]+rev

//     }
//     console.log(rev)

// }
// greet('devayni')

// // palindrome

// function abhi(str){
//       let palindrome = str.split().reverse().join()
//       console.log(palindrome===str)
// }
// abhi('madam')
// abhi('reviver')

// // date format 12-12-2022

// let date = new Date()
// let daydate = date.getDate()
// let month = date.getMonth()+1
// let year = date.getFullYear()

// let format = daydate+'-'+month+'-'+year
// console.log(format)

// //  find the highest element of an array

// // 1st way

// let marks = [96,69,84,25,17,36,81,99,145,69]
// console.log(Math.max(...marks))

// // 2nd way

// function max(array){
//     let highest = 0
//     for(let i=0;i<array.length;i++){
//         if(array[i]>highest){
//             highest=array[i]
//         }
//     }
//     return highest
// }
// let aa = max(marks)
// console.log(aa)

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

// //  reverse the string but only word

// let info = 'i am living in dharmpuri'

// let bb= info.split(' ').reverse().join(' ')
// console.log(bb)

// let a = []
// for(let i=0;i<info.length;i++){
//     if(a[info[i]]){
//         a[info[i]]=a[info[i]]+1
//     }
//     else{
//         a[info[i]]=1
//     }
// }
// console.log(a)

// // //write array of 26 to 30 numbers and perform addition of all values,
// // //after that perform addition of only odd numbers from this array.

// let array = [26,27,28,29,30]
// let sum = array.reduce(function(acc,el,index,arr){
//          return el+acc
// },0)
// console.log(sum)

// let cc = array.filter(function(el,index,arr){
//     return el%2!==0
// }).reduce(function(acc,el,index,arr){
//       return el+acc
// },0)
// console.log(cc)

// let names = ['abhijit','vishwajeet','sachin','sehwag']

// let longest1 =names.reduce(function(acc,el,index,arr){
        
//       if(el.length>acc.length){
//         return el
//       }
//       else{
//         return acc
//       }
// },' ')

// console.log(longest1)

// //let marks = [96,69,84,25,17,36,81,99,145,69]

// let count = 0
// for(let i=0;i<marks.length;i++){
//     if(marks[i]==69){
//         count = count+1
//     }
// }
// console.log(count)

// let word = 'p4q3r2s1'
// let res = ''

// for(let i=0;i<word.length;i++){
//     if(Number(word[i])){
//           res = res+word[i-1].repeat(Number(word[i]))
//     }
// }
// console.log(res)

// // count the vowel of the word

// //let info = 'i am living in dharmpuri'

// let vowel = 0

// for(let i=0;i<info.length;i++){
//     if(info[i]=='a'||info[i]=='e'||info[i]=='i'||info[i]=='o'||info[i]=='u'){
//         vowel = vowel+1
//     }
// }
// console.log(vowel)

// // count the each vowel of that string

// let vv =[]

// for(let i=0;i<info.length;i++){
//     if(info[i]=='a'||info[i]=='e'||info[i]=='i'||info[i]=='o'||info[i]=='u'){
//         if(vv[info[i]]){
//             vv[info[i]]=Number(vv[info[i]])+1
//         }
//         else{
//             vv[info[i]]=1
//         }
//     }
// }
// console.log(vv)

// console.log(Math.random())
// console.log(Math.random()*6)
// console.log(Math.random()*6)+1
// console.log(Math.floor(Math.random()*6)+1)

// function randomNo(max,min){
//     console.log(Math.floor(Math.random()*(max - min+1))+min)
// }
// randomNo(150,100)

// function abhi(){
//     setTimeout(()=>{
//         console.log('hi')
//     },2000)

//     setTimeout(()=>{
//         console.log('hello')
//     },1000)
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
// }).then(function(str){
//     console.log('comparision is right',str)
// },function(str){
//     console.log('comparision is wrong',str)
// })

// let pro1 = new Promise(function(resolve,reject){

//     let a = 2
//     let b = 5

//     if(a>b){
//         resolve('true')
//     }
//     else{
//         reject('false')
//     }
// }).then(function(str){
//     console.log('comparision is right',str)
// },function(str){
//     console.log('comparision is wrong',str)
// })

// console.log(1+'2'+'2')
// console.log(1+ +'2'+'2')

// //How to empty an array in JavaScript?

let array = [10,25,36,45,78]

// // array.length=0
// // console.log(array)

function greet(arr){
    let highest = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>highest){
            highest=arr[i]
        }
    }
    console.log(highest)
}
greet(array)

// //Q. seperate small and capital characters

// let info = 'AbhiJITarNiKAR'

// function capSmall(str){
//     let cap = []
//     let small = []
//     for(let i=0;i<str.length;i++){
//         if(str[i]>='A' && str[i]<='Z'){
//             cap.push(str[i])
//         }
//         else{
//             small.push(str[i])
//         }
//     }
//     console.log(cap)
//     console.log(small)
// }
// capSmall(info)

// function randomNo(max,min){
//     console.log(Math.floor(Math.random()*(max-min+1))+min)
// }
// randomNo(40,20)

console.log(Math.random()*7)+1