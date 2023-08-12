// Async JS
// Functions running in parallel with other functions are called asynchronous 

// setTimeout()


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
    
//   }
  
//   myCalculator(5, 5, myDisplayer);
  

//   In the example above, myDisplayer is a called a callback function.

// It is passed to myCalculator() as an argument.

// 
// setTimeout(myFun, 4000);

// function myFun(){
//     console.log("first");
// }

setTimeout(function(){
    myFun("first");
}, 4000);

function myFun(str){
    console.log(str);
}


setInterval(myFunction,1000);

function myFunction(){
    console.log("prayag")
}

