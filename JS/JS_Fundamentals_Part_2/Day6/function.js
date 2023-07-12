function logger(){
    console.log("logger is called")
}

//calling /running/invoking

logger();
logger();

function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

console.log(fruitProcessor(5,0))

fruitProcessor(5,0);