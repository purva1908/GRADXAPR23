// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
  
  // This will return "Mary Doe":
  // person.fullName.apply(person1);

//   aisa object jiske pas method hai
// method name  .
// apply or call 
// aisa object jiske property values will be used in method vo hme pass krna h bracket me


//   The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.


const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.apply(person1, ["Oslo", "Norway"]);