let a = "4a3b2c1d"
let result = ""

console.log(Number("4"))

//REpeat method in string

// 1st Method

let jkl = "a".repeat(5)
console.log(jkl)
let bb = "g".repeat(6)
console.log(bb)

for(let i=0;i<a.length;i++){
    if(Number(a[i])){
        result=result+a[i+1].repeat(Number(a[i]))
    }

}
console.log(result)

// 2nd Method
for(let i =0;i<a.length;i++){
    if(Number(a[i])){
        for(let j=0;j<Number(a[i]);j++){
            result=result+a[i+1]
        }
    }
}
console.log(result)

// example 2
let b = 'p4q3r2s1'
let xx = ''

for(let i=0;i<b.length;i++){
    if(Number(b[i+1])){
        xx = xx+b[i].repeat(Number(b[i+1]))
    }
}
console.log(xx)

let k= {}
let name = "abhijitdevayniouue"

for(let i=0;i<name.length;i++){
    if(name[i]=="a"||name[i]=="e"||name[i]=="i"||name[i]=="o"||name[i]=="u"){
        if(k[name[i]]){
            k[name[i]] = Number(k[name[i]])+1
        }
        else{
            k[name[i]]=1
        }
    }
}
console.log(k)