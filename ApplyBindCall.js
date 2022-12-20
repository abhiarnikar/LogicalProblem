let info1 = {
    firstName:'abhijit',
    lastName:'arnikar',
    display:function(hometown,state){
        console.log(this.firstName+' from '+hometown+' , '+state)
    }
}

let info2 = {
      firstName:'vishwa',
      lastName:'arnikar'
}

//call

// call method is used for function borrowing we can borrow function
// from other objects and use it with the data with some other objects

info1.display.call(info2, 'pune','Maharastra')

// or we can take other function 

let display1=function(hometown,state){
    console.log('welcome '+this.firstName+' from '+hometown+' , '+state)
}

display1.call(info2, 'Mumbai','Maharastra')

display1.call(info1, 'indore','MP')

// The only difference between the call and Apply method is
// that we passed the arguments

// In the call method we pass the argument individually 
// but in Apply method we pass argument in array list
console.log('************************')

display1.apply(info1,['indore','MP'])
display1.apply(info2,['Mumbai','Maharastra'])

// bind
// this method is gives a copy of a function which can use or invoke later

let aa = display1.bind(info1, 'indore','MP')
console.log(aa)
aa()