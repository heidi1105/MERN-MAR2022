// revision const & let
for(let i =0 ;i<10; i++){
//    console.log(i)
}

// destructuring (recap)
const pet = {
    nickname: "Pepper",
    color: "white",
    age: 13
}

const nickname = "Heidi"
const {nickname : petname} = pet 
//const petname = pet.nickname
console.log(nickname)
console.log(petname)

const ability = ["code", "break some codes", "having another typo"]
const [, , a3] = ability
console.log(a3)


// rest/spread (...)
const petCopy = { ...pet, age:100, health:100 }
//console.log(petCopy)

const abilityCopy = ["spot the difference", ...ability, "pass student's exam"]
//console.log(abilityCopy)


// arrow function
function printHello(){
    console.log("Hello")
}

const printHelloArrow = () =>{
    console.log("Hello")
}

const printHelloArrow2 = () => console.log("Hello")
printHelloArrow2()

function add(a, b){
    return a+b
}

const add2 = (a, b) =>(a+b) //without {}, it is an implicit return statement

console.log(add2(3,5))



// ternary operator
const price = 59

if(price < 50){
    console.log("We should buy it")
}else{
    console.log("Too expensive")
}

// if... else (conditon?yes : no)
price<50?console.log("We should buy it"):console.log("Too expensive")

const canAfford = (price) =>{
    return price<50?
        "cheap": "expensive"
}

console.log(canAfford(price))

// if??????
const price2 = 1.99
price2<10  && console.log("It's cheap")

