
// method overloading
function addNumber(a,b,c,d){
    console.log('method with 4 parameters')
}

function addNumber(a,b){
    console.log('method with 2 parameters')
}

function addNumber(a,b,c){
    console.log('method with 3 parameters')
}

addNumber(12,25,36,36)

// function overloading is not happening in javascript
// because in javascript browser takes Top to Down Approach
// so that first two functions is discarded so third function is printed


