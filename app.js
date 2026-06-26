require('dotenv').config();
const express = require('express');
const { Client } = require('pg');

const app = express();
app.use(express.json()); // This allows the server to read JSON data

// Database connection configuration
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

// Connect to PostgreSQL
client.connect()
    .then(() => console.log("Connected to PostgreSQL successfully"))
    .catch(err => console.error("Connection error", err.stack));

// Route to register for the event
app.post('/register', async (req, res) => {
    const { name, email, event_name } = req.body;
    try {
        const query = 'INSERT INTO registrations(name, email, event_name) VALUES($1, $2, $3)';
        await client.query(query, [name, email, event_name]);
        res.status(201).json({ message: "Registration successful!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});