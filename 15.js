// 1.Find char with heighest occurence in a given string
// 2.check if given substring is present in other string 
// 3.Find minimum number of steps to make product of all elements of array equal to 1.array=[-1,1,1,-1,-1,-1]


let a=['a','w','a','a','a','a',2,2,2,2,'@']
let m=new Map()
for(let i=0;i<a.length;i++){
    m.set(a[i],0)
}

for(let i=0;i<a.length;i++){
    let x=m.get(a[i])
    x++;
    m.set(a[i],x)
}

// console.log(m)

let ans=0
let char=''
for(let keys of m){
    if(keys[1]>=ans){
        ans=keys[1]
        char=keys[0]
    }
}

console.log(char)


function aa(a){
    let m=new Map()
    for(let i=0;i<a.length;i++){
        m.set(a[i],0)
    }
    for(let i=0;i<a.length;i++){
        let x=m.get(a[i])
        x++;
        m.set(a[i],x)
    }
    let ans=0
    let char=''
    for(let keys of m){
        if(keys[1]>=ans){
            ans=keys[1]
            char=keys[0]
        }
    }

    console.log(char)
}

aa([1,1,1,1,2,3])

//       012345678910
// let str='abcdefghijk'
// let sub='def'

// let n1=str.length
// let n2=sub.length
// let x=str.indexOf(sub)
// console.log(x)


let str='abcdefghijk'//n1=11
let sub='abcde'//n2=5
let an=0
let n1=str.length,n2=sub.length
for(let i=0;i<=n1-n2;i++){
    let s=''// s[i]+s[i+1]+s[i+2]
    for(let j=0;j<n2;j++){
        s+=str[i+j]
    }
    if(sub==s){
        an=1;
        break
    }
}
if(an==1){
    console.log('Yes')
}
else if(an==0){
    console.log('No')
}

function xx(str,sub){
    let an=0
    let n1=str.length,n2=sub.length
    for(let i=0;i<=n1-n2;i++){
        let s=''
        for(let j=0;j<n2;j++){
            s+=str[i+j]
        }
        if(sub==s){
            an=1;
            break
        }
    }
    if(an==1){
        console.log('Yes')
    }
    else if(an==0){
        console.log('No')
    }
}

xx('science','ienc')
xx('science','iec')