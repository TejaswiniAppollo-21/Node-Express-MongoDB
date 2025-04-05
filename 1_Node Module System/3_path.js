// Path module helps us work with the path of specific files or folders

const path = require('path');

let ext = path.extname('C:\\Users\\tejas\\Documents\\LEARNING\\Projects\\NodeJS\\Node Module System\\file1.txt');
console.log('Extension is ' + ext);

let baseName = path.basename('C:\\Users\\tejas\\Documents\\LEARNING\\Projects\\NodeJS\\Node Module System\\file1.txt');
console.log('Base Name is ' + baseName);

console.log(__filename); // returns the path of the current file

console.log(__dirname); // returns the path of the current directory