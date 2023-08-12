// With the call() method, you can write a method that can be used on different objects.
// In JavaScript all functions are object methods.
// If a function is not a method of a JavaScript object, it is a function of the global object 

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
// //   // This will return "John Doe":

//  console.log(person.fullName());







// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).



// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "John Doe":
//  console.log(person.fullName.call(person2));



  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.call(person1, "Oslo", "Norway"));