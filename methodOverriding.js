//polymorphism

class Animal{
    constructor(name){
        this.name=name
    }
    eats(){
        console.log(this.name+' eat food')
    }
}

class Tiger extends Animal{

   eats(){
    console.log(this.name+' eat non-veg')
    super.eats()
   }
}

let AAA= new Tiger('Arjun')

AAA.eats()

