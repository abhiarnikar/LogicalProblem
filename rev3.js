/*

// 0 1 1 2 3 5 8 ...

*/

// let n=30

// function fib (n){
//     if(n<=1){
//         return n;
//     }

//     return fib(n-1)+fib(n-2)
// }

// let x=fib(n)
// console.log(x)



/*

1.
*....
**...
***..
****.
*****


2.

....*
...**
..***
.****
*****


// 3. 
****
***.
**..
*...


4.
****
.***
..**
...*


*/


//1.
// for(let i=1;i<=5;i++){
//     let s=''
//     for(let j=1;j<=i;j++){
//         s+='* '
//     }
//     console.log(s)
// }

// 2.
// ....*
// ...**
// ..***
// .****
// *****
// for(let i=5;i>=1;i--){
//     let s=''
//     for(let j=1;j<=5;j++){
//         if(j<i){
//             s+=' '
//         }
//         else if(j>=i) {
//             s+='*'
//         }
//     }
//     console.log(s)
// }


// 3.

// for(let i=5;i>=1;i--){
//     let s=''
//     for(let j=1;j<=5;j++){
//         if(j<i){
//             s+='*'
//         }
//         else if(j>=i) {
//             s+=' '
//         }
//     }
//     console.log(s)
// }


// ****
// .***
// ..**
// ...*

// ****
//
for(let i=4;i>=1;i--){
    let s=''
    for(let j=4;j>=1;j--){
        if(i>=j){
            s+='*'
        }
        else if(i<j){
            s+=' '
        }
    }
    console.log(s)
}