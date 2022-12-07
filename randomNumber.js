
//How to print random numbers from 50-100

let x = Math.floor(Math.random()*(100 - 50+1)) +50

console.log(x)

function randomNo(max,min){

    console.log(Math.floor(Math.random()*(max - min+1)) + min)
}
randomNo(25,15)

