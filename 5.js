
//[59,5]
// reverse an array 
// 3
    // 0 1 2 3 4  
let a=[1,4,3,5,59]
let n=a.length//6
//    [49,59,5,3,4,1]
for(let i=n-1;i>=n/2;i--){
    let temp=a[i]
    a[i]=a[n-i-1]
    a[n-i-1]=temp
}
console.log(a)
for(let i=0;i<=n/2;i++){
    let temp=a[i]
    a[i]=a[n-i-1]
    a[n-i-1]=temp
}
console.log(a)

// function rev(a){
//     let x=a.length
//     for(let i=0;i<=x/2;i++){
//         let temp=a[i]
//         a[i]=a[x-i-1]
//         a[x-i-1]=temp
//     }
//     console.log(a)
// }

// let a1=[20,43,54]
// let a2=[234,433,954]
// let a3=[1,4,3,5,59,89]
// rev(a1)
// rev(a2)
// rev(a3)


/*

b1=banana
b2=apple

let z=5
b3=b1
b1=b2
b2=b3
*/
//a[n-i]
