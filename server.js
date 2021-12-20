/* eslint-env es6 */
/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const cors = require("cors");
const app = express();


app.use(cors({
    origin: '*'
}));

// Serve static files
app.use(express.static(__dirname + '/dist/pharmacyApp'));

// default Heroku port
app.listen(process.env.PORT || 8080);

// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/pharmacyApp/index.html'));
});