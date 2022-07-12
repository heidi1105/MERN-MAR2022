class Developer{
    constructor(name){
    	this.name=name
    	this.health=100
    	this.mood = 100
    	this.abilities=[]
    }

    sleep(){
    	console.log("Sleeping.......")
    	this.health += 10;
    }

    completeProject(language){
      console.log("Completing a " + language+ " project! Awesome!!")
      this.abilities.push(language)
      this.health-= 20
      this.mood += 30
    }

    eat(item){
      if(item instanceof Food){
        console.log("Eating "+ item.itemName)
        this.health += 20
      }
      else if(item instanceof Toy){
        console.log("Eating "+ item.itemName)
        this.health -=50
      }
      else{
        throw new Error("Item must be an item!")
      }
    }
}



class Item{
  constructor(itemName, price =5){
    this.itemName = itemName
    this.price = price
  }
}

class Toy extends Item{
  constructor(itemName, price){
    super(itemName, price)
  }
}

class Food extends Item{
  constructor(itemName, price){
    super(itemName, price)
  }
}

const dev1 = new Developer("Heidi")
console.log(dev1)
dev1.sleep()
dev1.completeProject("JavaScript")
dev1.completeProject("Java")
console.log(dev1)

const dev2 = new Developer("John")
const steak = new Food("Steak", 100)
//const lego = new Toy("Lego", 399)

dev1.eat(steak)
dev1.eat(lego)
dev1.eat(dev2)
