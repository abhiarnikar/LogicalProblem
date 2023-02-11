function word(str){
    let palindrome = str.split('').reverse().join('')
    console.log(str === palindrome)
}
word('madam')
word('rotator')
word('abhi')

// reverse the string but not word
let info = 'my name is abhijit' // output=> abhijit is name my

let aa = info.split(' ').reverse().join(' ')
console.log(aa)

// reverse the string with function

function greet(str){
    let rev = ''
    for(let i=0;i<str.length;i++){
        rev= str[i]+rev
    }
    console.log(rev)
}
greet('kaivaly')
