// //// filter out numbers from given string 
// let s='123@&uh$iu./?p0'
// let f=''
// for(let i=0;i<s.length;i++){
//     if(Number(s[i])||s[i]=='0'){
//         f+=s[i]
//     }
// }
// console.log(f)

// function isNum(n){
//     let f=''
//     for(let i=0;i<n.length;i++){
//         if(Number(n[i])||n[i]=='0'){
//             f+=n[i]
//         }
//     }
//     console.log(f)
// }

// let ss='2l(8*^%$lk1290'
// isNum(ss)


// // filter out characters from given string 


// let z='123@&Wuh$iCFou./?p0'

// let y=''
// let g=''
// // for(let i=0;i<z.length;i++){
// //     if((z[i]>='a'&&z[i]<='z')){
// //         y+=z[i]
// //     }
// //     else if((z[i]>='A'&&z[i]<='Z')){
// //         g+=z[i]
// //     }
// // }
// let i=0
// while(i<z.length){
//     if((z[i]>='a'&&z[i]<='z')){
//         y+=z[i]
//     }
//     else if((z[i]>='A'&&z[i]<='Z')){
//         g+=z[i]
//     }
//     i++
// }
// console.log(y,g)
// //a....z
// // A...Z

let sss=[1,1,3,4,3,3,2,2,23,6,6,5]
let m=new Map()
for(let i=0;i<sss.length;i++){
    m.set(sss[i],0)
}
// console.log(mm)
for(let i=0;i<sss.length;i++){
    let r=m.get(sss[i])
    r++
    m.set(sss[i],r)
}
console.log(m)


let arr=['abc','xyz','qwe','abc','abc','abc','xyz']
let mm=new Map()// {1,2}

for(let i=0;i<arr.length;i++){
    mm.set(arr[i],0)
}
// console.log(mm)
for(let i=0;i<arr.length;i++){
    let r=mm.get(arr[i])
    r++
    mm.set(arr[i],r)
}
console.log(mm)

/// .......................................
function alpha(a){
    let mm=new Map()// {1,2}

    for(let i=0;i<a.length;i++){
        mm.set(a[i],0)
    }
    // console.log(mm)
    for(let i=0;i<a.length;i++){
        let r=mm.get(a[i])
        r++
        mm.set(a[i],r)
    }
    console.log(mm)

}

alpha(['a','a','a','d','dre','wer','wer','wer',12,12,12,'@','@'])