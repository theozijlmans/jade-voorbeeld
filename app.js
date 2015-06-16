//Module Dependencies
var express = require('express');
var jade = require('jade');

//Set Port Number
var portnumber = 3033;

//Init Express
var app = express();
console.log('Express Initialized');

//Set Views Folder
app.set('views', __dirname + '/views');
//Init Jade
app.set('view engine', 'jade');
console.log('Jade Initialized');

app.use(express.static(__dirname + '/public'));

//Render Index Page
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Welcome' }
  )
})
app.get('/*', function (req, res) {
  res.render('index',
  { title : 'Error' }
  )
})

//App Listen
app.listen(portnumber);
console.log('Server is now running on port '+portnumber);
