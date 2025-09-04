 const coding =["js", "java", "python", "cpp"]        // call back function
// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);                    // callback aerrow function
    
// } )

// // callBACl mtlb sirf jo hm function me koi variable dete the value store krne ke liye call back me vo nhi dete

// function printMe(item) {    // printme ek function hai  uska kam hai ki jo hme chahiye vo print krata
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, array) => {
//  console.log(item, index, array);
 
// })

const myCoading = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoading.forEach( (item) =>{
    console.log(item.languageFileName);
    
} )