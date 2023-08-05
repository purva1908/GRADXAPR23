// for loop

console.log("I have lifted the weight 1 time");
console.log("I have lifted the weight 2 time");
console.log("I have lifted the weight 3 time");
console.log("I have lifted the weight 4 time");
console.log("I have lifted the weight 5 time");
console.log("I have lifted the weight 6 time");
console.log("I have lifted the weight 7 time");
console.log("I have lifted the weight 8 time");
console.log("I have lifted the weight 9 time");
console.log("I have lifted the weight 10 time");

console.log("for loop output")

for(let i=1 ; i<=10; i++){
    console.log(`I have lifted the weight ${i} time`);

}


//i=1  1<=10 I have lifted the weight 1 time
//i=2  2<=10   I have lifted the weight 2 time
//i=3  3<=10   I have lifted the weight 3 time
//..... i =10 10<=10 I have lifted the weight 10 time
//i=11 11<=10 

for(let i=10 ; i>=1; i--){
    console.log(i);
}


//wap to print square of 1st ten natural nos in reverse order

for(let i=10 ; i>=1; i--){
    console.log(i*i)
}

const arrayOfAge = [ 1991,1992,1997,2000];
console.log(arrayOfAge.length);

for(let i=0; i<arrayOfAge.length;i++){
    console.log(2023-arrayOfAge[i])
}