
//Function declaration

function calAge1(birthYear){
    return 2023 - birthYear;
}
const result=calAge1(2000);

console.log(result)

//function expression


const calAge2 = function(birthYear){
    return 2023 - birthYear;
}
const result1 = calAge2(2001)

console.log(result1);
