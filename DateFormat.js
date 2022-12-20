let date = new Date()

let year = date.getFullYear()
let month = date.getMonth()+1
let daydate = date.getDate()

// console.log(daydate)
// console.log(month)
// console.log(year)

let finalFormat = daydate+'-'+month+'-'+year

// we can change the above format by altering

console.log(finalFormat)
// In below example min value is not printed 
// let arr = [47,2,3,66,22,34,78,45,7,74,88]
// let max = 0
// let min = 0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// console.log(max)
// console.log(min)