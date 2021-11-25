const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
})

const port = 8888;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
