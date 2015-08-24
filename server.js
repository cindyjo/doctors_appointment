var express = require('express');

var path = require('path');

var app = express();


var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname +'/client'));
var server = app.listen(8000, function(){
	console.log('listening on port 8000');
})

// Mongoose
require('./server/config/mongoose.js');

// HTTP Routes`	
routes = require('./server/config/routes.js')(app);
