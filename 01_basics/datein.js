let myDate = new Date()
// console.log(myDate);//2025-08-07T07:52:50.843Z
// console.log(myDate.toDateString());//Thu Aug 07 2025
// console.log(myDate.toISOString());//2025-08-07T07:52:50.843Z
// console.log(myDate.toLocaleDateString());//7/8/2025
// console.log(myDate.toLocaleString());//7/8/2025, 1:22:50 pm
// console.log(myDate.toString()); //Thu Aug 07 2025 13:22:50 GMT+0530 (India Standard Time)
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toString());


//console.log(typeof myDate); //object


let constructDate = new Date(2002, 7, 10) // year,month, date,hour,minute,second,mili second

//console.log(constructDate.toString());
//console.log(constructDate.toLocaleString());

let birthday = new Date("08-10-2002") //mm/dd/yy
//console.log(birthday.toLocaleString());

// timestamp********

let dt = Date.now()
let dt1 = new Date(2002,7,10,5,30)
//console.log(dt);
let miliSeconds = dt-dt1.getTime()
let second = Math.floor(miliSeconds/1000) //milisecond ko second me convert kiya
console.log("Total seconds",second);
//console.log(Math.floor(dt/1000));
let minute = Math.floor(second/60) //second ko minute me convert kiya
console.log("Total minutes",minute);
let hour = Math.floor(minute/60) //minute ko hour me convert kiya
console.log("Total hours",hour);
let day = Math.floor(hour/24)
console.log("Total days",day);

console.log(Math.floor(day/365));


console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
console.log(birthday.getUTCMonth());
console.log(birthday.getFullYear());
console.log(birthday.getMilliseconds());


