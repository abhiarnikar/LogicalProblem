// 1.4a3b2c-->aaaabbbcc
//2 .armstrong number 
//3. In an unsorted array ,let index of element x be i, find index of x after sorting.

//     012345
// let s='4a3b2c'
// let s='4v3u7s9q'
// let final=''//aaaabbbcc
// for(let i=0;i<s.length;i+=2){
//     let x=Number(s[i])
//     while(x>0){
//         final+=s[i+1]
//         x--
//     }
// }

// console.log(final)

// function zxc(s){
//     let final=''
//     for(let i=0;i<s.length;i+=2){
//         let x=Number(s[i])
//         while(x>0){
//             final+=s[i+1]
//             x--
//         }
//     }
//     console.log(final)

// }

// zxc('4d9o0l8c')



//----------------------


// 153  -->1^3 + 5^3 + 3^3


let num=153
let sum=0
let m=num
while(m>0){
    let r=m%10
    sum+=r**3
    m=Math.floor(m/10)
}

if(sum==num){
    console.log('Armstrong number')
}
else{
    console.log('Not an armstrong number ')
}


// function check(n){
//     let sum=0
//     let m=n
//     while(m>0){
//         let r=m%10
//         sum+=r**3
//         m=Math.floor(m/10)
//     }

//     if(sum==n){
//         console.log('Armstrong number')
//     }
//     else{
//         console.log('Not an armstrong number ')
//     }
// }

// check(123)
// check(153)

// In an unsorted array ,let index of element x be i, find index of x after sorting


function sort(a){
    let n=a.length
    for(let i=0;i<n;i++){
        for(let j=0;j!=i,j<n;j++){
            if(a[i]<=a[j]){
                let tmp=a[i];
                a[i]=a[j]
                a[j]=tmp
            }
        }
    }
    return a
}
// let f=sort([1,6,3,8])
// console.log(f)


let arr=[3,5,4,11,10,5,9,87,6]
let x=13

let arr2=sort(arr)
let ans=-1
for(let i=0;i<arr2.length;i++){
    if(arr2[i]==x){
        ans=i
        break
    }
}
console.log(arr2)
if(ans!=-1)[
    console.log(ans)
]
else if(ans==-1){
    console.log('Not found')
}