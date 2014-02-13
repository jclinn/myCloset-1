
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var project = require('./routes/project');
// Example route
var login = require('./routes/login');
var signup = require('./routes/signup');
var home = require('./routes/home');
var mycloset = require('./routes/mycloset');
var viewcloset = require('./routes/viewcloset');
var tops = require('./routes/tops');
var outfits = require('./routes/outfits');

var viewoutfits = require('./routes/viewoutfits');
var createoutfit = require('./routes/createoutfit');
var category = require ('./routes/category');
var settings = require('./routes/settings');
var help = require('./routes/help');

var forgotpassword = require('./routes/forgotpassword');
var passwordsent = require('./routes/passwordsent');
var pants = require('./routes/pants');
var shoes = require('./routes/shoes');
var extra = require('./routes/extra');
var camera = require('./routes/camera');
var retakepic = require('./routes/retakepic');
var item = require('./routes/item');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.view);
app.get('/project/:name', project.viewProject);
app.get('/signup', signup.view);
app.get('/home', home.signup);
app.get('/mycloset', mycloset.view);
app.get('/viewcloset', viewcloset.view);
app.get('/tops', tops.view);
app.get('/outfits', outfits.view);

app.get('/viewoutfits', viewoutfits.view);
app.get('/createoutfit', createoutfit.view);
app.get('/category', category.view);
app.get('/settings', settings.view); 
app.get('/help', help.view);
app.get('/forgotpassword', forgotpassword.view);
app.get('/passwordsent', passwordsent.view);
app.get('/index', index.view);
app.get('/pants', pants.view);
app.get('/shoes', shoes.view);
app.get('/extra', extra.view);
app.get('/camera', camera.view);
app.get('/retakepic', retakepic.view);
app.get('/item', item.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
