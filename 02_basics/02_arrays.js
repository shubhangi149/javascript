const myMalefri = ["bhushan", "harsh", "kushal"]
const myFemalefri = ["jyotsna", "ashwini", "mrunali"]
//myMalefri.push(myFemalefri)
// console.log(myMalefri);
// console.log(myMalefri[3][1]);

// const allFri = myMalefri.concat(myFemalefri)
// console.log(allFri);
const all_new_fri = [...myMalefri,...myFemalefri] // spread operator
//console.log(all_new_fri);

const newarr = [1, 2, 3, 4,[5, 7,], 7, 9, 2,[5, 7, 8,[5, 6, 3]]]
const newarr1 = newarr.flat(Infinity)
//console.log(newarr1);

console.log(Array.isArray("shubhangi")); // check krta hai jo prameter me jo value hai vo array hai ya nhi agr array hoga true return krta hai nhi hoga to false
console.log(Array.from("shubhangi")); // aary bnata hai
console.log(Array.from({name:"shubhangi"})); // object me likhenge to empty array return krta hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
