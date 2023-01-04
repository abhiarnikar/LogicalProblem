// 1) reverse the string
let word = "abhijit"
let rev = ''

for(let i=0;i<word.length;i++){
    rev= word[i]+rev
}
console.log(rev)

// 2) count the each element in that string

let count = []
for(let i=0;i<word.length;i++){
   if(count[word[i]]){
    count[word[i]]=count[word[i]]+1
   }
   else{
    count[word[i]]=1
   }
}
console.log(count)