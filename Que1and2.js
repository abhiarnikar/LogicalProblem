//check if number is prime number
// 2 3 5 7 11 13 
// function prime(n){
//     let c=0
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             c=1
//             break
//         }
//     }
//     if(c==1){
//         console.log('NO')
//         return false
//     }
//     else{
//         console.log('Yes')
//         return true
//     }
// }

// prime(10)
// prime(9)
// prime(3)
// prime(45)


// without function
let p = 7
let a = 0
for (let i = 2; i < p; i++) {

    if (p % i == 0) {
        a = 1
        break
    }
}

if (a == 1) {
    console.log('not prime')

}
else if (a == 0) {
    console.log('prime')

}

// with function

function prime(n){
    let b=0
    for (let i=2;i<n;i++) {
        
        if (n%i==0) {
            b=1
            break
        }
    }

    if (b==1) {
        console.log('not prime')

    }
    else if(b==0) {
        console.log('prime')

    }

}

prime(7)
prime(9)
prime(3)
prime(17)

// factorial means 8!= 8*7*6*5*4*3*2*1

// without function
let x=6
let ans=1

for(let i=1;i<=x;i++){
    ans=ans*i
}

console.log(ans)

// with function

function fact(s){
    let ans=1
    for(let i=s;i>=1;i--){
        ans= ans*i
        
    }   
    //return ans
    console.log(ans)

}

fact(7)

