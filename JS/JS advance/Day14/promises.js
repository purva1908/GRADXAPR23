// callback alternatives 
// => promises


// A promise is js object that links producing code and consuming code

let myPromise = new Promise(function(myResolve, myReject){
    myResolve();
    myReject();
});

myPromise.then(
    function(value) //code success
    function(error)  //not found error msg
);


// Promises properties

// js promises object can be : Pending , Fulfilled , Rejected

// promise suppports two properties:state and result
// when promis object pending result undefined
// when promise object is fulfilled success
// when promise object is rejected error is result

// myPromise.state  myPromise.result
// "pending"         undefined
// "fulfilled"       result value
// "rejected"        error object






