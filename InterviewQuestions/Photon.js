
function select(a){
    console.log('abhijit '+a)
}
select(7)


function add(a,b){
    return a+b
}

let aa = add(12,13)
console.log(aa)
console.log(typeof(aa))

let city = "pune"

switch (city) {
    case "pune":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    default:
        console.log("incorrect city name")
}
console.log('******************')
// in above switch case it checks for every condition and gives the all output
// so to overcome to above problem we use break function

switch (city) {
    case "pune":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city name")
}
