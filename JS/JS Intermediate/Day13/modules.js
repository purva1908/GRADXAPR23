// used for breaking the code in separate files 

import employees from "./jsobs.js";

// importing means including data from imported file


// EXport => modules with functions or vriable can be stored in external file 
// Named exports and Default Exports


// named exports

// person.js
// 1]
export const name="pryag";
export const age=26;

// 2]
 const name="pryag";
 const age=26;

 export{ name , age}

//  Default exports

// message.js

const message=()=>{
    const name="John";
    const age=40;
    return name + 'is' + age + "'years old.";
};

export default message;



// note => Named exports are constructed using curly braces . Default eports are not

// import from named exports
import { name , age} from "./person.js"

// import from default exports

import message from "./message.js";