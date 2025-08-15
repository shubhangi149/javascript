//Singleton.
// iska mtlb koi bhi object hm agr constructor se bnaye usko singleton bolte hai


//** How to create object */
//type-1
// object.create // ye trika hota hai jo constructor ke through object bnata hai.

// object Literals
// declare symbol
const mysym = Symbol("key1")

//type-2
const jsUser ={
    name:"shubhangi",
    // declare symbol into object
    mysym:"key1", // we are not using symbol like key format directly this is a wrong syntax and its type is "string"
    [mysym]:"key1", // this is correct syntax to declare symbol in object
    age:23,
    location:"nashik",
    EmailId:"shubhs@gmail.com",
    isLoggedin:false,
    lastLoggedin:["saturday", "monday"]
}

// How to access object value
// console.log(jsUser.name); // this is wrong way to access value of object
// console.log(jsUser["name"]);//this is correct way to access value of object

// console.log(jsUser[mysym]);
// console.log(typeof mysym);

// how to change value in object

jsUser.EmailId = "shubhangi@gmail.com"
//console.log(jsUser.EmailId);

// agr aap chahe ki kisi value ko koi chnage na kr ske to usko lock bhi kr skte hai freeze use krke
//Object.freeze(jsUser)
jsUser.EmailId = "shubhu@gmail.com"
//console.log(jsUser.EmailId);

//console.log(jsUser);

jsUser.greetings = function(){
    console.log("hello jsUser");
}
    
    console.log(jsUser.greetings());


    jsUser.greetings2 = function(){
    console.log(`hello jsUser,${this.name}`);
    
}
console.log(jsUser.greetings2());






