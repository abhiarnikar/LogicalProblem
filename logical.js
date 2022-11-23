let names = ["abhijit","vishwajeet","ram","krushna"]

let max = names.reduce(function(acc,el){
    if(el.length>acc.length){
        return el
    }
    else{
        return acc
    }
}," ")

console.log(max)

let marks = [45,65,69,47,14,25,100]

let longest = marks.reduce(function(acc,el){
    if(el>acc){
        return el
    }
    else{
        return acc
    }
},marks[0])
console.log(longest)

let smallest = marks.reduce(function(acc,el){
    if(el<acc){
        return el
    }
    else{
        return acc
    }
},marks[0])
console.log(smallest)

let student = [
    {
        fullName:"abhijit arnikar",
        rollNo:31,
        marks:[45,65,36,44],
        isAdult:true,
        skills:["CSS","html"],
        city:"dharmpuri",
        birthYear:1991
    },
    {
        fullName:"ram arnikar",
        rollNo:02,
        marks:[45,65,36,44],
        isAdult:false,
        skills:["CSS","html"],
        city:"mumbai",
        birthYear:2020
    },
    {
        fullName:"kaivaly arnikar",
        rollNo:08,
        marks:[45,65,36,44],
        isAdult:false,
        skills:["CSS","html"],
        city:"pune",
        birthYear:2015
    }
]

let aa = student.filter(function(el,index,arr){
    return el.city === "pune"
}).forEach(function(el){
    console.log(el.fullName)
})

//name of those whose age is greater than 27

student.filter(function(el,index){
    return (2022-el.birthYear>27)
}).forEach(function(el){
    console.log(el.fullName)
})

//average age of all students

let average = student.reduce(function(acc,el){
    return acc+(2022-el.birthYear)
},0)/student.length

console.log(average)

//average marks of all students

let AvgMarks = student.reduce(function(acc,el){
    return acc+el.marks.reduce(function(acc,el){
        return acc+el
    },0)
},0)/student.length

console.log(AvgMarks)