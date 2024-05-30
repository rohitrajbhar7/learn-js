// scope refers to the accessibility of variables, functions, and objects in different parts of the code. There are two main types of scope: global scope and local scope.

// Variables or functions declared in the global scope are accessible from anywhere in the JavaScript code. This means they are not confined to any particular function or block and can be accessed and modified from any part of the code.

// Variables or functions declared within a function or block are confined to that particular scope and cannot be accessed from outside of it.
let a = 100 // this variable has a global scope 
var c = 300

if(true){
    let a = 10 // this is a local scope
    // const b = 20
    var c = 30
}
console.log(a)
// console.log(b)
console.log(c)// as earlier discussed the var datatype is having issue with the block and function scope so here is the reason explaination , so var is having a global scope