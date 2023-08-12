
// Write a program to calculate the age of car
// write a program to print name and age of car objects 

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      console.log(date.getFullYear() - this.year) ;
    }
  }
  
  const myCar = new Car("Ford", 2020);
  myCar.age();


// ES6 javascript introduced classes.
// Javascript classes are templates for JS Objects

// JS Class syntax

// class ClassName{
//     constructor(){
//         ......
//     }
// }


// we need class keyword to create the class inside JS. We add method named constructor()

// class Car{
//     constructor(){
//        
//     }
// }

// JS class is not an object .It is template for JS objects.

// how to create objects:

// const myCar1 = new Car("Ford", 2014);
// const myCar2 =new Car("Audi", 2019);


// Constructor method:
// 1]It has to have the exact name "constructor"
// 2]it is executed automatically when a new object is created
// 3]it is used  to initialize object properties

// what will happen if you dont create constructor method, JS will add empty constructor method by default


// the way we create metods inside object we can also create methods inside class also

// syntax

// class ClassName{
//     constructor(){...}

//     method_1(){...}
//     method_2(){...}
//     method_3(){...}
//     method_4(){...}
// }



