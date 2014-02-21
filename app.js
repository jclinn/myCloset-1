
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var mongoose = require('mongoose');

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
var outfitcreated = require('./routes/outfitcreated');
var viewpants = require('./routes/viewpants');
var viewtops = require('./routes/viewtops');
var viewshoes = require('./routes/viewshoes');
var viewextras = require('./routes/viewextras');
var users = require('./routes/users');
var profiles = require('./routes/profiles');

// connect to mongo db
var local_database_name = 'mycloset';
var local_database_uri = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);


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
app.get('/', login.view);
app.get('/login/:user/:password', login.userInfo);
app.get('/login', login.view);
app.get('/project/:name', project.viewProject);
app.get('/signup', signup.view);
app.get('/home', home.signup);
app.get('/mycloset', mycloset.view);
app.get('/viewcloset', viewcloset.getCloset);
app.get('/tops', tops.getTops);
app.get('/outfits', outfits.view);

app.get('/viewoutfits', viewoutfits.getviewoutfits);
app.get('/createoutfit', createoutfit.getCloset);
app.get('/category', category.view);
app.get('/settings', settings.view); 
app.get('/help', help.view);
app.get('/forgotpassword', forgotpassword.view);
app.get('/passwordsent', passwordsent.view);
app.get('/index', index.view);
app.get('/pants', pants.getPants);
app.get('/shoes', shoes.getShoes);
app.get('/extra', extra.getExtra);
app.get('/camera', camera.view);
app.get('/retakepic', retakepic.view);
app.get('/item', item.view);
app.get('/outfitcreated', outfitcreated.view);
app.get('/viewpants', viewpants.view);
app.get('/viewtops', viewtops.view);
app.get('/viewshoes', viewshoes.view);
app.get('/viewextras', viewextras.view);
app.get('/users', users.view);
app.get('/profiles', profiles.view);
app.post('/signup/new', signup.signup);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
