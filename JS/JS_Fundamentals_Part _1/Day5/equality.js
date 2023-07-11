// ==  x=8, y = 8    x==y  8=8 true
// check the equality value of two compared things
// ===
// ==  x=8, y = "8"    x===y  8=8 true
//                   x ===y  number=string false
//                   o/p false

// check the equality value and type of two compared things

const age = 18;

if(age === 18){
    console.log("you just became an adult (strict)");
}

if(age == 18){
    console.log("you just became an adult (loose)")
}

let x = 8;
let y =8;
let z = "8";

if(x==y){
    console.log("value of x and y is same")
}

console.log(typeof(x));
console.log(typeof(z));
if(x===z){
    console.log("value & typeof of x and z are same")
}
else {
    console.log("value is same but type is not same")
}





