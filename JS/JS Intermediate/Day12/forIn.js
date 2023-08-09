// The JavaScript "for in" statement loops through the properties of an Object:

// for(key in object) {
//     // code block to be executed
//   }

//   const person = {
//     fname:"John",
//     lname:"Doe",
//     age:25,
//     rollNo:89
// };

// let text = "";
// for (let x in person) {
//   text += person[x] + "\n";
// }

// console.log(text);

// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]


// For In Over Arrays
// The JavaScript "for in "statement can also loop over the properties of an Array:
// for (variable in array) {
//     code
//   }

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] * numbers[x] + "\n";
 
}
console.log(txt)

let sum = 0;
for (let x in numbers) {
  sum += numbers[x]  ;
 
}
console.log(sum)



