// Exception Handling
// An Exception is generalization of concept of error to include
// any unexpected condition occure during the execution

// 1st Example

// setTimeout(()=>{
//       console.log('first Attempt')
// },1000)

// console.log(Abhijit)
// setTimeout(()=>{
//     console.log('second Attempt')
// },2000)

// setTimeout(()=>{
//     console.log('Third Attempt')
// },3000)

// in the above example it gives error at the line no 11 so code can't executed after 
// 1st settimeout to overcome this problem we apply try and catch method
// look at second example

// try catch syntax allows us to catch errors so that script instead of dying
// can do something more reasonable

// in this first code in the try is executed
// if there is no error then catch is ignored else catch is executed

// 2nd Example

setTimeout(()=>{
    console.log('first Attempt')
},1000)

try {
    console.log(Abhijit)
} catch (error) {
    console.log('Hello Abhijit')
}

setTimeout(()=>{
  console.log('second Attempt')
},2000)

setTimeout(()=>{
  console.log('Third Attempt')
},3000)
