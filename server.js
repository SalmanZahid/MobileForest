require('./database');
var express = require('express'),
    bodyParser = require('body-parser');

var apiRoutes = require('./api/routes/api.routes');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));


app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log('App Listening on port '+ port +'!');
});