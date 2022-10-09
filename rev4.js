/*

1
2 3
4 5 6
7 8 9 10

      1
    2 3
  4 5 6

*
**
***
****
*****


a
b c
d e f
g h i j

a 
b b
c c c
d d d d


*/



// let k=1

// for(let i=1;i<=4;i++){
//     let s=''
//     for(let j=1;j<=i;j++){
//         s+=k+' '
//         k++
//     }
//     console.log(s)
// }


/// -------------------------------------

// let a=['a','b','c','d','e','f','g','h','i','j']
// let k=0

// for(let i=1;i<=4;i++){
//     s=''//b c
//     for(let j=1;j<=i;j++){
//         s+=a[k]+' '
//         k++
//     }
//     console.log(s)
// }

/// -------------------------------------


// let a=['a','b','c','d','e','f','g','h','i','j']

// for(let i=0;i<6;i++){
//     let s=''
//     for(let j=0;j<=i;j++){
//         s+=a[i]+' '
//     }
//     console.log(s)
// }

/// -------------------------------------


// sort an array


// let a=[1,4,3,5,7,3,4]
//  a<= b<= c<= d<= e<= f 

// for(let i=0;i<a.length;i++){
//     for(let j=0;j!=i,j<a.length;j++){
//         if(a[i]<a[j]){
//             let t=a[i]
//             a[i]=a[j]
//             a[j]=t
//         }
//     }
// }
// console.log(a)




// console.log(a)

// check if array is sorted or not 

// let a=[1,4,13,25,37,43,44] //a.length-1
// let k=0
// for(let i=0;i<a.length-1;i++){
//     if(a[i]>a[i+1]){
//         k=1
//         break
//     }
    
// }
// if(k==0){
//     console.log('sorted')
// }
// else if(k==1){
//     console.log('Not sorted')
// }