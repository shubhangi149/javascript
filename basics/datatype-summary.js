//primitive

//7 types : String, Number, boolean, null, Undefined, Symbol, BigInt.
// let num = Number("g")
// console.log(typeof num);
// let str1 = String(num)
// console.log(typeof str1,str1);

const score = 100 //number
const scoreValue = 200.6 // number
const isLoggedIn = true //boolean
const outsideTemp = null // object
let userEmail; //undefined
const id = Symbol("123") // symbol
const anotherId = Symbol("123") //symbol
const bigNumber = 2345678923456789456789087654n //bigint
//console.log(typeof bigNumber);
//console.table([score,scoreValue, isLoggedIn,outsideTemp, userEmail,bigNumber])
//console.log(id===anotherId);

// reference // non-primitive

//Array, Object, Function

const heros = ["shktiman", "doga", "dora", "shiva"] //arrays  (type object)
const info =
{
    name: "shubh",
    age:23 ,                      //object
}

const myFunction = function(){
    console.log("hello world");    //function
    
}

//console.log(typeof myFunction);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory types

// Stack(primitive)
// Heap(non-primitive)

// jitne primitive datatype hai usme stack memory use hoti hai, stack memory jab use hoti hai tab variable ka copy milta hai

// jitne bhi non primitive datatype hai usme heap memory use ki jati hai, jab heap memory use ki jati hai to value ka original reference milta hai

let myName ="shubhangi"
let anothername = myName
anothername = "mohini"

console.log(myName);
console.log(anothername);

let userOne = {
    email:"sdf123@gmail.com",
    upi: "user@ybl"

}

let userTwo = userOne
userTwo.email = "shubh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);






