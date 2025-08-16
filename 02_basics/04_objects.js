//const tinderUSer = new Object()
const tinderUSer   = {}
// console.log(tinderUSer2);

tinderUSer.id = "123abc"
tinderUSer.name = "shubhs"
tinderUSer.surname = "Raundal"

// console.log(tinderUSer);

const regularUser = {
    email:"shubhs@gmail.com",
    fullname:{
        firstName:"shubhangi",
        lastname:"Raundal",
        location:{
            city:"pune",
            district:"pune"
        }
    }
}

//console.log(regularUser.fullname.location);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

//const obj4 ={obj1, obj2}
//console.log(obj4);
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);


const obj4 = {...obj1, ...obj2, ...obj3}
//  console.log(obj4);
 
// array ke andar object ye data vasically database se atta hai

const users = [

    {
        id:1,
        email:"shubhs@gmail.com"
    },
    {
        id:1,
        email:"shubhs@gmail.com"
    },
    {
        id:1,
        email:"shubhs@gmail.com"
    },

]
// array ka objects

users[1].email
// console.log(tinderUSer);
// console.log(Object.keys(tinderUSer));
// console.log(Object.values(tinderUSer));
// console.log(Object.entries(tinderUSer));

//console.log(tinderUSer.hasOwnProperty("name"));

//object destructure

const course = {
    coursename:"js",
    price: 999,
    courseteacher:"shubhs"
}

// course.courseteacher

console.log(course.courseteacher);
const {price} = course
// const {price: rate} = course // aese hm value change kr skte hai
console.log(price);


// this is not a object it called json
// {
//     "name":"shubhangi",
//     "course":"js"
// }

// // json
// [
//     {}
//     {}
// ]


