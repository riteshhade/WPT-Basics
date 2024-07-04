// Importing required dependencies
const express = require('express'); // Express framework for Node.js
const bodyParser = require('body-parser'); // Middleware to parse JSON request bodies
const mysql = require('mysql'); // MySQL client for Node.js
const cors = require('cors'); // Middleware for handling Cross-Origin Resource Sharing

// Instantiating Express app and defining PORT number
const app = express();
const PORT = 3000;

// Using cors middleware to enable CORS for all routes
app.use(cors());

// Using bodyParser middleware to parse JSON bodies of incoming requests
app.use(bodyParser.json());

// Database connection configuration
const dB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Venom@2001',
    database: 'form_app'
});

// Connecting to the database
dB.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
});

// Route to handle POST requests for registration
app.post('/register', (req, res) => {
    // Destructuring request body to extract form data
    const { name, email, gender, number, address, city, state, pincode } = req.body;
    console.log(req.body); // Logging the received form data

    // SQL query to insert data into 'user' table
    const sql = "INSERT INTO form_app.user (name, email, gender, number, address, city, state, pincode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    // Executing the query with data from the request body
    dB.query(sql, [name, email, gender, number, address, city, state, pincode], (err) => {
        if (err) {
            console.log(err); // Logging any database error
            res.status(500).send("Error Occurred"); // Sending 500 status and error message on failure
        } else {
            res.status(200).send("Values Inserted"); // Sending 200 status and success message on successful insertion
        }
    });
});

// Start server and listen on defined PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Logging server startup message with port number
});
