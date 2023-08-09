// The forEach() method calls a function and iterates over the elements of an array.
//  The forEach() method can also be used on Maps and Sets.

// The syntax of the forEach() method is:

// array.forEach(function(currentValue, index, arr))
// Here,

// function(currentValue, index, arr) - a function to be run for each element of an array
// currentValue - the value of an array
// index (optional) - the index of the current element
// arr (optional) - the array of the current elements



// ex

// The forEach() method is used to iterate over an array. For example,

// let students = ['John', 'Sara', 'Jack'];

// // using forEach
// students.forEach(myFunction);

// function myFunction(item) {

//     console.log(item);
// }

// let students = ['John', 'Sara', 'Jack'];

// // using forEach
// students.forEach(myFunction);

// function myFunction(item, index, arr) {

//     // adding strings to the array elements
//     arr[index] = 'Hello ' + item;
//     console.log(arr[index]);
// }

// console.log(students);








// for loop to forEach()
// Here is an example of how we can write a program with for loop and with forEach().

// Using for loop

// const arrayItems = ['item1', 'item2', 'item3'];
// const copyItems = [];

// // using for loop
// for (let i = 0; i < arrayItems.length; i++) {
//   copyItems.push(arrayItems[i]);
// }


// console.log(copyItems);

// i=0 -> 0<3 -> copyItems=["item1"] i=1
// i=1 -> 1<3 -> copyItems=["item1", "item2"] i=2
// i=2 -> 2<3 -> copyItems=["item1", "item2", "item3"] i=3
// i=3 -> 3<3 false out of the loop
// copyItems=["item1", "item2","item3"]

// ["item1", "item2", "item3"]

// Using forEach()

// const arrayItems = ['item1', 'item2', 'item3'];
// const copyItems = [];

// // using forEach
// arrayItems.forEach(function(item){
//   copyItems.push(item);
// })

// console.log(copyItems);



// define Set
const set = new Set([1, 2, 3]);

// looping through Set
set.forEach(myFunction);

function myFunction(item) {
    console.log(item);
}

