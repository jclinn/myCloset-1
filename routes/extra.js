var extra = require("../extra.json");
var models = require('../models');

exports.view = function(req, res){
  res.render("extra");
};

// get extras from db by user
exports.getExtra = function(req, res){
	var email = req.params.user;
	var category = req.params.category;
	//console.log ("email: " + email + " category: " + category);
	
	models.Closet
		.find(
			{"user": email,
			"category": category})
		.exec(findExtra);

	function findExtra(err, extraDB) {
		console.log(extraDB);
		res.render('extra', {'extra_list': extraDB});
	}
};

