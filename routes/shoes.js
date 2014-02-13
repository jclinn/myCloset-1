var shoes = require("../shoes.json");

exports.view = function(req, res){
  res.render("shoes");
};

exports.getShoes = function(req, res){
	console.log("hello");
	res.render( 'shoes', { "shoes_list" : shoes } );
};

