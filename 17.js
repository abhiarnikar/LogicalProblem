// 1. Find smallest positive number n such that sum of its digits is exactly equal to given x and without repetition of digits (ex for x=25,n=1789).
// 2. Given certain tickets available with 7 colours(VIBGYOR)and n people numbered from 1 to n, 1st person gets ticket with colour Voilet,2nd with Indigo,3rd with blue ,7 th with red ..... 8th with again voilet , 9th with indigo and so on uptil n . Find which colour of ticket nth person will get .
/*

v  1  8  15  1
i  2  9      
b  3  10
g  4  11
y  5  12
o  6  13
r  7  14

// 

*/
// let x=27//16 8 1
// let a=[]// 9 8 7 1// 1789  
// for(let i=9;i>=1;i--){
//     if(x>i){
//         a.push(i)
//         x-=i
//     }
//     else if(x<=i){
//         a.push(x)
//         break;
//     }
// }
// a=Number(a.reverse().join(''))
// console.log(a)


// function ans(x){
//     let a=[]// 9 8 7 1// 1789  
//     for(let i=9;i>=1;i--){
//         if(x>i){
//             a.push(i)
//             x-=i
//         }
//         else if(x<=i){
//             a.push(x)
//             break;
//         }
//     }
//     a=Number(a.reverse().join(''))
//     console.log(a)

// }

// ans(34)  //
// ans(11) // 



/*

v  1  8  15  
i  2  9
b  3  10
g  4  11
y  5  12
o  6  13
r  7  14



*/
// let n=974657

// if(n%7==1){
//     console.log('voilet')
// }
// else if(n%7==2){
//     console.log('Indigo')
// }
// else if(n%7==3){
//     console.log('Blue')
// }
// else if(n%7==4){
//     console.log('Green')
// }
// else if(n%7==5){
//     console.log('Yellow')
// }
// else if(n%7==6){
//     console.log('Orange')
// }
// else if(n%7==0){
//     console.log('Red')
// }

function magic(n){
    if(n%7==1){
        console.log('voilet')
    }
    else if(n%7==2){
        console.log('Indigo')
    }
    else if(n%7==3){
        console.log('Blue')
    }
    else if(n%7==4){
        console.log('Green')
    }
    else if(n%7==5){
        console.log('Yellow')
    }
    else if(n%7==6){
        console.log('Orange')
    }
    else if(n%7==0){
        console.log('Red')
    }
}

magic(143)
magic(456)


