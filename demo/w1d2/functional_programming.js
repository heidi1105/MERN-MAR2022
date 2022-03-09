// function intro
function one() {
    return 1;
  }
  function two( num ) {
    return num*2;
  }
  
  two(two(two(two(one()))))
// 1    //two(two(two(two(1))))
// 1*2 =2 // two(two(two(2)))
// 2*2 =4 // two(two(4)) 
// 2*4 =8 // two(8)
// 2*8 =16


// callback function
// setTimeout( ()=> { 
//     console.log("start") 
//   }, 300 );
      
//   console.log("end");
//   console.log("other functions")
  
const callbackMessage = (msg) =>{
    console.log(`Call back message: ${msg}`)
}  

const greeting = (person) =>{
    console.log(`Hi,  ${person}`)
} 

const parentFunction = callbackFunction =>{
    callbackFunction("Message from parent")
}
parentFunction(callbackMessage)
parentFunction(greeting)


// Object.freeze()
const arr = Object.freeze([1,2,3,4,5])


const shoppingList=Object.freeze([
    {itemName: "wetfood", price: 1.29, shop: ["petco", "amazon"]}, 
    {itemName: "new cable", price: 8.99, shop: ["BestBuy", "amazon"]},
    {itemName: "chips", price: 3.29, shop: ["Trader Joes"]},
    {itemName: "Air ticket to Japan", price: 800, shop: ["expedia"]}, 
    {itemName: "Ramen", price: 0.79, shop: ["Mitsuwa"]}
])

// adding an item - spread
const fancyShoppingList = [...shoppingList , 
    {itemName: "Fancy Jacket", price: 7900, shop: ["LV"]}
 ]

// adding an item - concat
const cheapShoppingList = shoppingList.concat([
    {itemName: "Cheap Jacket", price: 7.90, shop: ["Walmart"]}
])
console.log(cheapShoppingList)

// returning part of the array - slice
const catShoppingList = [...shoppingList.slice(0,2)]
console.log(catShoppingList)
console.log(shoppingList)

const japanShoppingList = [...shoppingList.slice(3)]
console.log(japanShoppingList)

// splice vs slice

//splice -- change the original array
const array=[1,2,3,4,5]; // const -- if it is array/object
console.log(array.splice(1,2)) // starting 1, for 2 items

//slice
const array2=[1,2,3,4,5]
console.log(array2.slice(1,2)); // starting at 1, ends at 2

console.log("----after-----");
console.log(array);
console.log(array2);


// map
const prices = shoppingList.map((item) => item.price)

const pricesFunction = shoppingList.map(function(item){
    return item.price
})

console.log(prices)
console.log(pricesFunction)

const items = shoppingList.map((item) => item.itemName)
console.log(items)

// filter
const cheapItems = shoppingList.filter((item) => item.price<10 && item.price>5)
console.log(cheapItems)

const amazonItems = shoppingList
                        .filter((item) => item.shop.includes("amazon"))
                        .map((item) =>({itemName: item.itemName, price: item.price}))
// console.log(amazonItems)

// sort 
const sortedItems = items.sort()
console.log(sortedItems)

const sortedPrices = prices.sort((a, b)=>a-b)
console.log(sortedPrices)

const sortedShoppingList = [...shoppingList].sort( (a, b) => a.itemName.toLowerCase() > b.itemName.toLowerCase() ? 1 : -1);
console.log(sortedShoppingList)
