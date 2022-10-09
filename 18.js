// Let's define 𝑆(𝑥) to be the sum of digits of number 𝑥 written in decimal system. For example, 𝑆(5)=5, 𝑆(10)=1, 𝑆(322)=7. We will call an integer 𝑥 interesting if 𝑆(𝑥+1)<𝑆(𝑥). In each test you will be given one integer 𝑛. Your task is to calculate the number of integers 𝑥 such that 1≤𝑥≤𝑛 and 𝑥 is interesting.
// 323 =8 322=7
// 46.https://codeforces.com/problemset/problem/1557/A


// [1,2,3,4,5]
// [1,2,3]  [4 ,5]


let a=[17,3,5,-3]

// 54   17 2 31 34

// function max(a){
//     let m=a[0]
//     for(let i=0;i<a.length;i++){
//         if(m<=a[i]){
//             m=a[i]
//         }
//     }
//     return m
// }

// function sum(a){
//     let s=0;
//     s=a.reduce(function(acc,el){
//         return acc+el
//     },0)
//     return s
// }

// let maxi_mum=max(a)
// let total_sum=sum(a)
// let average_second=(total_sum-maxi_mum)/(a.length-1)

// let ans=average_second+maxi_mum
// console.log(ans)



// 322

function alpha(n){
    let m=n
    let sum=0
    while(m>0){
        let r=m%10
        sum+=r
        m/=10
        m=Math.floor(m)
    }
    return sum
}


let x=10
let anss=0
// 1> 2
// 2 >3
// 3 >4
// 4 >5
// 5 >6
// 6 >7
// 7 >8
// 8 >9
// 9> 10
for(let i=1;i<x;i++){
    let a=alpha(i)
    let b=alpha(i+1)
    if(a>b){
        anss++
        console.log(i,i+1)
    }
}
console.log(anss)