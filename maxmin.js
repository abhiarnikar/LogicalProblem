//find max and min element of array
let a= [12,25,65,45,11,36]

let max=a[0]
let min=a[0]

for(let i=0;i<=a.length;i++){

    if(max<a[i]){
        max=a[i]
    }
    if(min>a[i]){
        min=a[i]
    }
}
console.log(max,min)

function maxmin(a){
    let max=a[0]
    let min=a[0]
    n=a.length
    for(let i=0;i<=a.length;i++){

        if(max<a[i]){
            max=a[i]
        }
        if(min>a[i]){
            min=a[i]
        }
    }
    console.log(max,min)

}
maxmin([36,45,87,59,34,11,23])
maxmin([78,69,25,23,17,65])

for(let i=0;i<=a.length;i++){

    if(max<a[i]){
        max=a[i]
    }
    if(min>a[i]){
        min=a[i]
    }
}
console.log(max,min)

// Find pair of elements in array with sum equal to k
//     0 1 2 3 4 5
let z=[4,6,5,7,3,1]

let k=10
let ii=undefined,jj=undefined
for(let i=0;i<z.length;i++){
    for(let j=0;j!=i,j<z.length;j++){
        if(z[i]+z[j]==k){

            ii=i
            jj=j
            break;

        }
    }
}

console.log(ii,jj)
//Can a given array be made strictly increasing or not(based on current elements)

let d=[1,2,5,5,5,55,6,6,7]
let f=[7,5,4,1]

let s=new Set(d)
if(s.size==d.length){
    console.log('Yes')
}
else{
    console.log('No')
}

