let numbers = [11,54,65,84,44,64,11,25,66,11]
let count = 0
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===11){
        count=count+1
    }
}
console.log(count)

let word = ['a','b','h','i','j','i','t']
let result = []

for(let i=0;i<word.length;i++){
    if(result[word[i]]){
        result[word[i]]=result[word[i]]+1
    }
    else{
        result[word[i]]=1
    }
}
console.log(result)

let numbers1 = {
    a:9,
    b:8,
    c:5
}

for(let key in numbers1){
    numbers1[key]= numbers1[key]*numbers1[key]
}
console.log(numbers1)

let a = [44,65,36,14,25,36,47,98]
let even = 0
let odd = 0

for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        even = even+1
    }
    else{
        odd= odd+1
    }
}
console.log(even)
console.log(odd)

