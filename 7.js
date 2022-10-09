    // i           j
    // 0 1 2 3 4 5 6
// let a=[1,2,3,4,5,6,7]
// let n=a.length-1

// reverse an array -->
// function swap(y,z){
//     let w=y;
//     y=z;
//     z=w;
// }
// for(let i=0,j=n;i<=n/2,j>=n/2;i++,j--){
//     let c=a[i]
//     a[i]=a[j]
//     a[j]=c
// }
// console.log(a)


// let b= [1,2,-1,3,-987,20,-3]
// let pos=[]
// let neg=[]
// for(let i=0;i<b.length;i++){
//     if(b[i]>=0){
//         pos.push(b[i])
//     }
//     else if(b[i]<0){
//         neg.push(b[i])
//     }
// }
// // console.log(pos,neg)
// if(pos.length>neg.length){
//     console.log('Positive')
// }
// else if(pos.length<neg.length){
//     console.log('Negative')
// }
// else if(pos.length==neg.length){
//     console.log('Equal')
// }

// function xyz(a){
//     let pos=[]
//     let neg=[]
//     for(let i=0;i<a.length;i++){
//         if(a[i]>=0){
//             pos.push(a[i])
//         }
//         else if(a[i]<0){
//             neg.push(a[i])
//         }
//     }
//     if(pos.length>neg.length){
//         console.log('Positive')
//     }
//     else if(pos.length<neg.length){
//         console.log('Negative')
//     }
//     else if(pos.length==neg.length){
//         console.log('Equal')
//     }
// }

// let r=[1,-1,2,-2,3,-756,-43]
// xyz(r)

// sorting alphabetically 
//      0  1       2    3      4
let a=['a','aa','naa','dhsy','ab']
let r=[0,01,21,02,1,12,21,25,31,48,1]
//a aa ab dhsy naa
r.sort()
// console.log(r)

// aky ,ary ,hey ,all ,hello ,hand 

// aky all ary hey hand hello

// sort -->
//      0 1 2   3  4  5
// let= x=[2,3,65,21,38,-21]
// for(let i=0;i<x.length;i++){
//     for(let j=0;j<x.length;j++){
//         if(x[i]<x[j]){
//             let s=x[i]
//             x[i]=x[j]
//             x[j]=s
//         }
//     }
// }
// console.log(x)


// above que in function->
function abc(v){
    for(let i=0;i<v.length;i++){
        for(let j=0;j<v.length;j++){
            if(v[i]<v[j]){
                let s=v[i]
                v[i]=v[j]
                v[j]=s
            }
        }
    }
    return v
}

let aa=[-12,94,4,32,-23]
let c=abc(aa)
console.log(c)