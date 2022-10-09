// fibonacii 

// 0 1 1 2 3 5 8 13 21 34....let n=12

// let sum=0
// let a=0,b=1
// let n=10
// console.log(a)
// console.log(b)
// sum+=a+b
// for(let i=3;i<=n;i++){
//     let c=a+b
//     console.log(c)
//     a=b
//     b=c
//     sum+=c
// }
// console.log('---------------')
// console.log(sum)


// let a=0,b=1
// let n=23
// // console.log(a)
// // console.log(b)
// let c=a+b
// for(let i=3;i<=n;i++){
//     let c=a+b
//     a=b
//     b=c
//     if(i==n){
//         console.log(c)
//     }
// }


// a[1]  n a[n-1-1]
let a=[1,2,3,4,5,6]
// [5 4 3 2 1]
// a=a.reverse()
// console.log(a)
// let n=a.length
// for(let i=0;i<=n/2;i++){
//     let temp=a[i]
//     a[i]=a[n-i-1]
//     a[n-i-1]=temp
// }
// console.log(a)

let n=a.length
// i=1,j=4
for(let i=0,j=n-1;i<n/2,j>n/2;i++,j--){
    let temp=a[i]
    a[i]=a[j]
    a[j]=temp
}
console.log(a)