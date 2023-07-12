//function expression
const calAge2 = function(birthYear, currentYear){
   console.log(`Current year is ${currentYear} and my today's age is ${currentYear-birthYear}`)
}

calAge2(2000,2023);


//arrow function

const calAge3 = (birthYear,currentYear) => {
    console.log(`Current year is ${currentYear} and my today's age is ${currentYear-birthYear}`)

} ;
calAge3(2001,2023);
