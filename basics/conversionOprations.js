/*let score = null

console.log(typeof score);
console.log(typeof(score));

//let valueInNumber = Number(score)
//let valueInNumber = String(score)
let valueInNumber = Boolean(score)
console.log(typeof  valueInNumber);
console.log(valueInNumber);*/


// when we conver this type of string like "33" this is easily covert into number
//"33nhiuhj"=> this type of no give the value "NaN" it means not anumber
//but the type of NaN is number this concept create littel bit of confussion.
//true => this value convert into "1"
//false => this value convert into "0"
// "shubhangi"=> this value convert into NaN
//undefined => is also having value NaN
// null => this value convert into "0"


let isLoggedIn = 1


let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisLoggedIn);

//1 => converts in true
//0 => converts in false
//"" empty string => converts in false
//"shubhs"  full string=> converts in true



let someNumber = 88

let stringNumber =String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);


//*************************************** Operation***********************************************


let value = 3
let negValue = -value // convert in negative value

//console.log(negValue); 
/*console.log(2+3);
console.log(2-3);
console.log(2*3);            //basic  operation
console.log(2/3);
console.log(2%3);
console.log(2**3);
*/

let str1 = "hello"
let str2 = " shubhs"
let str3 = str1 + str2           //concatenating the string
//console.log(str3);
// let str4 = "5"+7-4
// console.log(typeof str4);
// console.log(str4);

// console.log("1"+ 2);
// console.log(2 +"1");
// console.log("1"+ 2 +4);
// console.log(2+ "1" +4);
// console.log(2 + 4 +"1" );
// when two no in console and first is string so that time console concat the string they not perform the math operation
// in console 3 no are comes and first is string then also console concat the string
//but when in between three no and first and second is not a string and in last it string so that time first two no perform addition and third is attach as it is.if that is string.


// console.log(+true); // when we take plus+ before true so that time its value is 1,but we put + after the true that time create an errror.

// console.log(+""); //empty string give the value "0"


// let num1, num2, num3
// num1= num2=num3=2+2


//  let gameCounter = 456
//  console.log(gameCounter++);

//a++ => a = a+1
// let a = 5
// let b = a++ //b=a execute first then a++ will be executed
// let c = ++a // ++a will execute first then c=a will be executed
// console.log(a,b,c); //a= 7 b=5 c=7


let a = 5
let b = a-- //b=a execute first then a-- will be executed  3 5 3
let c = --a // --a will execute first then c=a will be executed 
console.log(a,b,c); //a= 6 b=5 c=5

//its called typecasting
