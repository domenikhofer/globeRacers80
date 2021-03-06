const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://globeracers.herokuapp.com");
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

///////PROD/////////

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

/*
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


//////DEV/////////////
app.use(cors());
 */

app.use('/db', require("./database/dbRoutes.js"));

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
};
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 1993, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

