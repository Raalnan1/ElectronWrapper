const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Handle all requests to return the React index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
