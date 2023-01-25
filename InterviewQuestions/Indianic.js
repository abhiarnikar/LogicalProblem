
// Problem No 1
// function sayHI()
// {
//     console.log(name);
//     console.log(age);

//     var name = 'Rohit';
//     let age = 21;

// }
// sayHI();

// A Rohit and undefined
// B Rohit and 21
// C ReferenceError and undefined
// D undefined and ReferenceError --> This is the Answer

// Problem 2
console.log(8 + "9")

// Problem 3

// We want to output in this form

// *
// **
// ***
// ****
// *****

for(let i=1;i<=5;i++){
    let a = ''
    for(let j=1;j<=i;j++){
        a+='* ' // a=a+'* '
    }
    console.log(a)

}



// Problem 4
// What is callBack Hell

// The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell.
// The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”.
// It makes the code very difficult to understand and maintain.

// Example
// runDirection(100,'Top',function(){
//     runDirection(200,'right',function(){
//         runDirection(300,'left',function(){
            
//         })
//     })
// })