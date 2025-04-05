// File system module with files

const fs = require('fs');

// Reading a file
let fileContent = fs.readFileSync('file1.txt');
console.log('Data of File 1 - ', fileContent); // This provide the output in the buffer format
console.log('Data of File 1 - ' + fileContent) // NodeJS converts the fileContent to the form to which it is concatenated to

// Writing in a file
// If the file mentioned doesn't exists, this method creates the file and write the data to it
fs.writeFileSync('file2.txt', 'I am f2.');
console.log('Completed writing in a file.');

// Append a file
fs.appendFileSync('file2.txt', ' I am file 2.');
console.log('Completed appending in a file.');

// Deleting a file
fs.unlinkSync('file3.txt');
console.log('Completed deleting a file.');

// File system module with directories

// Creating a directory
fs.mkdirSync('myNewDirectory');
console.log('Completed creating a new directory.');

// Reading a directory
let folderPath = 'C:\\Users\\tejas\\Documents\\LEARNING\\Projects\\NodeJS\\Node Module System\\myNewDirectory';
let folderContent = fs.readdirSync(folderPath);
console.log(folderContent); // Returns in array

// Checking directory exists
let directoryExists = fs.existsSync('myNewDirectory');
console.log(directoryExists ? 'Directory exists' : "Directory doesn't exists");

// Checking file exists
let fileExists = fs.existsSync('4_fs.js');
console.log(fileExists ? 'File exists' : "File doesn't exists");

// Removing a directory
fs.rmdirSync('myDirectory');
console.log('Directory has been deleted.');

