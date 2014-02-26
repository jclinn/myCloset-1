var shoes = require("../shoes.json");
var models = require('../models');

exports.view = function(req, res){
  res.render("shoes");
};

exports.getShoes = function(req, res){
	var email = req.params.user;
	var category = req.params.category;
	console.log ("email: " + email + " category: " + category);
	
	models.Closet
		.find(
			{"user": email,
			"category": category})
		.exec(findShoes);

	function findShoes(err, shoesDB) {
		console.log(shoesDB);
		res.render('shoes', {'shoes_list': shoesDB});
	}
};

