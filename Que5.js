//star pattern question

// 1.
// *....
// **...
// ***..
// ****.
// *****

//1.

// for(let i=1;i<=5;i++){
//     let s =' '
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
//             s +=' '
//         }
//         else if(j>=i){
//             s +='*'
//         }
//     }
//     console.log(s)
// }

// 3.
// *****
// ****.
// ***..
// **...
// *....


// 3.
// for(let i=6;i>=1;i--){
//     let s = ''
//     for(let j=1;j<=6;j++){
//         if(j<i){
//             s+='*'
//         }
//         else if(j>=i){
//             s+= ' '
//         }
//     }
//     console.log(s)
// }

// 4.
// *****
// .****
// ..***
// ...**
// ....*

for(let i=1;i<=5;i++){
    s=''
    for(j=1;j<=5;j++){
        if(j>=i){
            s+="*"
        }
        else{
            s+=" "
        }
    }
    console.log(s)
}
