
for(let i=1;i<=5;i++){
    let a=''
    for(let j=1;j<=i;j++){
      a=a+'* '
    }
    console.log(a)
}

console.log('======================')

for(let i=5;i>=1;i--){
    let a = ''
    for(let j=1;j<=i;j++){
        a=a+'* '
    }
    console.log(a)
}

console.log('======================')


arr2 = [6,7,8,9,10,45,65,87,14]

let aa = arr2.sort(function(a,b){
    return b-a
})

console.log(aa)

function max(array){
    let largest =0
    for(let i=0;i<array.length;i++){
        if(array[i]>largest){
            largest=array[i]
        }
    }
    console.log(largest)
}
max(arr2)

