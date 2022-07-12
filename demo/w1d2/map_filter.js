// map
const tempArr = [1,2,3,4,5]

let tempSquare=[]
for(let i =0; i<tempArr.length ;i++){
    tempSquare.push(tempArr[i] * tempArr[i])
}
console.log(tempSquare)

const squareArr = tempArr.map(element => element*element)
console.log(squareArr)
console.log(tempArr)

const shoppingList=[
    {itemName: "wetfood", price: 1.29, shop: "petco"}, 
    {itemName: "TV", price: 899, shop: "BestBuy"},
    {itemName: "chips", price: 3.29, shop: "Trader Joes"},
    {itemName: "air ticket", price: 1229, shop: "Expedia"},
    {itemName: "portugese tart", price: 3.99, shop: "Trader Joes"}
]



const itemsLong = shoppingList.map(function(item){
  return item.itemName
})
console.log(itemsLong)

const items = shoppingList.map((item)=> item.itemName )
console.log(items)

const onlyPrice = shoppingList.map((item)=> item.price )
console.log(prices)

// filter


const cheapItem = shoppingList.filter((item)=> item.price<5)
console.log(cheapItem)

const deleteIdx = 3
const deleteItem = shoppingList.filter((item, idx)=>idx != deleteIdx)
console.log(deleteItem)