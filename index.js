const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

//app.get('/', (request, response) => {
//    console.log(`URL: ${request.url}`);
//    response.send({
//	message: 'Hello, Server!'}
//    );
//});
routes(app);

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

