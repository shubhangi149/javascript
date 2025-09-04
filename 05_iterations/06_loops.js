// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
    
// })
// // console.log(values)   
// // foreach loop koi bhi value return nhi krta hai


// const myNums = [1,  2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num)=> num>4)
// console.log(newNums);

//  const newNums = [1,  2, 3, 4, 5, 6, 7, 8, 9, 10]

// //const newNums = myNums.filter( (num)=> {
//     return num<4
// })
//console.log(newNums);

// scope me agr condition li to usme return keyword use krna pdta hai nhi to empty aary return  krega

// const newNums = []
// newNums.forEach((num) => {
//     if (num>4) {
//       newNums.push(num)  
//     }
// });
// console.log(newNums);



const myNums = [1,  2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);
const newNums = myNums
.map( (num) => num * 10)
.map( (num) => num + 1)
.filter( (num) => num >= 40)
console.log(newNums);
