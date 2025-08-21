// const userEmail = []

// if (userEmail){
//     console.log("got user email");
// } else{
//     console.log("we dont have user email");    
// }

// falsy value
// 0, -0, false, BigInt 0n, "", null, undefined, NaN 
// "0", "false", " ", [], {}, function(){}.

// if(userEmail.length ===0){
//     console.log("Array is empty");
    
// }

// const myObject = {}
// if(Object.keys(myObject).length ===0){
//     console.log("empty object");
// }
// false == 0 -->true
//false == ""-->true
// 0 == ""-->true



//nullish coalescing operator (??): null, undefined

//let val1;
// val1 = 5?? 10 // 5
// val1 = null ?? 10  //10
// val1 = undefined ?? 10 //10

// console.log(val1);

// ternary operator

// syntax //condition ? true : false

const iceTeaPrice = 60
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");

