
var Mongoose = require('mongoose');

//User collection
var UserSchema = new Mongoose.Schema({
	"first": String,
	"last" : String,
  	"email": String,
	"password": String
});
// address as User when adding to collection
exports.User = Mongoose.model('User', UserSchema);

//Closet collection
var ClosetSchema = new Mongoose.Schema({
	"url": String,
	"user": String,
	"category": String
});

exports.Closet = Mongoose.model('Closet', ClosetSchema);

//outfit collection
var OutfitSchema = new Mongoose.Schema({
	"topurl": String,
	"panturl": String,
	"shoeurl": String,
	"extraurl": String,
	"category1": String,
	"category2": String,
	"category3": String,
	"user": String,
	"albumurl": String
});

exports.Outfit = Mongoose.model('Outfit', OutfitSchema);

// below collections are not used
var TopSchema = new Mongoose.Schema ({
	"url": String,
	"user": String,
	"category": String
});

exports.Top = Mongoose.model('Top', TopSchema);

var PantSchema = new Mongoose.Schema ({
	"url": String,
	"user": String,
	"category": String
});

exports.Pant = Mongoose.model('Pant', PantSchema);

var ShoeSchema = new Mongoose.Schema ({
	"url": String,
	"user": String,
	"category": String
});

exports.Shoe = Mongoose.model('Shoe', ShoeSchema);

var ExtraSchema = new Mongoose.Schema ({
	"url": String,
	"user": String,
	"category": String
});

exports.Extra = Mongoose.model('Extra', ExtraSchema);

var CategorySchema = new Mongoose.Schema ({
	"category": String
});

exports.Category = Mongoose.model('Category', CategorySchema);


