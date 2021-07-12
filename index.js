//Server defs
const express = require('express');
const port = 8000;

//Requirements
const app = express();
const bodyParser = require('body-parser');

//Routes
const routes = require('./routes/routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
routes(app);

//Launch instance
app.listen(port, () => {
  console.log('Listening on port ' + port);
});

