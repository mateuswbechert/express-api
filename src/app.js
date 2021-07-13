const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

//Routes
const routes = require('./routes/routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);
module.exports = app;
