let a = "4a3b2c1d"
let result = ""

console.log(Number("4"))

//REpeat method in string

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

for(let i =0;i<a.length;i++){
    if(Number(a[i])){
        for(let j=0;j<Number(a[i]);j++){
            result=result+a[i+1]
        }
    }
}
console.log(result)

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