function myName(){
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("g");
    console.log("i");    
}
//myName()

//  function addNum(n1, n2)
//  {  // function ki define krte hai usko parameter bolte hai
//     console.log(n1+n2);
    
//  }
//  addNum(2, 4)  // function ko calll krte hai to usko argument bolte hai

function addnum(n1, n2) 
{
    let result = n1+n2
    return result// return krne ke bad kuch bhi print nhi hoga
}
const result = addnum(2, 4)
//console.log(result);

function loginmsg(username){
    // if (username === undefined)
    if(!username)
    {
        console.log("please enter a username");
        return
    }
    return `${username} just loggedin`
}
//console.log(loginmsg()); //argument me koi value hi pass nhi ki to vo undefined ata hai

function calculateCartItem(val1, val2, ...num1){
    return(num1)
}
//console.log(calculateCartItem(200, 600, 590, 345));

const user = {
    name:"shubhs",
    rollNo:"456"
}
function handleObject(anyObject){
    console.log(`user name is${anyObject.name} and roll no is${anyObject.rollNo}`);
    
}
// handleObject(user)
handleObject({
     name:"shubh",
    rollNo: 345
})

const myNewarray = [100, 200, 300, 400]

function returnValue(getarray){
    return getarray[1]
}

console.log(returnValue(myNewarray));
console.log(returnValue([100, 800, 700, 500]))
 