
// lexical Scope

// Any inner function can have access to its outer scope variable

function add() {
    let a = 10
    let b = 5

    console.log(a+b)

    function addition(){
        console.log(a+b)
    }
    addition()
}
add()

// Closure

//closure is an inner function that has access to the outer functions variables

//for every closure that has three scope
// 1 Local scope
// 2 Outer functions scope
// 3 Global Scope

// Example

function outer(){
    let a =10
    function inner(){
        let b =5
        console.log(a+b)
    }
    return inner
}
let out = outer()
out()
