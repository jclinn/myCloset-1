
var Mongoose = require('mongoose');


var UserSchema = new Mongoose.Schema({
  	"email": String,
	"password": String
});

exports.User = Mongoose.model('User', UserSchema);


