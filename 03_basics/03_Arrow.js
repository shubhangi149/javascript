const user = {
    name:"shubhangi",
    course: "b.tech",
    welcomemsg:function()
    {
        console.log(`${this.name}, is a good girl`);
        console.log(this);
        
    }
}
// user.welcomemsg()
// user.name = "shubhu"
// user.welcomemsg()
//console.log(this);  // this current context ko print krta hai jo bhi value ho usme usko
// browser ke andar jo global object hai vo windows hai
// "this" sirf object ke andr kam krta hai function me nhi

// Arraow function syntax
//()=>{}


// const addTwo = (num1, num2) => {
//         return num1 + num2
//     }

// console.log(addTwo(56, 98));

// implicit return
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(56, 98));
// const addTwo = (num1, num2) => (num1 + num2)

// how to return object in arrow function
const addTwo = () => ({name:"shubhu"});
    
console.log(addTwo());


