
// function rev(a){
//     let x=a.length
//     for(let i=0;i<=x/2;i++){
//         let temp=a[i]
//         a[i]=a[x-i-1]
//         a[x-i-1]=temp
//     }
//     console.log(a)
// }

// let x=[23,43,45,8,43]
// rev(x)

//     0   1  2 3  4
    //  i          j
let x=[23,43,45,8,43]
let n=x.length
for(let i=0,j=n-1;i<=n/2,j>=n/2;i++,j--){
    let t=x[i]
    x[i]=x[j]
    x[j]=t
}
console.log(x)

function rev1(z){
    let m=z.length
    for(let i=0,j=m-1;i<=m/2,j>=m/2;i++,j--){
        let t=z[i]
        z[i]=z[j]
        z[j]=t
    }
    return z
}
let f=rev1([23,1,5,3,2,90])
let g=[64,2,-23]
console.log(f)
console.log(rev1(g))