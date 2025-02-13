const express = require('express');
const app = express();
const PORT = 3002;

// Defines the root route that responds with a message specific to Backend 2.
app.get('/', (req, res) => {
    res.send('Hello from Backend 2!');
});

// Starts the server on port 3002.
app.listen(PORT, () => {
    console.log(`Backend 2 running on port ${PORT}`);
});
