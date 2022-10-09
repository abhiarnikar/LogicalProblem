/*

1
2 3
4 5 6
7 8 9 10

      1
    2 3
  4 5 6
7 8 9 10

a
b b
c c c
d d d d

a
b c
d e f
g h i j

*/

// let k=1
// for(let i=1;i<=4;i++){
//   let s=''
//   for(let j=1;j<=i;j++){
//     s+=k+' '
//     k++
//   }
//   console.log(s)
// }


// function abc(m){
//   let k=1
//   for(let i=m;i>=0;i--){
//     let s=''
//     for(let j=0;j<=m;j++){
//       if(j>=i){
//         s+=k
//         k++
//       }
//       else if(i>j){
//         s+=' '
//       }
//     }
//     console.log(s)
//   }
// }

// abc(5)
// let k=1

// for(let i=3;i>=0;i--){
//   let s=''
//   for(let j=0;j<=3;j++){
//     if(j>=i){
//       s+=k
//       k++
//     }
//     else if(i>j){
//       s+=' '
//     }
//   }
//   console.log(s)
// }



/*

a
b b
c c c
d d d d


a 
ab
abc

*/

// let a=['a','b','c','d','e','g','h','i','j']

// let k=0

//i =4
//j=1
// for(let i=0;i<=3;i++){
//   let s=''
//   for(let j=0;j<=i;j++){
//     s+=a[i]+' '
//   }
//   console.log(s)
// }


// function xyz(m){

//   let a=['a','b','c','d','e','g','h','i','j']
//   for(let i=0;i<=m;i++){
//     let s=''
//     for(let j=0;j<=i;j++){
//       s+=a[j]+' '
//     }
//     console.log(s)
//   }
// }
// xyz(4)


// function xyz(m){

//   let a=['a','b','c','d','e','g','h','i','j']
//   for(let i=0;i<=m;i++){
//     let s=''
//     for(let j=0;j<=i;j++){
//       s+=a[i]+' '
//     }
//     console.log(s)
//   }
// }
// xyz(4)


// a
// b c
// d e f
// g h i j

//i=1
//j=0


// let a=['a','b','c','d','e','g','h','i','j']
// let c=0
// for(let i=0;i<=3;i++){
//   let s=''
//   for(let j=0;j<=i;j++){
//     s+=a[c]+' '
//     c++
//   }
//   console.log(s)
// }

function char(m){
  let a=['a','b','c','d','e','f','g','h','i','j']
  let c=0
  for(let i=0;i<=m;i++){
    let s=''
    for(let j=0;j<=i;j++){
      s+=a[c]+' '
      c++
    }
    console.log(s)
  }

}
char(2)
char(3)
char(4)
