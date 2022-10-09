


// fibonacii series 
// 0 1 1 2 3 5 8 13 21 ...
//     a b

function fib(m){
    let a=0,b=1
    console.log(a)
    console.log(b)
    for(let i=3;i<=m;i++){
        let c=a+b
        console.log(c)
        a=b
        b=c
    }
}
// fib(7)

// let n=10
// let a=0,b=1
// console.log(a)
// console.log(b)
// for(let i=3;i<=n;i++){
//     let c=a+b
//     console.log(c)
//     a=b
//     b=c
// }


// star pattern 


/*


*
* *
* * *
* * * *
* * * * *

*/


// for(let i=1;i<=5;i++){
//     let s=''
//     for(let j=1;j<=i;j++){
//         s+='* '
//     }
//     console.log(s)
// }


// for(let i=1;i<=5;i++){
//     console.log('* '.repeat(i))
// }
// ------------------------------
/*

1 
1 2
1 2 3
1 2 3 4

1
2 2 
3 3 3
*/


for(let i=1;i<=4;i++){
    let s=''
    for(let j=1;j<=i;j++){
        s+=i+" "
    }
    console.log(s)
}