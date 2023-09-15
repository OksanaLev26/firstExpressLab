const express = require('express');

const app = express();

app.get('/greeting', function (req, res) {
  res.send('<h1>Hello, stranger</h1>');
});

app.get('/greeting/:name', function (req, res) {
    res.send(`<h1>Wow! Hello there, ${req.params.name} on the page</h1>`);
  });

app.listen(3000, function () {
  console.log('Listening on port 3000');
});