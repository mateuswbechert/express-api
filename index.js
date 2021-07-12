const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('My first REST API!'));
app.get('/about', (req, res) => res.send('Im Mat'));

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

