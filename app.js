const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/date", (req, res) => {
    res.json({ today: new Date() });
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
