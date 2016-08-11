// set up ======================================================
var express         = require('express');
var app             = express();
var mangoose        = require('mangoose');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// configuration ===============================================
mangoose.connect('mongodb://localhost:27017/node-todo');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

// listen (start app with node server.js) ======================
app.listen(8080);
console.log("App listening on port 8080");
