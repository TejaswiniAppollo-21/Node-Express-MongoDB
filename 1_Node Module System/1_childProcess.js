// Child process is a node module used to create sub process within a script

const cp = require('child_process');

// Opens calculator
cp.execSync('calc');

// Opens chrome
cp.execSync('start chrome');

// Opens chrome and browse the URL
cp.execSync('start chrome https://www.scaler.com/topics/')

// Executes the file demo.js
console.log('Output - ' + cp.execSync('node demo.js'))