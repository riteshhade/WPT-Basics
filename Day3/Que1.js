// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Import the 'path' and 'body-parser' modules
var path = require('path');
var bodyparser = require('body-parser');

// Middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyparser.json());

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello!!'); // Send a response "Hello!!" when the root URL is accessed
});

// Route to handle POST requests to the /post URL
app.post('/post', (req, res) => {
    console.log('Post Request'); // Log "Post Request" to the console
    console.log(req.body); // Log the request body to the console
    res.send('Data is Posted'); // Send a response "Data is Posted"
});

// Route to handle PUT requests to the /put URL
app.put('/put', (req, res) => {
    console.log('Put Request'); // Log "Put Request" to the console
    console.log(req.body); // Log the request body to the console
    res.send('Data is updated'); // Send a response "Data is updated"
});

// Route to handle DELETE requests to the /delete URL
app.delete('/delete', (req, res) => {
    console.log('Post Deleted'); // Log "Post Deleted" to the console
    console.log(req.body); // Log the request body to the console
    res.send('Data is Deleted'); // Send a response "Data is Deleted"
});

// Define the port to listen on, defaulting to 3000 if process.env.port is not set
const port = process.env.port || 3000;

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Log a message when the server starts
});
