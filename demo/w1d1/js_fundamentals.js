// node vs browser js

// ECMA, SCOPE, HOISTING
// console.log(nickname);
//var nickname = "pepper" // outside the scope, globally accessible
// console.log(nickname);
        // step 1: var nickname
        // step 2: run line 4 (console.log)
        // step 3: assign nickname as "Pepper"
        // Step 4: conosle.log(nickname) -> pepper

function changeNickname(){
    nickname = "bad pepper"
}

changeNickname();
console.log(nickname)

// const(cannot be changed) vs let(can be changed) vs var
const ability = ["scratch Heidi", "eat" , "sleep"]//memory address
ability.push("becoming instagram famous")
ability.pop();
ability.pop();
ability[0] = "other abilities"

console.log(ability)

const pet ={
    nickname : "pepper",
    color: "white",
    ability : ["scratch Heidi", "eat" , "sleep"],
    isAlive : true
}
pet.nickname = "bad pepper"
console.log(pet)


// DESTRUCTURING
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623,
    "1" : "testing"
    };
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const firstName = person.firstName;
// const lastName = person.lastName;
// const email = person.email;


const {firstName, email, lastName, username, createdAt} = person // name matters, order doesn't matter
//console.log(firstName, lastName, email, username, password, createdAt) 
const [animal1, animal2, animal3, animal4, animal5] = animals // order matters, name doesn't matter
//  animals[0]    [1]      [2]     [3]      [4]

const [ , , , cat] = animals
console.log(cat)

console.log(animal1, animal2, animal3, animal4, animal5)
// const username = "heidi"
console.log(username) // heidi
console.log(person.username) // bob


const { username: newUsername } = person;
console.log(newUsername)


// REST/SPREAD

// ARROW FUNCTION (function & anonymous function)
function greet(name){
    console.log("Hi, "+ name)
}
const greet2 = (name) =>{
    console.log("Hi, "+ name)
}

function greetNoOne(){
    console.log("Hi, no one")
}

const greetNoOne2 = () =>{
    console.log("Hi, no one2")
}

greet2("Heidi")
greetNoOne2();


    
//TERNARY OPERATOR

