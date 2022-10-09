// 1.Find minimum number of steps to make product of all elements of array equal to 1.array=[-1,1,1,-1,-1,-1]
// 2.Given an initial position say x(number located on a number line) and n steps , if the ith step is even ,move x to left by i units and if odd then move x to right by i units . Likewise find position of x after n steps .1<=i<=n.

///    0 1 2 3  4  5  6 7  8
let a=[1,1,1,1,1]


// -1 -1 -1 1 1 1
// -1 -1 -1 
// let ans=0;
// let minus_one=0
// let one=0
// for(let i=0;i<a.length;i++){
//     if(a[i]==-1)minus_one++
//     else if(a[i]==1)one++
// }
// if(minus_one%2!=0){
//     if(one==0){
//         ans=-1
//     }
//     else if(one>0){
//         ans=1
//     }
// }
// else if(minus_one%2==0){
//     ans=0
// }

// if(ans==-1){
//     console.log('Not possible')
// }
// else if(ans==0){
//     console.log(0)
// }
// else if(ans==1){
//     console.log(1)
// }


                              
// -5 -4 -3 -2 -1 0 1 2 3 4 5 6

// n=5  1 2 3 4 5

let x=4//pos
let n=2//steps
for(let i=1;i<=n;i++){
    if(i%2==0){
        x-=i
    }
    else if(i%2==1){
        x+=i
    }
}

console.log(x)

function game(pos,steps){
    for(let i=1;i<=steps;i++){
        if(i%2==0){
        pos-=i
        }
        else if(i%2==1){
            pos+=i
        }
    }
    
    console.log(pos)
}
game(0,3)
game(100,300)
