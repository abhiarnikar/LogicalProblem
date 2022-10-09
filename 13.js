// reverse a number 
//     01234
// let a='Today'
// let n=a.length
// for(let i=0;i<=n/2;i++){
//     let z=a[i]
//     a[i]=a[n-i-1]
//     a[n-i-1]=z
// }
// console.log(a)

// reverse a sentence 
// copy('star')
// let r='star is big'
// let f=r.split('')
// f.reverse()
// console.log(f)

// let g=f.join('')
// console.log(g)


// reverse a number 

// 1234
// 4321
/*
1000+//1*10^3
 200+// 2*10^2
  30+// 3*10^1
   4// 4*10^0
*/



// let num=1234
// let h=num
// let k=0//3
// while(num>1){
//     num=num/10
//     num=Math.floor(num)
//     k++
// }
// console.log(k)
// // 4000
// let dd=0
// while(h>0){
//     let r=h%10//4
//     let t=10**k
//     r=r*t
//     dd+=r
//     k--
//     h=h/10
//     h=Math.floor(h)
// }
// console.log(dd)


// function rev(m){
//     let h=m
//     let kk=0//3
//     while(m>1){
//         m=m/10
//         m=Math.floor(m)
//         kk++
//     }
//     kk--
//     console.log(kk)
//     let dd=0
//     while(h>0){
//         let r=h%10//4
//         let t=10**kk
//         r=r*t
//         dd+=r
//         kk--
//         h=h/10
//         h=Math.floor(h)
//     }
//     console.log(dd)
// }

// rev(99876)

//          012345
// Convert '4a2b3c' to 'aaaabbccc'
let s='4a2b3c7z'
let d=''
let l=''
let final=''

for(let i=0;i<s.length;i++){
    if(i%2==0){
        d+=s[i]
    }
    else if(i%2==1){
        l+=s[i]
    }
}
for(let i=0;i<d.length;i++){
    let r=d[i]
    while(r>0){
        final+=l[i]
        r--
    }
}

console.log(final)