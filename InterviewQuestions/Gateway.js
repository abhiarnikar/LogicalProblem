// Write a Javascript function to count the occurrence of a substring in a string. 

// Test Data : 

// String:- “Welcome to the Michelin interview. Best of luck to you
// Substring:- “to” 
// Output : 2

let String = "Welcome to the Michelin interview Best of luck to you"

// Substring:- “to” 
// Output : 2

function greet(str){
  
  let arr =str.split(' ')
  
  console.log(arr)
  let count=0
  
  for(let i=0;i<arr.length;i++){
    
    if(arr[i]=='to'){
      count=count+1
    }
  }
  console.log(count)
}

greet(String)


// Problem 2

// console.log("Starting Script") // 1

// setTimeout( () => {

// console.log("3 seconds pause") // 4

// },3000)

// setTimeout( () => {
// console.log("1 second pause") // 3

// },1000)

// console.log("Script end") // 2



// Problem 3


// console.log("Starting Script") // 1

// setTimeout( () => {

//   console.log("3 seconds pause") // 3

// },0)

// setTimeout( () => {

//   console.log("1 second pause") // 4

// },0)

// console.log("Script end") // 2


// Question- What if we pass two arguments to Rest parameter to function

// last parameter is get into the array

function abhi(firstname,...names){
  console.log(firstname)
  
  console.log(names)
}

abhi('abhijit','ram','kaivaly','krushna')

