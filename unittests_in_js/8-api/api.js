const exp = require('express');

const app = exp();
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

const server = app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = server;
