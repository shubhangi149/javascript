// // Array

 const myarr = [0, 1, 2, 3, 4, 5]  
// // arrays ke andar jab bhi copy operation krte hai to vo shallow copy bnata hai
// // shallow copy me jo change krte hai original array me bhi change hoga
// // deep copy me same reference share nhi krta hai 

const myfri = ["bhushan", "kushal", "harsh"]


// //* another way of declare array*//

const myarr2 = new Array(1, 2, 3, 4, 5)

// console.log(myarr2[2]);

// // Array methods//

// myarr.push(6) // push method value add krne ke liye use krte hai jaise ki my arr me 5 tak  element the ab 6 add kr diya
// myarr.pop()  // pop method array ke last value ko remove kr deta hai
// myarr.unshift(9) // unshift method array me first index pe add ho jata hai
// myarr.shift()  // shift method array ke first element ko remove kr deta hai.
// console.log(myarr);
// console.log(myarr.includes(8));   //use for check the value is present or not
// console.log(myarr.indexOf(8));   //kis index pe konsi value hai check krne ke liye use hota hai

 const newrray = myarr.join()
// console.log(myarr);
// console.log(newrray);
// console.log( typeof myarr);  //object  **
// console.log(typeof newrray); // string  ** jab join method use krte hai to bind kr deta hai aur type change kr deta hai jaise ki string me covert kr diya bind mtlab square bracket hta diye


// slice, splice   //**interview que = difference bet slice and splice */

console.log("A", myarr);
const myn1 = myarr.slice(1, 3)
console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1, 3)
console.log("C", myarr);
console.log(myn2);

