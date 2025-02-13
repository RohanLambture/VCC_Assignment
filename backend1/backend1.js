const express = require('express');
const app = express();
const PORT = 3001;

// Defined a GET route at the root URL that sends a simple message.
app.get('/', (req, res) => {
    res.send('Hello from Backend 1!');
});

// Starts the server and listens on port 3001.
app.listen(PORT, () => {
    console.log(`Backend 1 running on port ${PORT}`);
});
