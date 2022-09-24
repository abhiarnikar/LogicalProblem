// question 1) Fibonacii series (1 1 2 3 5 8 ...)

// 0,1,1,2,3,5,8,13,21,34,55

// without function
// let sum=0
// let a=0
// let b=1
// let n= 10
// console.log(a)
// console.log(b)
// sum+=a+b
// for(let i=3;i<=n;i++){
//     let c=a+b
//     a=b
//     b=c
//     sum+=c
// }
// console.log(sum)
console.log("**************************************************")

// with function

function fab(f){
    let x=0
    let y=1
    for(let i=3;i<=f;i++){
        let z= x+y
        x=y
        y=z
        console.log(z)
    }
   
}
fab(10)


let a=0
let b=1
let n= 10
console.log(a)
console.log(b)
let c=a+b
for(let i=3;i<=n;i++){
    let c=a+b
    a=b
    b=c
    if(i==n){
        console.log(c)
    }
    
}

// question 2) Reverse array


// first method 
let p = [11,22,33,44,55,66]
// let q=p.reverse()
// console.log(q)

// second method

// let r= p.length

// for(let i=0;i<=r/2;i++){
//     let temp = p[i]
//     p[i]=p[r-i-1]
//     p[r-i-1]=temp
    
// }
// console.log(p)


let k=p.length
// i=1,j=4
for(let i=0,j=n-1;i<k/2,j>k/2;i++,j--){
    let temp=p[i]
    p[i]=p[j]
    p[j]=temp
}
console.log(p)







