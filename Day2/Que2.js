// Import the 'fs' (File System) module
var fs = require('fs');

// Create a file
fs.open('mynewfile1.txt', 'w', function(err, file) {
    if (err) throw err; // If an error occurs, throw the error
    console.log('File is Created!'); // Log message indicating the file has been created
});

// Write inside file
fs.writeFile('mynewfile1.txt', 'Hello content!', function(err) {
    if (err) throw err; // If an error occurs, throw the error
    console.log('Saved!'); // Log message indicating the content has been saved
});

// Update the file by appending content to it
fs.appendFile('mynewfile1.txt', 'Welcome to the coding world!', function(err) {
    if (err) throw err; // If an error occurs, throw the error
    console.log('Updated!'); // Log message indicating the file has been updated with appended content
});

// Override the file content with new content
fs.writeFile('mynewfile1.txt', 'This is updated content!', function(err) {
    if (err) throw err; // If an error occurs, throw the error
    console.log('Updated!'); // Log message indicating the file content has been overridden with new content
});

// Rename the file
fs.rename('mynewfile1.txt', 'mynewfile2.txt', function(err) {
    if (err) throw err; // If an error occurs, throw the error
    console.log('Renamed!'); // Log message indicating the file has been renamed
});

// Delete the file
fs.unlink('mynewfile2.txt', function(err) {
    if (err) throw err; // If an error occurs, throw the error
    console.log('Deleted!'); // Log message indicating the file has been deleted
});

 