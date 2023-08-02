
// const listOfStudents = ["Sangeeta", "MAdhav","Sid"];
// console.log(listOfStudents)

const Students = new Array("Ram","Shubham");
console.log(Students);

const student1 ="Purva";
const student2="Puja";
const student3="Shreya";

const newStudent = [student1, student2,student3];
console.log(newStudent);

const years = [1991,1997, 2000-1];
console.log(years)

//size of array

console.log(years.length)
console.log(newStudent.length)
console.log(Students.length)

//accessing elements of the array

console.log(years[0]);
console.log(years[1]);
console.log(years[2]);
console.log(years[years.length-1]);

 years[0]= 2000;
console.log(years);

//Exercise
const calcAge = function(birthYear){
    return 2037 + birthYear;
}

const result =calcAge(2000);
console.log(result)

console.log(calcAge(years));

//methods on array

const listOfStudents = ["Sangeeta", "MAdhav","Sid"]
listOfStudents.push("Puja");
console.log(listOfStudents);
listOfStudents.unshift("jay");
console.log(listOfStudents);

listOfStudents.pop();
console.log(listOfStudents);
listOfStudents.shift();
console.log(listOfStudents);

console.log(listOfStudents.indexOf("Sid"));