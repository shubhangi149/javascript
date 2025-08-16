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
console.log(result);

function loginmsg(username){
    // if (username === undefined)
    if(!username)
    {
        console.log("please enter a username");
        return
    }
    return `${username} just loggedin`
}
console.log(loginmsg()); //argument me koi value hi pass nhi ki to vo undefined ata hai
