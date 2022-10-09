// 1. You have a 3 Rs coins and 7 Rs coins .Given an amount n ,check if the amount i.e n can be paid with use of only 3 Rs coins and 7 Rs coins or not .(ex. for n=19, 3x4+7x1=19).

// 2.GCD and LCM of 2 numbers

// 3.In an array check how many elements are greater than their adjacent ones. i.e a<b>c find count of b in array.


// let n=21
// 2x+ 5y=19

// 19 3x4 7x1=19
// 14 3x0 7x2==14
// let n=119
// let a=0
// let three=0,seven=0
// if(n%7==0){
//     a=1
//     three=0
//     seven=n/7
// }
// for(let i=0;i<n;i+=7){
//     let p=n-i// 12
//     if(p%3==0){
//         three=p/3
//         seven=i/7
//         a=1
//         break
//     }
// }
// if(a==1){
//     console.log(`3x${three}`,`7x${seven}`)
// }
// else if(a==0){
//     console.log('Not possible')
// }




/*


     19
 3         7

 0   &&    19
 3   &&    16
 6    &&   13
 9    &&   10
 12        7
 21      0


*/



// gcd and lcm ===> x*y=z y=(z/x);


// let a=6 b=7
// 


// function min(a,b){
//     if(a>b){
//         return b
//     }
//     return a
// }
// let ans=0
// let a=13, b=2

// let mn=min(a,b)

// for(let i=1;i<=mn;i++){
//     if(a%i==0&&b%i==0){
//         ans=i;
//     }
// }


// let lcm=a*b/ans
// console.log(ans,lcm)



let a=[1,4,3,4,5,7,5,3,4]
let n=a.length
let counter=0
for(let i=1;i<n-1;i++){
    if(a[i]>a[i-1]&&a[i]>a[i+1]){
        counter++
    }
}

console.log(counter)
