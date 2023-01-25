let date = new Date()
date.setDate(date.getDate()+365)
let year = date.getFullYear()
let month = date.getMonth()+1
let daydate = date.getDate()

// console.log(daydate)
// console.log(month)
// console.log(year)

let finalFormat = daydate+'-'+month+'-'+year

// we can change the above format by altering

console.log(finalFormat)
