// if
// operators   (<, >, <=, >=, ==, ===, !=,)
// const temparature = 87

// if(temparature < 50){
//     console.log("temparature is less than 50");
    
// }else{
//     console.log(" greater than 50");

// }

// scope 

// const score =200
// if(score > 100){
//     let power = "fly" 
//     // when we use let keyword or const that time its not accesible out side of the scope
//     console.log(`user power : ${power}`);
    
// }
// console.log(`user power : ${power}`);
// const score =200


// const score =200
// if(score > 100){
//     var power = "fly" 
//     // when we use var keyword that time its accesible out side of the scope
//     console.log(`user power : ${power}`);
    
// }
// console.log(`user power : ${power}`);

// Short hand notation

// const balance = 1000
// // if(balance >500) console.log("test"); 
//  // use when we need to check only two condition

// if(balance < 500){
//     console.log("less than 500");
    
// }else if(balance < 750){
//     console.log("less than 750");
    
// }else if(balance < 900){
//     console.log("less than 750");
    
// }else {
// console.log("less than 1200");
// }

// this code is use when we run multiple condition

const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedin && debitCard ){  // ye and ke liye use hota hai
    console.log("allow to buy course"); 
    // for "and" condition we can use two times ampercent in one condition (userLoggedin && debitCard && creditCard ) like this.
    
}
if (loggedInFromGoogle||loggedInFromEmail){   
    //we can check multiple or also || this is called pipe its use for or symbol
    console.log("user logged in");
    
}
