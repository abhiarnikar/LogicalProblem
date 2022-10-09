/*
(i,j)


(1,1)
(2,1) (2,2)
(3,1) (3,2) (3,3)
(4,1) (4,2) (4,3) (4,4)
(5,1) (5,2) (5,3) (5,4) (5,5)

*/

/*

* * * *
* * *
* *
*

*/


/*
* * * *
* * *
* * 
*


*/
// for(let i=4;i>=1;i--){
//     let s=''
//     for(let j=i;j>=1;j--){
//         s+='* '
//     }
//     console.log(s)
// }


/*

   *
  **
 ***
****


*/
// i=0,j=0
// ....*
// ...**
// ..***
// .****
// *****
for(let i=4;i>=0;i--){
    let s=''
    for(let j=0;j<=4;j++){
        if(j>=i){
            s=s+'*'
        }
        else{
            s+=' '
        }
    }
    console.log(s)
}

// ...
function matrix(n){
    for(let i=n;i>=0;i--){
        let s=''
        for(let j=0;j<=n;j++){
            if(j>=i){
                s=s+'* '
            }
            else{
                s+=' '
            }
        }
        console.log(s)
    }
}
matrix(6)
matrix(10)
// matrix(50)

// for(let i=4;i>=0;i--){
//     let s=''
//     for(let j=0;j<=4;j++){
//         if(j>=i){
//             s=s+'* '
//         }
//         else{
//             s+=' '
//         }
//     }
//     console.log(s)
// }
// spd


// . . . . x.
// . . . x. x.
// . . x. x. x.
// . x. x. x. x.