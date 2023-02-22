// 1) reverse the string
let word = "abhijit"
let rev = ''

for(let i=0;i<word.length;i++){
    rev= word[i]+rev
}
console.log(rev)

function info(str){
    let rev2 = ''
    for(let i=0;i<str.length;i++){
        rev2= str[i]+rev2
    }
    console.log(rev2)
}

info('vishwajeet')
info('sachin')

// 2) reverse the only string not the number

// let aa = "abhi123jit"
// let rev1 = ''

// for(let i=0;i<aa.length;i++){
//     if(! rev1.includes(321)){
//         rev1=aa[i]+rev1
//     }
// }
// console.log(rev1)
