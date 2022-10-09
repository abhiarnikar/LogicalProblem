// prime  ///
//  10 
// let n=23 
// function prime(n){
//     let a=0
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             a=1
//             break;
//         }
//     }
//     if(a==1){
//         return false
//     }
//     else if(a==0){
//         return true
//     }
// }

// for(let j=2;j<=n;j++){
//     if(prime(j)){
//         console.log(j)
//     }
// }



// if(prime(24)){
//     console.log('Prime')
// }
// else{
//     console.log('Not prime')
// }



// let n=11  //1 15 3 5 
// let a=0
// for(let i=2;i<n;i++){
//     if(n%i==0){
//         a=1
//         break
//     }
// }
// if(a==1){
//     console.log('Not prime')
// }
// else if(a==0){
//     console.log('Prime')
// }



// factorial --- 9! 9*8*.....1
let n=7
let ans=1//720

for(let i=1;i<=n;i++ ){
    ans=ans*i
}
console.log(ans)