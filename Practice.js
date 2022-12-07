// let A = [1,2,3,4,5] 
// //output ==> [14,13,12,11,10]
// let B = []
// for(let i=0; i<A.length; i++){
//     let a = 0
//     for(let j=0; j<A.length; j++){
//         if(i==j){
//             continue
//         }
//         a = a + A[j]
//     }
//      B.push(a)
// }

// console.log(B)

// 1. reverse  string
// let word = 'kaivaly'
// let rev = ''
// for (let i = 0; i < word.length; i++) {
//     rev = word[i] + rev
// }
// console.log(rev)

// // with function

// function greet() {
//     let word = 'kaivaly'
//     let rev = ''
//     for (let i = 0; i < word.length; i++) {
//         rev = word[i] + rev
//     }
//     console.log(rev)

// }
// greet()

// function greet1(str){
//     let rev=''
//     for(let i=0;i<str.length;i++){
//         rev= str[i]+rev
//     }
//     console.log(rev)
// }
// greet1('abhijit')
// greet1('krushna')

// 2. count vowels(a,e,i,o,u) in below string

// let info = 'my name is abhijit'
// let count=0
// for(let i=0;i<info.length;i++){
//     if(info[i]=='a'||info[i]=='e'||info[i]=='i'||info[i]=='o'||info[i]=='u'){
//         count=count+1
//     }
// }
// console.log(count)

// // count the each vowel in the string

// let k=[]
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

// Capital only first letter  in string

//let str = 'devyani'
// let cap=str[0].toUpperCase()+str.slice(1)
// console.log(cap)

// with help of loop
// let cap =''
// for(let i=0; i<str.length; i++){
//    if(i==0){
//     cap =cap + str[i].toUpperCase()
//    }else{
//     cap = cap + str[i]
//    }
// }
// console.log(cap)

//2.LOGICAL -- convert to upper case of each word first letter in given sentence

// let info = 'my name is abhijit arnikar'

// let A = []
// let B = info.split(' ')
// console.log(B)
// for(let i=0;i<B.length;i++){
//     let a = B[i][0].toUpperCase()+B[i].slice(1)
//     A.push(a)
// }
// console.log(A.join(' '))

