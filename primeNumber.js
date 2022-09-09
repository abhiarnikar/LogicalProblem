//check if number is prime number
// 2 3 5 7 11 13 
function prime(n){
    let c=0
    for(let i=2;i<n;i++){
        if(n%i==0){
            c=1
            break
        }
    }
    if(c==1){
        console.log('NO')
        return false
    }
    else{
        console.log('Yes')
        return true
    }
}

prime(10)
prime(9)
prime(3)