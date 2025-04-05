const calculator = require('./calculator')

console.log("Node.js course")

function sayHello(){
    console.log("Hello")
}

sayHello()

console.log(global) // global object in Node.js

// console.log(window) Available only in the browser

let name = "NodeJS"
console.log(global.name) // Undefined - Restrict the scope of the variable name only to the file scope

// Modules in Node.js
calculator.addition(4, 4)
calculator.subtraction(4, 4)
calculator.multiplication(4, 4)
calculator.division(4, 4)