//why cypress is Asynchronous give one example of Asynchronous


// in Asynchronous-when client make request to the server he does not need to wait
// until he gets the response which means asynchronous call doesnt blocks the client 
// until operation completes

// Example

// console.log('statement1')
// setTimeout(() => {
//     console.log('statement2')
// }, 1000)
// console.log('statement3')
// console.log('statement4')

// In the above example we can see that statement3 statement4 is executed
// after statement1 because statement2 is wait for 1ms 

// Problem One
let bb = [
    {
        "name": "15five"
    },
    {
        "name": "atlassiancloud"
    },
    {
        "name": "bitwarden"
    },
    {
        "name": "bitwarden"
    }
]


function json(obj, name) {

    var cc = obj.filter(function (el) {

        return el.name = name
    })

    return cc
}
let aa = json(bb, '15five')

console.log(aa[0])


// Problem 2

//Given an array count the number of leader element
//leader element that is grater element all the element in left side
A = [2, 5, 3, 4, 17, 16]

//Ans:=[2,5,17]
function max(array) {
    let highest = 0
    for (let i = 0; i < A.length; i++) {
        
        if (A[i] > highest) {
            highest = A[i]
            console.log(highest)
        }

    }
    
}
max(A)