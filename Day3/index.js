
// Import the express module
var express = require('express');

// Create an instance of an Express application
var app = express();

// Import the 'path' module
var path = require('path');

// Route to handle GET requests to the root URL
app.get('/', function(req, res) {
    // Send the index.html file as a response
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server and listen on port 5000
var server = app.listen(5000, function() {
    // Log a message when the server starts
    console.log('Express app running at http://127.0.0.1:5000/');
});
