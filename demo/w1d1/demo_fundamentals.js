// node vs browser js

// ECMA

// intepreted language: scope & hoisting 
// global variable, local variable

var cat = "pepper"; // globally accessable
function changeName(){
    cat = "bad pepper"; //(without var, temp will get reassigned)
    var cat = "another cat"; // create another variable called temp
    console.log(cat);
}
console.log(cat);
changeName();
console.log(cat);

// hoisting


// variables (const vs let)
// const(cannot be changed) vs let(can be changed) vs var
const trips = ["Japan","Norway","Peru","Spain"] //store the memory address
// push and pop

const post = {
    title: "Best 30 days in Japan",
    viewers: 3000,
    creator: "Heidi",
    likes: 10,
    description: "A lot of good food!"
}

// destructuring
//const {title, viewers, creator} = post
const [, , thirdPlace] = trips


const {title, ...details} = post;
console.log(details)

const postCopy = {...post}

console.log(postCopy)

// CALL BACK FUNCTIONS
// ARROW FUNCTIONS

function printHello(){
    console.log("Hello")
}

const printHelloArrow = () =>{
    console.log("Hello")
}

const printHelloArrow2 = () => console.log("Hello")



function changePrice(price, discount){
    return price * discount;
}

const changePrice2 = (price, discount) =>{
    return price * discount;
}

// shorthanded arrow function
const changePrice3 = (price, discount) =>( price * discount) //without {}, it is an implicit return statement

console.log(changePrice(200, 0.6))
console.log(changePrice2(200, 0.6))
console.log(changePrice3(200, 0.6))

const prices = [200,42,50,80,120]

// ternary operators
const rating =10
if(rating> 5){
    console.log("good movie")
}else{
    console.log("bad movie")
}
// if...else
rating>5?console.log("good movie"):console.log("bad movie")

// if...
rating>5&& console.log("We should watch this movie")


const movieComment = (title,rating) =>{
    return rating>5?
        title+" is a good movie":title+" is a bad movie"
}
console.log(movieComment("Dr. Strange", 8))





// if it is over $200, the max discount is $20. Else, 20% off
const discountedPrices = prices.map(function(price){
    if(price >=100){
        return price-20;
    }else{
        return price*0.8
    }
})


const discountedPrices2 = prices.map((price)=>{
    price >=100?price-20:price*0.8
})

console.log(discountedPrices)