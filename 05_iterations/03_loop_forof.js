// forof

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);   
// }

// const name = "shub hangi"
// for (const element of name) {
//     console.log(`each character of element ${element}`);    
// }

// map
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('fr',"France")
// map.set('IN',"India")

// // console.log(map);

// // apply forof loop on map
// for (const [key,value] of map) {
//     console.log(key , value);
    
// }

// apply forof loop in object**** error not iterable 

const myObject = {
  'game 1': 'ludo',
  'game 2': 'hollyball',
  'game 3': 'cricket'
}
for (const [key, value] of myObject) {
  console.log(key, value);
  
}
// object me for of loop kam nhi krta