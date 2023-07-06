const age = 15;

if(age >= 18){
    console.log("can get driving license");
}

else {
   const yearsLeft = 18 - age;
   console.log(`You are too young . Wait for another ${yearsLeft} years to get the license`);
   console.log("wont get driving license"); 
}