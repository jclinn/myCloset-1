var tops = require("../tops.json");
var models = require('../models');

exports.view = function(req, res){
  res.render("tops");
};

exports.getTops = function(req, res){
	var email = req.params.user;
	var category = req.params.category;
	console.log ("email: " + email + " category: " + category);
	
	models.Closet
		.find(
			{"user": email,
			"category": category})
		.exec(findTops);

	function findTops(err, topsDB) {
		console.log(topsDB);
		res.render('tops', {'tops_list': topsDB});
	}
};

