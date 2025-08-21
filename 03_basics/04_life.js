//immediately invoked function expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()
// it's a simple function

(function chai(){
    //named iife
    console.log(`DB CONNECTED`)     //its a iife 
}) ();
// do iife eksath likhna hai to semicolo dena hota hai

// global scope ke pollution se problem hoti hai khi bar jo vo global scope ke jo variable hai uske 
// pollution ko htane ke liye hm IIFE ka use krte hai

(
    (name) => {
    console.log(`DB CONNECTED ${name}`);     //its a iife 
}) ("shubhangi");



