



class Pet{
    constructor(nickname, age){
        this.nickname = nickname
        this.age = age
        this.health = 100
        this.abilities = ["sleep", "eat", "breathe", "being cute"]
    }
    
    sleepArr = () =>{
        console.log("testing")
    }

    sleep(){
        this.health +=5
        // console.log(this.nickname + " is sleeping1")
        console.log(`${this.nickname} is sleeping`)
    }

}

const pikachu = new Pet("pikachu", 25)
console.log(pikachu)
pikachu.sleep()

// inheritance
class Cat extends Pet{
    constructor( nickname, age){
        super(nickname, age)
        this.health = 200
        this.mood = "grumpy"
    }

    meow(){
        console.log("MEOWWWWWWWWWWW")
        super.sleep()
    }

    eat(item){
        if(item instanceof Food){
            console.log(`${this.nickname} is eating ${item.itemName}` )
            this.health += item.energy
        }
        else if(item instanceof Toy){
            console.log(`OMG!!! ${this.nickname} is eating ${item.itemName}`)
            this.health -= item.energy
        }else{
            throw new Error( "Item must be food/toy!" );
        }
    }

    
}

const pepper = new Cat("Pepper" , 13)
console.log(pepper)
pepper.meow()
console.log(pepper)

class Item{
    constructor(itemName, energy){
        this.itemName = itemName
        this.energy = energy
    }    
}

class Food extends Item{
    constructor(itemName, energy){
        super(itemName, energy)
    }
}

class Snack extends Food{
    constructor(itemName, energy){
        super(itemName, energy)
    }
}

class Toy extends Item{
    constructor(itemName, energy){
        super(itemName, energy)
    }
}

const fish = new Food("fish", 10)
const chips = new Snack("chips", 5)
const cable = new Toy("cable", 20)

pepper.sleepArr()
console.log(pepper)