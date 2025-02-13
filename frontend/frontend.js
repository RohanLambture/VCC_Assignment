const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

// Serves static files from the 'public' directory (for the UI).
app.use(express.static(path.join(__dirname, 'public')));

// Defines an endpoint to call Backend 1.
app.get('/callBackend1', async (req, res) => {
    try {
        const response = await axios.get('http://192.168.226.131:3001/');
        res.send(`Frontend connected to Backend 1. Response: ${response.data}`);
    } catch (error) {
        console.error('Error connecting to Backend 1:', error.message);
        res.status(500).send('Error connecting to Backend 1');
    }
});

// Defines an endpoint to call Backend 2.
app.get('/callBackend2', async (req, res) => {
    try {
        const response = await axios.get('http://192.168.226.130:3002/');
        res.send(`Frontend connected to Backend 2. Response: ${response.data}`);
    } catch (error) {
        console.error('Error connecting to Backend 2:', error.message);
        res.status(500).send('Error connecting to Backend 2');
    }
});

app.listen(PORT, () => {
    console.log(`Frontend server running on port ${PORT}`);
});
