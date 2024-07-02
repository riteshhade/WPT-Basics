// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express application
const app = express();

// Define port number
const port = 3000;

// Middleware to parse incoming request bodies as JSON
app.use(bodyParser.json());

// In-memory database (for demonstration purposes)
let todos = [];
let id = 1;

// Route to create a new to-do item
app.post('/todos', (req, res) => {
    // Create a new to-do item with auto-incremented ID, title from request body, and default completed status
    const todo = {
        id: id++,
        title: req.body.title,
        completed: true  // For demonstration, setting default completion status to true
    };
    
    todos.push(todo); // Add the new to-do item to the in-memory database
    res.status(201).json(todo); // Respond with status 201 (Created) and JSON representation of the new to-do item
});

// Route to get all to-do items
app.get('/todos', (req, res) => {
    res.json(todos); // Respond with JSON array of all to-do items
});

// Route to get a specific to-do item by ID
app.get('/todos/:id', (req, res) => {
    // Find the to-do item with the specified ID in the in-memory database
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    
    // If no matching to-do item is found, respond with status 404 (Not Found)
    if (!todo) return res.status(404).send('To-do item not found');
    
    res.json(todo); // Respond with JSON representation of the found to-do item
});

// Route to update a specific to-do item by ID
app.put('/todos/:id', (req, res) => {
    // Find the to-do item with the specified ID in the in-memory database
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    
    // If no matching to-do item is found, respond with status 404 (Not Found)
    if (!todo) return res.status(404).send('To-do item not found');
    
    // Update the title and completion status of the found to-do item based on request body
    todo.title = req.body.title;
    todo.completed = req.body.completed;
    
    res.json(todo); // Respond with JSON representation of the updated to-do item
});

// Route to delete a specific to-do item by ID
app.delete('/todos/:id', (req, res) => {
    // Find the index of the to-do item with the specified ID in the in-memory database
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    
    // If no matching to-do item index is found, respond with status 404 (Not Found)
    if (todoIndex === -1) return res.status(404).send('To-do item not found');
    
    // Remove the found to-do item from the in-memory database and capture the deleted item
    const deletedTodo = todos.splice(todoIndex, 1);
    
    res.json(deletedTodo[0]); // Respond with JSON representation of the deleted to-do item
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`To-do app listening at http://localhost:${port}`);
});
