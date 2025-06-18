// let obj={
//     a:1,
//     b:"Mayukh"
// }

// console.log(obj)


// let animal={
//     eats:true
// }

// let rabbit={
//     is:true
// }

// rabbit.__proto__=animal;//used for inheritance


class Animal{
    constructor(name){
        this.name=name 
        console.log("Object is created....")        
    }

    eats(){
        console.log("Is eating...")
    }

    jumps(){
        console.log("Is jumping...")
    }
}


class Lion extends Animal{
    constructor(name){
        super(name)//runs a method of a super class
        console.log("Object is created and this is a lion...")
    }

    //Method overloading
    eats(){
        super.eats()
        console.log("The lion is eating...")
    }
}

let a=new Animal("Mayukh");
console.log(a)

let l=new Lion("Sher")
console.log(l   )