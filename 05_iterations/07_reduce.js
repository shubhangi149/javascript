const myNums = [1,  2, 3,]
const myTotal = myNums.reduce(function(acc, currvalue){
    //console.log(`acc: ${acc} and currval: ${currvalue}`);
    
    return acc + currvalue
},3)
//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },

     {
        itemName: "py course",
        price: 3999
    },

     {
        itemName: "java course",
        price: 4999
    },

     {
        itemName: "ruby course",
        price: 5999
    }

]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(priceToPay);
