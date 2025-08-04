// const name = "shubhu"
// const age = 13

//console.log(`my name is ${name} my age is ${age}`);


const myname = new String("  shubhangi  ")

// console.log(myname[3]);
// console.log(myname.__proto__);
// console.log(myname.toUpperCase());
// console.log(myname.length);
// console.log(myname.charAt(2));
// console.log(myname.indexOf("h",2));



const newName = myname.substring(0, 4)
console.log(newName)

const anotherName = myname.slice(-6, 5)// negative values use in slice not for substring
console.log(anotherName);
const trimname = myname.trim() // in trim function other two sub function that are trimStart() and trimEnd() 
//use of trim remove the whitespace from string both side.
console.log(trimname);

const flower ="rose give to shubhangi"

console.log (flower.replace("rose", "juhi"));

console.log(flower.includes("harsh")); // this function use to check string is present or not and go ve the boolean value in the output like true or false

console.log(flower.split(" ")); // use for split the string basis on any word space or - also.



