const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasGoodVision); 


//wap if madhav has bothe driving lic and good vision only then he can drive 

if(hasDriverLicense && hasGoodVision){
    console.log("madhav can drive")
}
else{
    console.log("madhav cant drive")
}

//
const age =19;
const drink = age >=18 ? 'wine 🍷 ' :"milk 🥛";
console.log(drink);




// if(age>=18){
//     console.log("wine 🍷")
// }
// else{
//     console.log("milk 🥛")
// }